import os
import re
from pathlib import Path
from fastapi import FastAPI, File, UploadFile, Header, HTTPException
from data_models import ConversationResponse, StartConversationInput, SummaryResponse, EndConversationRequest
from AI_functions.B2B_interview_simulator import simulate_interview, get_results
from AI_functions.whisper_functions import generate_speech, generate_answer_transcript
from fastapi.staticfiles import StaticFiles
from AI_functions.utils import zip_folder
import shutil
import uvicorn

app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")
STATIC_DIR = Path(__file__).resolve().parent / 'static'
STATIC_DIR.mkdir(exist_ok=True)


@app.post("/start-conversation/", response_model=ConversationResponse)
async def start_conversation(input: StartConversationInput):
    last_response = False
    question, thread_id, question_number = simulate_interview(job_position=input.job_position,
                                                              job_requirements=input.job_requirements)
    audio_file_name = generate_speech(question, question_number, thread_id)
    audio_file_url = f"http://127.0.0.1:8000/static/{thread_id}/{audio_file_name}"

    return ConversationResponse(thread_id=thread_id, audio_file_url=audio_file_url, last_response=last_response)


@app.post("/continue-conversation/", response_model=ConversationResponse)
async def continue_conversation(audio_file: UploadFile = File(...), thread_id: str = Header(None, alias='X-Thread-ID')):
    if not re.match(r"^Answer_\d+", audio_file.filename):
        raise HTTPException(status_code=400, detail="Filename must be in the format 'Answer_X', where X is a number.")

    file_location = STATIC_DIR / thread_id / f"{audio_file.filename}"
    with open(file_location, "wb") as buffer:
        shutil.copyfileobj(audio_file.file, buffer)

    text = generate_answer_transcript(file_path=file_location)
    question, thread_id, question_number = simulate_interview(answer=text, thread_id=thread_id)
    if "This conversation has come to an end." in question:
        last_response = True
    else:
        last_response = False
    audio_file_name = generate_speech(question, question_number, thread_id)
    audio_file_url = f"http://127.0.0.1:8000/static/{thread_id}/{audio_file_name}"
    return ConversationResponse(thread_id=thread_id, audio_file_url=audio_file_url, last_response=last_response)


@app.post("/end_conversation/", response_model=SummaryResponse)
async def end_conversation(request: EndConversationRequest):
    results = get_results(request.thread_id)
    return SummaryResponse(summary=results)


@app.post("/get-interview-files/")
async def get_interview_files(request: EndConversationRequest):
    zip_path = os.path.join("static/zip_files", request.thread_id)
    folder_path = os.path.join("static", request.thread_id)
    zip_folder(folder_path, zip_path)
    download_url = f"http://127.0.0.1:8000/static/zip_files/{request.thread_id}.zip"
    return {"download_url": download_url}


if __name__ == "__main__":
    uvicorn.run("api:app", host="127.0.0.1", port=8000, log_level="info")
