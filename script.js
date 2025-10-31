// Exemplo simples para alternar o ponto ativo (somente visual)
const dots = document.querySelectorAll(".dot");
let activeIndex = 0;

setInterval(() => {
  dots[activeIndex].classList.remove("active");
  activeIndex = (activeIndex + 1) % dots.length;
  dots[activeIndex].classList.add("active");
}, 3000);
