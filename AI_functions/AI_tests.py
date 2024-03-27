from AI_functions.utils import wait_on_run, show_json, client

"""
This file contains an AI function simulating a user to answer the interview questions, so that the interview can be tested E2E.
"""

def generate_AI_answer(question, thread_id=None):
    if thread_id is None:
        run = client.beta.threads.create_and_run(
            assistant_id="asst_hMz1Q7QrbmgFoULiNYTqW4jH",
            thread={
                "messages": [
                    {"role": "user", "content": question}
                ]
            })
        thread_id = run.thread_id
    else:
        message = client.beta.threads.messages.create(
            thread_id=thread_id,
            role="user",
            content=question
        )
        run = client.beta.threads.runs.create(
            thread_id=thread_id,
            assistant_id="asst_hMz1Q7QrbmgFoULiNYTqW4jH",
        )

    wait_on_run(run, thread_id)

    # Retrieve messages after run completes
    data = show_json(client.beta.threads.messages.list(thread_id))

    return data['data'][0]['content'][0]['text']['value'], thread_id