function comparacao () {
        let n1 = Number(prompt('Insira o primeiro valor:'));
        let n2 = Number(prompt('Insira o segundo valor:'));
        let resultado = n1 + n2;
    if (n1 == n2) {
        console.log('Os números são iguais')
    } else if (n1 + n2 >= 10 || n1 + n2 < 20) {
        console.log(`Os números ${n1} e ${n2} não são iguais. A soma é ${resultado} que é maior que 10 e menor que 20`)
    } 
}

comparacao();