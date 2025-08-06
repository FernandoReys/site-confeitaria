// Toggle do menu mobile
function toggleMenu() {
  const menu = document.querySelector("nav ul");
  menu.classList.toggle("active");
}

// Cursor animado customizado
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

let mouseX = 0, mouseY = 0, posX = 0, posY = 0;
const speed = 0.18;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function render() {
  posX += (mouseX - posX) * speed;
  posY += (mouseY - posY) * speed;
  cursor.style.transform = `translate(${posX}px, ${posY}px) translate(-50%, -50%)`;
  requestAnimationFrame(render);
}
render();

document.querySelectorAll('a, button, header').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('cursor--hover'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('cursor--hover'));
});

// Modal de pedido no produtos.html
const modal = document.getElementById('modalPedido');
const modalCloseBtn = document.getElementById('modalClose');
const pedidoForm = document.getElementById('pedidoForm');
const produtoSelecionado = document.getElementById('produtoSelecionado');

document.querySelectorAll('.order-btn').forEach(button => {
  button.addEventListener('click', () => {
    const produto = button.getAttribute('data-produto');
    produtoSelecionado.textContent = `Produto: ${produto}`;
    modal.classList.add('open');
    pedidoForm.reset();
    pedidoForm.nomePedido.focus();
  });
});

modalCloseBtn.addEventListener('click', () => {
  modal.classList.remove('open');
});

modal.addEventListener('click', e => {
  if (e.target === modal) {
    modal.classList.remove('open');
  }
});

pedidoForm.addEventListener('submit', e => {
  e.preventDefault();

  if (!pedidoForm.checkValidity()) {
    pedidoForm.reportValidity();
    return;
  }

  alert(`Obrigado, ${pedidoForm.nomePedido.value}! Seu pedido de ${produtoSelecionado.textContent.replace('Produto: ', '')} foi enviado.`);
  modal.classList.remove('open');
  pedidoForm.reset();
});
