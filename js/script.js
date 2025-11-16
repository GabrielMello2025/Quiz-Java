
const images = [
    "img/img1.png",
    "img/img2.png",
    "img/img3.png"
];

let index = 0;
const sliderImg = document.getElementById('sliderImg');
const dots = document.querySelectorAll('.dot');

function changeImage() {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    sliderImg.src = images[index];
    updateDots();
}

function updateDots() {
    dots.forEach((dot, i) => {
        dot.classList.remove("active");
        if (i === index) {
            dot.classList.add("active");
        }
    });
}


document.addEventListener('DOMContentLoaded', function () {
    console.log('Página carregada - inicializando login...');

    const loginForm = document.querySelector('form');

    if (loginForm) {
        console.log('Formulário encontrado!');

        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            console.log('Formulário submetido!');

            const email = document.getElementById('email');
            const senha = document.getElementById('senha');

            if (!email || !senha) {
                alert('Erro: Campos não encontrados!');
                return;
            }

            const emailValor = email.value.trim();
            const senhaValor = senha.value.trim();

            console.log('Email:', emailValor);
            console.log('Senha:', senhaValor);


            if (!emailValor || !senhaValor) {
                alert('Preencha email e senha!');
                return;
            }

            if (!validarEmail(emailValor)) {
                alert('Digite um email válido!');
                return;
            }


            localStorage.setItem('usuarioLogado', JSON.stringify({
                email: emailValor,
                nome: emailValor.split('@')[0]
            }));

            console.log('Redirecionando para niveis.html...');


            window.location.href = 'niveis.html';
        });
    } else {
        console.log('Formulário NÃO encontrado!');
    }
});


function validarEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}


if (sliderImg) {
    setInterval(changeImage, 3000);


    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            index = i;
            sliderImg.src = images[index];
            updateDots();
        });
    });
}