const widget = document.getElementById('chat-widget');
const btnOpen = document.getElementById('open-chat');
const btnToggle = document.getElementById('toggle-chat');

btnOpen.onclick = () => widget.classList.add('expanded');
btnToggle.onclick = () => {
  widget.classList.toggle('expanded');
  widget.classList.toggle('collapsed');
};

// función de envío (placeholder)
function sendMessage() {
  const input = document.getElementById('chat-input');
  const body  = widget.querySelector('.chat-body');
  if (!input.value.trim()) return false;

  // 1) Muestra el mensaje del usuario
  const msg = document.createElement('div');
  msg.textContent = input.value;
  msg.style.cssText = `
    background: var(--clr-accent);
    color:#fff;
    margin:0.5rem 0;
    padding:0.5rem;
    border-radius:var(--radius);
  `;
  body.append(msg);

  // 2) Llamada a tu backend que invoque Vertex AI
  // Placeholder API for HuellaBot
  const botMsg = document.createElement('div');
  botMsg.textContent = "HuellaBot dice: Lo siento, el servicio no está disponible por el momento.";
  botMsg.style.cssText = `
    background: var(--clr-surface);
    color: var(--clr-text);
    margin:0.5rem 0;
    padding:0.5rem;
    border-radius:var(--radius);
  `;
  body.append(botMsg);
  body.scrollTop = body.scrollHeight;

  input.value = '';
  body.scrollTop = body.scrollHeight;
  return false;
}
