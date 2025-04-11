let input = document.getElementById('input');
let botao = document.getElementById('botao');
let palavraFixa = "SAPOS";
let jogoAtivo = true;

botao.addEventListener('click', function(event) {
    if (!jogoAtivo) return; // se o jogo acabou, não faz mais nada

    if (event.target.tagName === 'BUTTON') {
        input.value += event.target.innerText;
    }

    if (input.value.length === 5) {
        if (input.value.toUpperCase() === palavraFixa) {
            alert("Parabéns! Você acertou a palavra!");
            jogoAtivo = false; // impede digitação após acerto
        } else {
            alert("Palavra incorreta. Tente novamente!");
        }

        input.value = ''; // limpa o campo para nova tentativa
    }
});
