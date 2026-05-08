import './perfil.css'

function Perfil( {nome, idade, profissao} ) {
    return (
        <div className="card-perfil">
            <h1>Nome - {nome}</h1>
            <h2>Idade - {idade}</h2>
            <h3>Profissão - {profissao}</h3>
        </div>
    )
}

export default Perfil