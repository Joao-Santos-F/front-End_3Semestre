import './produto.css'

function Produto( {nome, preco, descricao} ) {
    return (
        <div className='card-produto'>
        <h1>{nome}</h1>
        <h4>{descricao}</h4>
        <h4>Preço: R$ {preco}</h4>
        </div>
    )
}

export default Produto