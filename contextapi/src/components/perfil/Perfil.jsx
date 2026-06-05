import { useContext, useState } from "react"
import UsuarioContext from "../../context/usuariocontext"

const Perfil = () => {

    //state global
    const {usuario, setUsuario} = useContext(UsuarioContext)

    //state local
    const [novoUsuario, setNovoUsuario] = useState("")

    return(
        <div>
            <h2>Página Perfil</h2>
            <p>Dados do Usuário: {usuario}</p>
            <p> 
                <input type="text" placeholder="Novo usuário" 
                onChange={(e) => 
                setNovoUsuario(e.target.value)} 
                />

                <button onClick={
                () => {
                    //quero alterar o nome do usuário
                    setUsuario(novoUsuario)
                }
            }>Entrar</button> </p>
        </div>
    )
}

export default Perfil