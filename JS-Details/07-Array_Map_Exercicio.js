//criar um array com 10 numeros
//rodar o map multiplicando o valor de cada item por 2
//exibir o array modificado no final com o console.log

let numeros = [1, 2 , 3, 4, 5, 6, 7, 8, 9, 10];

const numerosMultiplicados = numeros.map((numero) => {
    return numero * 2;
});

console.log(numerosMultiplicados);