import os
import time
from openai import OpenAI
import json

client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"),)


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


def simulate_immediate_feedback_interview(answer=None, job_position=None, job_requirements=None, thread_id=None):
    if thread_id is None:
        run = client.beta.threads.create_and_run(
            assistant_id="asst_pO1QYgy918gWVrwdIH5aWELW",
            thread={
                "messages": [
                    {"role": "user", "content": f"Job position: {job_position} \n Job offer content: {job_requirements}"}
                ]
            })
        thread_id = run.thread_id
    else:
        message = client.beta.threads.messages.create(
            thread_id=thread_id,
            role="user",
            content=f"{answer}"
        )
        run = client.beta.threads.runs.create(
            thread_id=thread_id,
            assistant_id="asst_pO1QYgy918gWVrwdIH5aWELW",
        )

    wait_on_run(run, thread_id)

    # Retrieve messages after run completes
    data = show_json(client.beta.threads.messages.list(thread_id))
    assistant_messages_count = sum(1 for message in data['data'] if message['role'] == "assistant")

    return data['data'][0]['content'][0]['text']['value'], thread_id, assistant_messages_count


# if __name__ == "__main__":
    # question, thread_id = simulate_interview(job_position="Software Engineer", job_requirements="Experience in Python")
    # generate_speech(question)
    # print(thread_id)
    # print(simulate_interview(thread_id="thread_TSOzAHkRWg5IH8QkhM83inkk", answer="Hi, the answer to this question is unknown."))
    # print(simulate_interview(thread_id="thread_TSOzAHkRWg5IH8QkhM83inkk", answer="To stay updated with the latest programming technologies and practices, I regularly read technical blogs, participate in online forums, and contribute to open-source projects. Engaging with the developer community on platforms like GitHub and Stack Overflow helps me learn from real-world problems and solutions. Additionally, I attend webinars and conferences, and take online courses to deepen my knowledge in specific areas. This continuous learning approach allows me to adapt to new technologies and methodologies effectively."))