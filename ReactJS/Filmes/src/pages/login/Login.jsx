import "./Login.css";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Botao from "../../components/botao/Botao";
import Logo from "../../assets/img/logo.svg";
import { UsuarioContext } from "../../context/UsuarioContext";

const Login = () => {
  const navigate = useNavigate();
  const { setUsuario } = useContext(UsuarioContext);
  const [novoUsuario, setNovoUsuario] = useState("");

  const loginGmail = () => {
    const gmail = novoUsuario.trim();
    if (!gmail) return;

    localStorage.setItem("gmail", JSON.stringify(gmail));
    setUsuario(gmail);
    setNovoUsuario("");
    navigate("/filmes");
  };

  const segurarSubmit = (e) => {
    e.preventDefault();
    loginGmail();
  };

  return (
    <main className="main_login">
      <div className="banner"></div>
      <section className="section_login">
        <img src={Logo} alt="Logo do Filmoteca" />
        <form onSubmit={segurarSubmit} className="form_login">
          <h1>Login</h1>
          <div className="campos_login">
            <div className="campo_input">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Digite seu e-mail"
                value={novoUsuario}
                onChange={(e) => setNovoUsuario(e.target.value)}
              />
            </div>
            <div className="campo_input">
              <label htmlFor="senha">Senha:</label>
              <input
                type="password"
                name="senha"
                placeholder="Digite sua senha"
              />
            </div>
          </div>
          <Botao nomeDoBotao="Entrar" />
        </form>
      </section>
    </main>
  );
};

export default Login;