import "./Botao.css"

const Botao = (props) => {
  const handleClick = (event) => {
    if (props.btnEditar) {
      event.preventDefault();
      props.cancelarEdicao();
      return;
    }

    if (props.onClick) {
      event.preventDefault();
      props.onClick(event);
    }
  };

  return (
    <button
      className="botao"
      type={props.btnEditar ? "button" : "submit"}
      onClick={handleClick}
    >
      {props.nomeDoBotao}
    </button>
  );
};

export default Botao;