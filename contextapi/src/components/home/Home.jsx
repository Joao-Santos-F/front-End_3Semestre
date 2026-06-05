import { useContext } from "react"
import UsuarioContext from "../../context/usuariocontext"


const Home = () => {

    const {usuario} = useContext(UsuarioContext)

    return(
        <>
            <h2>Página Home</h2>
            <p>Usuário: {usuario}</p>
        </>
    )
}

export default Home