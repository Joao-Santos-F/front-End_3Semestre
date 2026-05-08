const hobbies = [
    "Correr", 
    "Nadar", 
    "Jogar Futebol", 
    "Viajar", 
    "Cozinhar"
];

// array map é um método da classe Array que itera sobre o Array, retornando um novo Array, compondo um novo resultado para cada índice antigo, veja:
const novosHobbies = hobbies.map((hobby) => {
    return `<p>${hobby}</p>`;

});

console.log(novosHobbies);

