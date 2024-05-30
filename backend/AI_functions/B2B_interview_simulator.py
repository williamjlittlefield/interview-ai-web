import os

from AI_functions.utils import wait_on_run, show_json, client, log_message_to_file
from AI_functions.AI_tests import generate_AI_answer

"""
This is a main file for the interactions with AI
"""


def simulate_interview(answer=None, job_position=None, job_requirements=None, thread_id=None):
    if thread_id is None:
        run = client.beta.threads.create_and_run(
            assistant_id="asst_MmiU1nilqJFsJ1DCnM0Fwu82",
            thread={
                "messages": [
                    {"role": "user", "content": f"Job position: {job_position} \n Job requirements: {job_requirements}"}
                ]
            })
        thread_id = run.thread_id
        os.makedirs(f"{os.getcwd()}/static/{thread_id}")
        log_message_to_file(message=f"Job position: {job_position} \n Job requirements: {job_requirements}", thread_id=thread_id)
    else:
        message = client.beta.threads.messages.create(
            thread_id=thread_id,
            role="user",
            content=f"{answer}"
        )
        run = client.beta.threads.runs.create(
            thread_id=thread_id,
            assistant_id="asst_MmiU1nilqJFsJ1DCnM0Fwu82",
        )

    wait_on_run(run, thread_id)

    # Retrieve messages after run completes
    data = show_json(client.beta.threads.messages.list(thread_id))
    question = data['data'][0]['content'][0]['text']['value']
    assistant_messages_count = sum(1 for message in data['data'] if message['role'] == "assistant")
    if answer:
        log_message_to_file(user="User", message=answer, thread_id=thread_id)
    log_message_to_file(user="AI Recruiter", message=question, thread_id=thread_id)
    return question, thread_id, assistant_messages_count


def get_results(thread_id):
    message = client.beta.threads.messages.create(
        thread_id=thread_id,
        role="user",
        content="End the interview"
    )
    run = client.beta.threads.runs.create(
        thread_id=thread_id,
        assistant_id="asst_MmiU1nilqJFsJ1DCnM0Fwu82",
    )

    wait_on_run(run, thread_id)

    # Retrieve messages after run completes
    data = show_json(client.beta.threads.messages.list(thread_id))
    summary = data['data'][0]['content'][0]['text']['value']
    log_message_to_file(user="Summary", message=summary, thread_id=thread_id)
    return summary


# if __name__ == "__main__":
#     assistant_messages_count = 0
#     answer_thread_id = None
#     while assistant_messages_count < 6:
#         if assistant_messages_count == 0:
#             question, thread_id, assistant_messages_count = simulate_interview(job_position="Machine Learning Engineer", job_requirements=job_requirements)
#         else:
#             question, thread_id, assistant_messages_count = simulate_interview(answer=answer, thread_id=thread_id)
#         print(assistant_messages_count)
#         print(question)
#         if assistant_messages_count <= 5:
#             answer, answer_thread_id = generate_AI_answer(question, answer_thread_id)
#             print("ANSWER:")
#             print(answer)
#         print("-"* 80)
#     else:
#         results = get_results(thread_id)
#         print(results)

    # generate_speech(question)
    # print(thread_id)
    # print(simulate_interview(thread_id="thread_TSOzAHkRWg5IH8QkhM83inkk", answer="Hi, the answer to this question is unknown."))
    # print(simulate_interview(thread_id="thread_TSOzAHkRWg5IH8QkhM83inkk", answer="To stay updated with the latest programming technologies and practices, I regularly read technical blogs, participate in online forums, and contribute to open-source projects. Engaging with the developer community on platforms like GitHub and Stack Overflow helps me learn from real-world problems and solutions. Additionally, I attend webinars and conferences, and take online courses to deepen my knowledge in specific areas. This continuous learning approach allows me to adapt to new technologies and methodologies effectively."))