let vetor = [];
let soma = 0;


for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt("Por favor, digite o " + (i + 1) + "º número da sua sequência:"));
    vetor[i] = numero;
}


for (let i = 0; i < 10; i++) {
    if (vetor[i] % 2 === 0) {
        soma = soma + vetor[i]; 
    }
}


alert("Vetor completo: " + vetor + "\nSoma dos números pares: " + soma);