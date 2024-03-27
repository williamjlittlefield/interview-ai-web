from pydantic import BaseModel


class StartConversationInput(BaseModel):
    job_position: str
    job_requirements: str


class SummaryResponse(BaseModel):
    summary: str


class ConversationResponse(BaseModel):
    audio_file_url: str
    thread_id: str
    last_response: bool


class EndConversationRequest(BaseModel):
    thread_id: str