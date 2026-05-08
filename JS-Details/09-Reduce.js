const estoque = [
    {
        descricao: "Camisa Polo",
        cor: "Verde",
        perfil: "M",
        quantidade: 10,
    },
    {
        descricao: "Camisa Polo",
        cor: "Amarela",
        perfil: "F",
        quantidade: 15,
    },
    {
        descricao: "Camisa Polo",
        cor: "Azul",
        perfil: "M",
        quantidade: 30,
    },
    {
        descricao: "Camisa Polo",
        cor: "Roxa",
        perfil: "F",
        quantidade: 5,
    }
];

//reduz o Array a um único elemento. No caso um somatorio, por exemplo:
let totalProdutosEstoque = estoque.reduce((total, produto) =>{
    return total + produto.quantidade;
}, 0);

console.log(`Total de camisetas em estoque: ${totalProdutosEstoque}`);