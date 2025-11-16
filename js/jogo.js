let nivelSelecionado = null;
let perguntas = [];
let indice = 0;
let pontos = 0;

function selectLevel(level, element) {
    nivelSelecionado = level;

    document.querySelectorAll('.btn').forEach(btn => {
        btn.classList.remove('selected');
    });

    element.classList.add('selected');
}

function confirmar() {
    if (!nivelSelecionado) {
        alert("Selecione um nível!");
        return;
    }

    perguntas = questions[nivelSelecionado];
    indice = 0;
    pontos = 0;

    document.getElementById("tela-inicial").classList.add("hidden");
    document.getElementById("tela-quiz").classList.remove("hidden");

    mostrarPergunta();
}

function mostrarPergunta() {
    let atual = perguntas[indice];

    document.getElementById("texto-pergunta").innerText = atual.pergunta;

    let opcoesDiv = document.getElementById("opcoes");
    opcoesDiv.innerHTML = "";

    atual.alternativas.forEach((alt, i) => {
        let div = document.createElement("div");
        div.classList.add("opcao");
        div.innerText = alt;

        div.onclick = () => {
            document.querySelectorAll(".opcao").forEach(o => o.classList.remove("selected"));
            div.classList.add("selected");
            div.dataset.index = i;
        };

        opcoesDiv.appendChild(div);
    });
}

function proximaPergunta() {
    let selecionado = document.querySelector(".opcao.selected");

    if (!selecionado) {
        alert("Selecione uma alternativa!");
        return;
    }

    let resposta = parseInt(selecionado.dataset.index);

    if (resposta === perguntas[indice].correta) {
        pontos++;
    }

    indice++;

    if (indice >= perguntas.length) {
        finalizarQuiz();
        return;
    }

    mostrarPergunta();
}

function finalizarQuiz() {
    document.getElementById("tela-quiz").classList.add("hidden");
    document.getElementById("tela-final").classList.remove("hidden");

    document.getElementById("resultado-texto").innerText =
        `Você acertou ${pontos} de ${perguntas.length} questões!`;
}

function reiniciar() {
    document.getElementById("tela-final").classList.add("hidden");
    document.getElementById("tela-inicial").classList.remove("hidden");
}
