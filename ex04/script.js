let original = [];
let semDuplicatas = [];
let tamanhoSemDuplicatas = 0; // Controla qual a próxima vaga vazia do vetor limpo

// 1. Preenchendo o vetor original com 10 números
for (let i = 0; i < 10; i++) {
    original[i] = parseInt(prompt("Digite o " + (i + 1) + "º número:"));
}

// 2. Analisando número por número para remover duplicados
for (let i = 0; i < 10; i++) {
    let elementoAtual = original[i];
    let jaExiste = false;

    // Esse laço j corre dentro do vetor novo para ver se o número já foi copiado
    for (let j = 0; j < tamanhoSemDuplicatas; j++) {
        if (semDuplicatas[j] === elementoAtual) {
            jaExiste = true; // Se achou um igual, marca como verdadeiro
            break; // Para de procurar para economizar processamento
        }
    }

    // Se saiu do laço e 'jaExiste' continuar falso, o número é inédito!
    if (jaExiste === false) {
        semDuplicatas[tamanhoSemDuplicatas] = elementoAtual;
        tamanhoSemDuplicatas = tamanhoSemDuplicatas + 1; // Avança para a próxima vaga
    }
}

alert("Vetor Original: " + original + "\n\nVetor Sem Duplicatas: " + semDuplicatas);