import { useContext } from "react"
import { Link } from "react-router-dom"
import { UsuarioContext } from "../../context/usuarioContext"

const Header = () => {
    const {usuario, setUsuario} = useContext(UsuarioContext)

    return (
        
        <header>
            <nav>
                <Link to={"/"}>Home</Link> {" | "}
                <Link to="/Perfil">Perfil</Link>{" | "}
                <Link to="/MyPage">My Blog</Link>{" | "}
                <Link to="/Produto">Cadastrar Produto</Link>{" | "}
                <span>( {usuario} )</span>
                <button 
                    onClick={()=>{
                        setUsuario(null)
                    }}
                >Sair</button>
            </nav>
        </header>
    )
}

export default Header