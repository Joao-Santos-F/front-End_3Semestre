import { useContext } from "react"
import { Link } from "react-router-dom"
import { UsuarioContext } from "../../context/usuarioContext"

const Header = () => {
    const {usuario, setUsuario} = useContext(UsuarioContext)

    const LogOut = () => {
        setUsuario(null)
        localStorage.removeItem("usuario")
    }

    return (
        
        <header>
            <nav>
                <Link to={"/"}>Home</Link> {" | "}
                <Link to="/perfil">Perfil</Link>{" | "}
                <Link to="/myPage">My Blog</Link>{" | "}
                <Link to="/cdProduto">Cadastrar Produto</Link>{" | "}
                <span>( {usuario} )</span>
                <button 
                    onClick={()=>{
                        LogOut()
                    }}
                >Sair</button>
            </nav>
        </header>
    )
}

export default Header