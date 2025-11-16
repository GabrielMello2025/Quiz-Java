function loadResults() {
    const resultado = JSON.parse(localStorage.getItem('resultadoQuiz') || '{}');

    document.getElementById('pontuacao').textContent = resultado.pontuacao || 0;
    document.getElementById('corretas').textContent = `${resultado.corretas || 0}/${resultado.total || 0}`;
    document.getElementById('tempo').textContent = resultado.tempo || '0:00';
}

function jogarNovamente() {
    window.location.href = 'niveis.html';
}


document.addEventListener('DOMContentLoaded', loadResults);