from pathlib import Path
from openai import OpenAI
import os
client = OpenAI(
    api_key=os.environ.get("OPENAI_API_KEY"),
)


def generate_speech(text: str, thread_id: str, question_number: str) -> str:
    speech_file_path = Path(__file__).parent / f"../static/{thread_id}_{question_number}.mp3"
    response = client.audio.speech.create(
      model="tts-1",
      voice="alloy",
      input=text
    )
    response.stream_to_file(speech_file_path)
    return speech_file_path.name


def generate_answer_transcript(file_path):
    audio_file= open(file_path, "rb")
    transcription = client.audio.transcriptions.create(
      model="whisper-1",
      file=audio_file
    )
    return transcription.text


#TODO: streaming audio
# def stream_to_speakers() -> None:
#     player_stream = pyaudio.PyAudio().open(format=pyaudio.paInt16, channels=1, rate=24000, output=True)
#
#     start_time = time.time()
#     with client.audio.speech.with_streaming_response.create(
#         model="tts-1",
#         voice="alloy",
#         input="""I see skies of blue and clouds of white
#                  The bright blessed days, the dark sacred nights
#                  And I think to myself
#                  What a wonderful world""",
#          ) as response:
#          print(f"Time to first byte: {int((time.time() - start_time) * 1000)}ms")
#          for chunk in response.iter_bytes(chunk_size=1024):
#             player_stream.write(chunk)
#
#          print(f"Done in {int((time.time() - start_time) * 1000)}ms.")
#
# stream_to_speakers()