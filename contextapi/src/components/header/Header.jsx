import { Link } from "react-router-dom";
import UsuarioContext from "../../context/usuariocontext";
import { useContext } from "react";
import produtoContext from "../../context/produtoContext";

const Header = () => {
  const { usuario } = useContext(UsuarioContext);

  return (
    <header>
      <nav>
        <Link to={"/"}>Home</Link> <Link to={"/perfil"}>Perfil</Link>{" "}
        <Link to={"/myPage"}>Página pessoal</Link>{" "}
        <Link to={"/produto"}>Produtos</Link>{" "}
        <span>Nome do usuário - ( {usuario} )</span>
        <button
          onClick={() => {
            //quero alterar o nome do usuário
            setUsuario("");
          }}
        >
          Sair
        </button>
      </nav>
    </header>
  );
};

export default Header;
