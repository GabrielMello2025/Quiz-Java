class QuizGame {
    constructor() {
        this.questions = [];
        this.currentQuestion = 0;
        this.score = 0;
        this.correctAnswers = 0;
        this.totalQuestions = 10;

        this.timePerQuestion = 20;
        this.timeLeft = this.timePerQuestion;
        this.timer = null;

        this.progressStatus = []; 

        this.selectedLevel = localStorage.getItem("nivelSelecionado") || "facil";
        this.user = JSON.parse(localStorage.getItem("usuarioLogado") || "{}");
        this.userScores = JSON.parse(localStorage.getItem("userScores") || "{}");

        this.init();
    }

    init() {
        this.updateQuizTitle();
        this.loadUserScore();
        this.loadQuestions();
        this.updateHeaderInfo();
        this.setupEventListeners();
        this.loadQuestion();
    }

    updateQuizTitle() {
        const title = document.getElementById("quiz-title");
        if (!title) return;

        const nivel =
            this.selectedLevel.charAt(0).toUpperCase() +
            this.selectedLevel.slice(1);

        title.textContent = `Desafio Java - Nível ${nivel}`;
    }

    loadUserScore() {
        if (this.user.email && this.userScores[this.user.email]) {
            this.score = this.userScores[this.user.email].score || 0;
        }
    }

    saveUserScore() {
        if (!this.user.email) return;

        this.userScores[this.user.email] = {
            score: this.score,
            nome: this.user.nome || "Jogador",
            nivel: this.selectedLevel,
            lastPlay: new Date().toISOString(),
        };

        localStorage.setItem("userScores", JSON.stringify(this.userScores));
    }

    loadQuestions() {
        const nivel = this.selectedLevel
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");

        if (!questions[nivel]) {
            this.questions = [...questions.facil];
        } else {
            this.questions = [...questions[nivel]];
        }

        this.questions = this.shuffleArray(this.questions).slice(0, this.totalQuestions);


        this.progressStatus = Array(this.totalQuestions).fill("pending");
    }

    shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    startTimer() {
        clearInterval(this.timer);

        this.timer = setInterval(() => {
            this.timeLeft--;
            this.updateTimerDisplay();

            if (this.timeLeft <= 0) {
                clearInterval(this.timer);
                this.timeUp();
            }
        }, 1000);
    }

    updateTimerDisplay() {
        const display = document.getElementById("timer-score");
        display.innerHTML = `⏱ ${this.timeLeft}s | ⭐ ${this.score}`;
    }

    resetTimer() {
        this.timeLeft = this.timePerQuestion;
        this.startTimer();
    }

    timeUp() {
        alert("Tempo esgotado!");
        this.markProgress("wrong");
        this.nextQuestion();
    }

    updateHeaderInfo() {
        const userInfo = document.getElementById("user-info");
        const counter = document.getElementById("question-counter");

        if (userInfo) userInfo.innerHTML = `👤 ${this.user.nome || "Jogador"}`;
        counter.innerHTML = `❓ ${this.currentQuestion + 1}/${this.totalQuestions}`;
    }

    setupEventListeners() {
        const ids = ["option-a", "option-b", "option-c", "option-d"];
        ids.forEach((id, index) => {
            document.getElementById(id).addEventListener("click", () => this.selectOption(index));
        });

        document.getElementById("confirm-btn").addEventListener("click", () => this.checkAnswer());
    }

    selectOption(index) {
        document.querySelectorAll(".option").forEach(o => o.classList.remove("selected"));
        const ids = ["option-a", "option-b", "option-c", "option-d"];
        document.getElementById(ids[index]).classList.add("selected");
    }

    loadQuestion() {
        if (this.currentQuestion >= this.totalQuestions) {
            this.endGame();
            return;
        }

        const q = this.questions[this.currentQuestion];

        document.getElementById("question-text").textContent = q.pergunta;
        document.getElementById("option-a").textContent = "A) " + q.alternativas[0];
        document.getElementById("option-b").textContent = "B) " + q.alternativas[1];
        document.getElementById("option-c").textContent = "C) " + q.alternativas[2];
        document.getElementById("option-d").textContent = "D) " + q.alternativas[3];

        document.querySelectorAll(".option").forEach(o => {
            o.classList.remove("selected");
            o.style.backgroundColor = "";
            o.style.borderColor = "";
        });

        this.updateHeaderInfo();
        this.updateProgressBar();
        this.resetTimer();
    }

    updateProgressBar() {
        const bar = document.getElementById("progress-bar");
        bar.innerHTML = "";

        this.progressStatus.forEach((status, i) => {
            const sq = document.createElement("div");
            sq.classList.add("square");

            if (i === this.currentQuestion) sq.style.background = "#4d79ff"; // azul

            if (status === "correct") sq.style.background = "#46c646"; // verde
            if (status === "wrong") sq.style.background = "#e04646"; // vermelho

            bar.appendChild(sq);
        });
    }

    markProgress(result) {
        this.progressStatus[this.currentQuestion] = result;
        this.updateProgressBar();
    }

    checkAnswer() {
        const selected = document.querySelector(".option.selected");
        if (!selected) return alert("Selecione uma alternativa!");

        clearInterval(this.timer);

        const ids = ["option-a", "option-b", "option-c", "option-d"];
        const selectedIndex = ids.indexOf(selected.id);

        const q = this.questions[this.currentQuestion];

        if (selectedIndex === q.correta) {
            this.score += 100;
            this.correctAnswers++;
            selected.style.backgroundColor = "#d4edda";
            selected.style.borderColor = "#28a745";
            this.markProgress("correct");
        } else {
            selected.style.backgroundColor = "#f8d7da";
            selected.style.borderColor = "#dc3545";

            const correctOpt = document.getElementById(ids[q.correta]);
            correctOpt.style.backgroundColor = "#d4edda";
            correctOpt.style.borderColor = "#28a745";

            this.markProgress("wrong");
        }

        this.saveUserScore();

        setTimeout(() => this.nextQuestion(), 1300);
    }

    nextQuestion() {
        this.currentQuestion++;
        this.loadQuestion();
    }

    endGame() {
        clearInterval(this.timer);

        localStorage.setItem("resultadoQuiz", JSON.stringify({
            pontuacao: this.score,
            corretas: this.correctAnswers,
            total: this.totalQuestions,
            nivel: this.selectedLevel,
            usuario: this.user.nome || "Jogador",
            email: this.user.email
        }));

        window.location.href = "pontuacao.html";
    }
}

document.addEventListener("DOMContentLoaded", () => new QuizGame());
