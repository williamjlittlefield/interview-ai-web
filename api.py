from pathlib import Path
from fastapi import FastAPI, File, UploadFile, Header
from data_models import ConversationResponse, StartConversationInput, GenerateAnswerInput
from AI_functions.interview_simulator import simulate_interview
from AI_functions.whisper_functions import generate_speech, generate_answer_transcript
from fastapi.staticfiles import StaticFiles
import shutil
import uvicorn

app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")
STATIC_DIR = Path(__file__).resolve().parent / 'static'
STATIC_DIR.mkdir(exist_ok=True)


@app.post("/start-conversation/", response_model=ConversationResponse)
async def start_conversation(input: StartConversationInput):
    question, thread_id, question_number = simulate_interview(job_position=input.job_position, job_requirements=input.job_requirements)
    audio_file_name = generate_speech(question, thread_id, question_number)

    audio_file_url = f"http://127.0.0.1:8000/static/{audio_file_name}"

    return ConversationResponse(thread_id=thread_id, audio_file_url=audio_file_url)


@app.post("/generate-answer/", response_model=ConversationResponse)
async def generate_answer(audio_file: UploadFile = File(...), thread_id: str = Header(None, alias='X-Thread-ID')):

    file_location = STATIC_DIR / f"{thread_id}_{audio_file.filename}"
    with open(file_location, "wb") as buffer:
        shutil.copyfileobj(audio_file.file, buffer)

    print(audio_file)
    print(file_location)
    text = generate_answer_transcript(file_path=file_location)
    question, thread_id, question_number = simulate_interview(answer=text, thread_id=thread_id)
    audio_file_name = generate_speech(question, thread_id, question_number)
    audio_file_url = f"http://127.0.0.1:8000/static/{audio_file_name}"
    return ConversationResponse(thread_id=thread_id, audio_file_url=audio_file_url)


if __name__ == "__main__":
    uvicorn.run("api:app", host="127.0.0.1", port=8000, log_level="info")
