import json
import time
import os
import shutil
from dotenv import load_dotenv

from openai import OpenAI

load_dotenv()
client = OpenAI(api_key=os.getenv('OPENAI_API_KEYS'),)

# client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"),)


def log_message_to_file(user, message, thread_id):
    with open(f"{os.getcwd()}/static/{thread_id}/conversation_log.txt", "a") as file:
        if user:
            file.write(f"{user}: {message}\n")
        else:
            file.write(f"{message}\n")
        file.write("-" * 80 + "\n")


def zip_folder(folder_path, zip_path):
    shutil.make_archive(zip_path, 'zip', folder_path)


def show_json(obj):
    return json.loads(obj.model_dump_json())


def wait_on_run(run, thread_id):
    while run.status == "queued" or run.status == "in_progress":
        run = client.beta.threads.runs.retrieve(
            thread_id=thread_id,
            run_id=run.id,
        )
        time.sleep(0.5)
    return run