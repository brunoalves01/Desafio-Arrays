let numeros = [];


for (let i = 0; i < 10; i++) {
    numeros[i] = parseInt(prompt("Por favor, digite o " + (i + 1) + "º número:"));
}

// 2. Solicitando o número que o usuário quer buscar
let numeroBuscado = parseInt(prompt("Agora, digite o número que você deseja contar:"));
let contador = 0;

// 3. Varrendo o vetor para procurar o número
for (let i = 0; i < 10; i++) {
    if (numeros[i] === numeroBuscado) {
        contador = contador + 1; // Se achou, soma 1 no contador
    }
}

alert("Vetor digitado: " + numeros + "\n\nO número " + numeroBuscado + " apareceu " + contador + " vezes.");