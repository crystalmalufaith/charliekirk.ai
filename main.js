import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: "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",
});

from groq import Groq

client = Groq()
completion = client.chat.completions.create(
    model="openai/gpt-oss-120b",
    messages=[
      {
        "role": "user",
        "content": ""
      }
    ],
    temperature=1,
    max_completion_tokens=8192,
    top_p=1,
    reasoning_effort="medium",
    stream=True,
    stop=None
)

for chunk in completion:
    print(chunk.choices[0].delta.content or "", end="")


function addMessage(message, sender) {
  const chatContainer = document.getElementById('chat');
  const messageDiv = document.createElement('div');
  messageDiv.className = sender;
  messageDiv.innerHTML = message; // contains LaTeX
  chatContainer.appendChild(messageDiv);

  // Re-render LaTeX
  MathJax.typesetPromise();
}

MathJax.typesetPromise();
renderMathInElement(chatContainer);

main();
