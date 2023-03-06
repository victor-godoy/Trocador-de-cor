// Mude a cor da tela para azul e depois para vermelho a cada 2s.

function mudarClasse() {
  document.body.classList.toggle("active");
}
setInterval(mudarClasse, 2000);
