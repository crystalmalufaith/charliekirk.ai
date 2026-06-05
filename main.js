import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: "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",
});

function addMessage(message, sender) {
  const chatContainer = document.getElementById('chat');
  const messageDiv = document.createElement('div');
  messageDiv.className = sender;
  messageDiv.innerHTML = message; 
  chatContainer.appendChild(messageDiv);

  MathJax.typesetPromise();
}

MathJax.typesetPromise();
renderMathInElement(chatContainer);

main();
