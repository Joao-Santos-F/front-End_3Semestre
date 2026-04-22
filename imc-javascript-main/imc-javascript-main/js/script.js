function calcular() {
    //pegar os valores dos campos
    const nome = document.getElementById("nome").value;
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);

    if (nome.trim().lenght == 0 || isNaN(altura)|| isNaN(peso)){
        alert("Preencha todos os campos")
        return false;
    }

    const IMC = calcularImc(altura, peso);
    const textoSituacao = gerarTextoIMC(IMC);

    console.log(nome);
    console.log(altura);
    console.log(peso);
    console.log(IMC);
    console.log(textoSituacao);
}

function calcularImc(altura, peso){
    return IMC = peso / (altura * altura)
}

function gerarTextoIMC(IMC) {
    if (IMC < 16) {
       return "Magreza Grave"
    } else if (IMC >= 16 && IMC < 17) {
       return "Magreza moderada"
    } else if (IMC >= 16 && IMC < 1.85) {
       return "Magreza Leve"
    } else if (IMC >= 1.85 && IMC < 25) {
       return "Saudável"
    } else if (IMC >= 25 && IMC < 30) {
       return "Sobrepezo"
    } else if (IMC >= 30 && IMC < 35) {
       return "Obesidade Grau I"
    } else if (IMC >= 35 && IMC < 40) {
       return "Obesidade Grau II"
    } else {
        return "Obesidade Grau III"
    }
}