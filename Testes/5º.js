function pertenceFibonacci(numero) {
    let a = 0;
    let b = 1;

    if (numero === a || numero === b) {
        return true;
    }

    let proximo = a + b;

    while (proximo <= numero) {
        if (proximo === numero) {
            return true;
        }
        a = b;
        b = proximo;
        proximo = a + b;
    }

    return false;
}

let numero = 21;
if (pertenceFibonacci(numero)) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numero} não pertence à sequência de Fibonacci.`);
}
