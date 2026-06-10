import { useContext } from "react";
import { UsuarioContext } from "../context/usuarioContext";
import { Navigate } from "react-router-dom";

//componente para rotas privadas
const PrivateRoute = ({ children }) => {
  //recupera os dados do usuário
  const { usuario } = useContext(UsuarioContext)
  //se o usuário estiver logado, pode acessar (Children), senão redirecionado para a home
  return usuario ? children : <Navigate to="/"/>

};

export default PrivateRoute;
