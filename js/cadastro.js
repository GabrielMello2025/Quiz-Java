
const form = document.querySelector("form");
const nomeInput = document.querySelector('input[placeholder="Nome completo"]');
const emailInput = document.querySelector('input[placeholder="Email"]');
const senhaInput = document.querySelector('input[placeholder="Senha"]');


function validarEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}


form.addEventListener("submit", (event) => {
  event.preventDefault(); 

  const nome = nomeInput.value.trim();
  const email = emailInput.value.trim();
  const senha = senhaInput.value.trim();


  if (!nome || !email || !senha) {
    alert("Preencha todos os campos!");
    return;
  }

  if (!validarEmail(email)) {
    alert("Digite um email válido.");
    return;
  }

  if (senha.length < 6) {
    alert("A senha deve ter pelo menos 6 caracteres!");
    return;
  }


alert("Conta criada com sucesso!");
window.location.href = "index.html";

;

 
  form.reset();

  
});
