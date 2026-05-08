import './produtos.css'
import Produto from '../exercicio02/produto'

function Produtos() {
    const Produtos = [
        {
            nome: "Ryzen 7 5700X3D",
            preco: 1750,
            descricao: "Processador AMD com socket AM 4"
        },
        {
            nome: "Ryzen 9 9950X3D2",
            preco: 6750,
            descricao: "Processador AMD ultima geração com socket AM 5"
        },
        {
            nome: "RTX 4060 Ti",
            preco: 4500,
            descricao: "Placa de vídeo com DLSS 3"
        },
        {
            nome: "RTX 5090",
            preco: 25000,
            descricao: "Placa de vídeo de ultima geração com DLSS 4.5"
        },
    ]

    return (
        Produtos.map((p) => {
            return(
                <Produto 
                    nome={p.nome}
                    preco={p.preco}
                    descricao={p.descricao}
                />
            )
        })
    )
}

export default Produtos