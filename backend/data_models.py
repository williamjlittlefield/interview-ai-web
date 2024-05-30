from pydantic import BaseModel, EmailStr, Field
from datetime import datetime
from enum import Enum
from typing import  Optional, Union
from uuid import UUID
from typing_extensions import Literal

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


# DB models

class InterviewStatus(str, Enum):
    INVITED = 'invited'
    ONGOING = 'ongoing'
    ENDED = 'ended'
    CANCELLED = 'cancelled'


class Employer(BaseModel):
    employer_id: Union[int, str, UUID]
    company_name: Union[str, Literal['']] = Field(alias='companyName')
    email: Union[EmailStr, Literal['']]
    first_name: Union[str, Literal['']] = Field(alias='firstName')
    last_name: Union[str, Literal['']] = Field(alias='lastName')


class Job(BaseModel):
    employer_id: Union[int, str, UUID]
    active: bool = False
    date_created: Optional[datetime]
    date_updated: Optional[datetime]
    description: Union[str, Literal['']]
    filepath: Optional[str] = ''
    job_id: Union[int, str, UUID]
    title: str


class Applicant(BaseModel):
    applicant_id: Union[int, str, UUID]
    email: Union[EmailStr, Literal['']]
    first_name: Union[str, Literal['']] = Field(alias='firstName')
    last_name: Union[str, Literal['']] = Field(alias='lastName')


class Interview(BaseModel):
    applicant_id: Union[int, str, UUID]
    applicant_first_name: Union[str, Literal['']] = Field(alias='firstName')
    applicant_last_name: Union[str, Literal['']] = Field(alias='lastName')
    date_created: Optional[datetime]
    date_updated: Optional[datetime]
    employer_id: Union[int, str, UUID]
    interview_id: Union[int, str, UUID]
    job_id: Union[int, str, UUID]
    status: Union[InterviewStatus, Literal['']]
    video_filepath: Optional[str] = ''


class Question(BaseModel):
    question_id: Union[int, str, UUID]
    applicant_id: Union[int, str, UUID]
    employer_id: Union[int, str, UUID]
    interview_id: Union[int, str, UUID]
    job_id: Union[int, str, UUID]
    audio_filepath: Optional[str] = ''
    transcript: Optional[str] = ''


class Answer(BaseModel):
    answer_id: Union[int, str, UUID]
    applicant_id: Union[int, str, UUID]
    employer_id: Union[int, str, UUID]
    interview_id: Union[int, str, UUID]
    job_id: Union[int, str, UUID]
    audio_filepath: Optional[str] = ''
    transcript: Optional[str] = ''

# class Results(BaseModel):