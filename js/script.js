// ===================================
// MODO ESCURO
// ===================================

// Seleciona o botão do tema

const botaoTema = document.getElementById("botaoTema");


// Função para alternar o tema

function alternarTema() {

    document.body.classList.toggle("escuro");


    // Altera o texto do botão

    if (document.body.classList.contains("escuro")) {

        botaoTema.textContent = "☀️ Modo claro";

    } else {

        botaoTema.textContent = "🌙 Modo escuro";

    }

}


// Evento de clique

botaoTema.addEventListener("click", alternarTema);



// ===================================
// ALTERAR TEXTO
// ===================================

const botaoMensagem = document.getElementById("botaoMensagem");

const mensagem = document.getElementById("mensagem");


// Função para alterar o texto

function alterarTexto() {

    mensagem.textContent =
        "O texto foi alterado pelo JavaScript!";

}


// Evento de clique

botaoMensagem.addEventListener("click", alterarTexto);