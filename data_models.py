from pydantic import BaseModel


class StartConversationInput(BaseModel):
    job_position: str
    job_requirements: str


class GenerateAnswerInput(BaseModel):
    thread_id: str
    # For audio files, we'll continue to use UploadFile directly in the endpoint


class ConversationResponse(BaseModel):
    audio_file_url: str
    thread_id: str
