// js/acessibilidade.js

document.addEventListener('DOMContentLoaded', function() {
    // Selecionando os botões
    const btnAumentar = document.getElementById('btn-aumentar-fonte');
    const btnDiminuir = document.getElementById('btn-diminuir-fonte');
    const btnResetar = document.getElementById('btn-resetar-fonte');
    const btnContraste = document.getElementById('btn-alto-contraste');
    
    // Configurações Iniciais
    const body = document.body;
    let tamanhoAtualFonte = 100; // Porcentagem inicial

    // --- LÓGICA DE FONTE (Item 5.12) ---
    
    // Verifica se já existe preferência salva
    if (localStorage.getItem('tamanhoFonte')) {
        tamanhoAtualFonte = parseInt(localStorage.getItem('tamanhoFonte'));
        body.style.fontSize = tamanhoAtualFonte + '%';
    }

    function atualizarFonte() {
        body.style.fontSize = tamanhoAtualFonte + '%';
        localStorage.setItem('tamanhoFonte', tamanhoAtualFonte);
    }

    btnAumentar.addEventListener('click', function() {
        if (tamanhoAtualFonte < 150) { // Limite máximo 150%
            tamanhoAtualFonte += 10;
            atualizarFonte();
        }
    });

    btnDiminuir.addEventListener('click', function() {
        if (tamanhoAtualFonte > 70) { // Limite mínimo 70%
            tamanhoAtualFonte -= 10;
            atualizarFonte();
        }
    });

    btnResetar.addEventListener('click', function() {
        tamanhoAtualFonte = 100;
        atualizarFonte();
    });

    // --- LÓGICA DE ALTO CONTRASTE (Item 5.11) ---

    // Verifica preferência salva
    if (localStorage.getItem('altoContraste') === 'true') {
        body.classList.add('alto-contraste');
    }

    btnContraste.addEventListener('click', function() {
        body.classList.toggle('alto-contraste');
        
        // Salva a preferência (true ou false)
        if (body.classList.contains('alto-contraste')) {
            localStorage.setItem('altoContraste', 'true');
        } else {
            localStorage.setItem('altoContraste', 'false');
        }
    });
});