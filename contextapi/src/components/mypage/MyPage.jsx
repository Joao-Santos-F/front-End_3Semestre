import { useContext } from "react"
import UsuarioContext from "../../context/usuariocontext"

const MyPage = () => {

    //extrai o usuário para utilizar os seus dados
    const {usuario} = useContext(UsuarioContext)

    return(
        <div>
            <h2>Minha página Pessoal</h2>
            <p>Dados do Usuário: {usuario}</p>
        </div>
    )
}

export default MyPage