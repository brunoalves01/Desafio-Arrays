let numerosAleatorios = [];

// 1. Laço para gerar 7 números
for (let i = 0; i < 7; i++) {
    let numeroSorteado = Math.floor(Math.random() * 100) + 1;//Professor, pelo que eu entendi o "Math.floor" serve para arredondar números decimais, já que o "Math.random" Serve para escolher um número aleatório porém com muitas casas decimais👍"
    numerosAleatorios[i] = numeroSorteado;
}

// 2. Criação de uma variável de texto para acumular a lista de posições
let mensagem = "Valores gerados aleatoriamente:\n";

for (let i = 0; i < 7; i++) {
    mensagem = mensagem + "Posição " + i + " recebeu o valor: " + numerosAleatorios[i] + "\n";
}

alert(mensagem);