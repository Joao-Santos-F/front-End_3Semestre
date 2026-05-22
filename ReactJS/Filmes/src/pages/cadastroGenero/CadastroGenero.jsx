import "./CadastroGenero.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";
import { useEffect, useState } from "react";
import api from "../../services/Services";

const CadastroGenero = () => {
  //variáveis e states
  const [valor, setValor] = useState("");
  const [listaGeneros, setListaGenero] = useState([]);

  // funcao para limpar os formulários
  const limparForm = () => {
    setValor("");
  };

  // funcoes e ciclos de vida

  const getGeneros = async () => {
    //chama a api
    try {
      const retornoAPI = await api.get("/Genero"); //chamaa api

      setListaGenero(retornoAPI.data); //preencher os arrays listaGeneros
    } catch (error) {
      alert("Problema ao carregar dados da API");
    }
    //preecnher o array listaGeneros
  };

  //ciclo de vida
  useEffect(() => {
    getGeneros();
  }, []);

  // function cadastrarGenero(e) {
  //   e.preventDefault();

  //   alert("Função cadastrar gênero em desenvolvimento.");
  // }

  const cadastrarGenero = async (e) => {
    e.preventDefault();

    //validar o formulario
    if (valor.trim().length == 0) {
      alert("Preencha os campos corretamente");
      return false;
    }

    const objCadastro = {
      idGenero: crypto.randomUUID(),
      Nome: valor,
    };

    try {
      const retornoAPI = await api.post("/Genero", objCadastro); // cadastra na API
      alert("Cadastrado com sucesso"); // mostra ao usuário se deu certo
      getGeneros(); //atualiza a listagem na tela
      limparForm();
    } catch (error) {
      alert("Ocorreu um erro ao cadastrar o genero na API");
      console.log(error);
    }
  };

const excluirGenero = async (item) => {
    try {
      if (!confirm("Quer apagar este gênero mesmo?")) {
        return false
      }
      const retornoAPI = await api.delete(`/Genero/${item.idGenero}`)
      alert("Gênero excluído com sucesso!")
      getGeneros()
    } catch (error) {
      alert("Ocorreu um erro ao excluir o gênero.")
      console.log(error)
    }
  };

  const editarGenero = async (item) => {

    //validar o formulario
    if (valor.trim().length == 0) {
      alert("Preencha os campos corretamente");
      return false;
    }

    const objEditado = {
      idGenero: item.idGenero,
      Nome: valor,
    };

    try {
      const retornoAPI = await api.put(`/Genero/${item.idGenero}`, objEditado);
      alert("Genero editado com sucesso");
      getGeneros();
      limparForm();
    } catch (error) {
      console.log(error);
      alert("Ocorreu algum erro ao editar, tente novamente mais tarde");
    }
  };

  return (
    <>
      <Header />
      <main>
        {/* form de cadastro e lista de generos */}
        <Cadastro
          //Define o título que será exibido no formulário
          tituloCadastro="Cadastro de Gênero"
          // esconde o select de genero
          visibilidade="none"
          // Define o texto que aparece dentro do campo de input
          placeholder="gênero"
          // ----------------------------------------------------
          // Propriedades voltada ao cadastro:

          //Função que será chamada ao enviar o formulário (onSubmit)
          funcCadastro={cadastrarGenero}
          // Valor atual do campo de texto
          valor={valor}
          // Função que atualiza o estado do valor no componente pai sempre que o usuário digita no campo
          setValor={setValor}
        />

        <Lista
          tituloLista="Lista de Gêneros"
          visibilidade="none"
          //Chama o método para validar:
          lista={listaGeneros}
          //Identifica o tipo de lista:
          tipoLista="genero"
          funcExcluir={excluirGenero}
          funcEditar={editarGenero}
        />
      </main>
      <Footer />
    </>
  );
};

export default CadastroGenero;
