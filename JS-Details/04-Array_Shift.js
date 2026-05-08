let frutasCitricas = ["Limão", "Laranja", "Tangerina", "Abacaxi", "Acerola"]

// shift remove o primeiro elemento do array e reorganiza os indices

console.log(frutasCitricas);
console.log(frutasCitricas[0]);
console.log(frutasCitricas[1]);
console.log(frutasCitricas[2]);
console.log(frutasCitricas[3]);
console.log(frutasCitricas[4]);

const frutaRemovida = frutasCitricas.shift();

console.log(frutasCitricas);
console.log(frutasCitricas[0]);
console.log(frutasCitricas[1]);
console.log(frutasCitricas[2]);
console.log(frutasCitricas[3]);

console.log(`${frutaRemovida} foi removido da cesta de frutas`);