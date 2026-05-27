import "./CadastroGenero.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import Swal from "sweetalert2";
import Alerta from "../../components/alerta/Alert";
import Lista from "../../components/lista/Lista";
import { useEffect, useState } from "react";
import api from "../../services/Services";

const CadastroGenero = () => {
  //variáveis e states
  const [valor, setValor] = useState("");
  const [editar, setEditar] = useState(false);
  const [Id, setId] = useState();
  const [listaGeneros, setListaGenero] = useState([]);

  // funcao para limpar os formulários
  const limparForm = () => {
    setValor("");
    setId();
    setEditar(false);
  };

  //funcao para cancelar a edicao
  const cancelarEdicao = () => {
    limparForm();
    setEditar(false);
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
      // alert("Preencha os campos corretamente");
      Alerta({
        icon: "error",
        title: "Oops...",
        text: "Algo deu errado, preencha os campos corretamente !",
        confirmButtonText: "Ok",
      });
      return false;
    }

    const objCadastro = {
      idGenero: crypto.randomUUID(),
      Nome: valor,
    };

    try {
      const retornoAPI = await api.post("/Genero", objCadastro); // cadastra na API
      Alerta({
        icon: "success",
        title: "Tudo certo !",
        text: "Gênero cadastrado com sucesso !",
        confirmButtonText: "Ok",
      });
      getGeneros(); //atualiza a listagem na tela
      limparForm();
    } catch (error) {
      Alerta({
        icon: "error",
        title: "Oops...",
        text: "Ocorreu um erro ao cadastrar o gênero na API",
        confirmButtonText: "Ok",
      });
      console.log(error);
    }
  };

  const excluirGenero = async (item) => {
    // if (!confirm()) {
    //   return false;
    // }

    const result = await Swal.fire({
      title: "Você tem certeza?",
      text: "Quer apagar o gênero " + item.nome + "?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Apagar",
      cancelButtonText: "Cancelar",
    });

    if (!result.isConfirmed) {
      return false;
    }

    try {
      const retornoAPI = await api.delete(`/Genero/${item.idGenero}`);
      if (retornoAPI.status == 200 || retornoAPI.status == 204) {
        Alerta({
          icon: "success",
          title: "Tudo certo !",
          text: "Gênero excluído com sucesso !",
          confirmButtonText: "Ok",
        });
        getGeneros();
      } else {
        Alerta({
          icon: "error",
          title: "Oops...",
          text: "Ocorreu um erro ao excluir o gênero.",
          confirmButtonText: "Ok",
        });
      }
    } catch (error) {
      Alerta({
        icon: "error",
        title: "Oops...",
        text: "Ocorreu um erro ao excluir o gênero.",
        confirmButtonText: "Ok",
      });
      console.log(error);
    }
  };

  //edicao do editarGenero
  const preEditar = (item) => {
    //mostra os dados do formulário para o usuário preencher
    setValor(item.nome);
    //mostra o botao de editar para o usuário
    setEditar(true);
    // armazena o item que está sendo editado
    setId(item.idGenero);
  };

  const editarGenero = async (e, item) => {
    e.preventDefault();

    //validar o formulario
    if (valor.trim().length == 0) {
      Alerta({
        icon: "error",
        title: "Oops...",
        text: "Algo deu errado, preencha os campos corretamente !",
        confirmButtonText: "Ok",
      });
      return false;
    }

    const objEditado = {
      idGenero: Id,
      Nome: valor,
    };

    try {
      const retornoAPI = await api.put(`/Genero/${Id}`, objEditado);
      Alerta({
        icon: "success",
        title: "Tudo certo !",
        text: "Gênero editado com sucesso !",
        confirmButtonText: "Ok",
      });
      getGeneros();
      limparForm();
    } catch (error) {
      Alerta({
        icon: "error",
        title: "Oops...",
        text: "Ocorreu algum erro ao editar, tente novamente mais tarde",
        confirmButtonText: "Ok",
      });
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
          funcCadastro={editar ? editarGenero : cadastrarGenero}
          // Valor atual do campo de texto
          valor={valor}
          // Função que atualiza o estado do valor no componente pai sempre que o usuário digita no campo
          setValor={setValor}
          btnEditar={editar}
          cancelarEdicao={cancelarEdicao}
        />

        <Lista
          tituloLista="Lista de Gêneros"
          visibilidade="none"
          //Chama o método para validar:
          lista={listaGeneros}
          //Identifica o tipo de lista:
          tipoLista="genero"
          funcExcluir={excluirGenero}
          funcEditar={preEditar}
        />
      </main>
      <Footer />
    </>
  );
};

export default CadastroGenero;
