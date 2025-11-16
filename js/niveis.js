let selected = null;

function selectLevel(level, element) {
    selected = level;

    document.querySelectorAll('.btn').forEach(btn => btn.classList.remove('selected'));
    element.classList.add('selected');
}

function confirmar() {
    if (!selected) {
        alert("Selecione um nível!");
        return;
    }

    
    const normalized = selected
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, ""); 

    
    localStorage.setItem('nivelSelecionado', normalized);


    window.location.href = 'jogoteste.html';
}
