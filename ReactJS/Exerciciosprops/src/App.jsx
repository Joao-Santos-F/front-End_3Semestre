import './App.css'
import Saudacao from './components/Exercicio01/saudacao'
import Produto from './components/exercicio02/produto'
import Perfil from './components/exercicio03/perfil'
import Botao from './components/exercicio04/botao'
import Filme from './components/exercicio05/filme'
import Aluno from './components/exercicio06/aluno'
import Cardzinhos from './components/exercicio07/card'
import Contato from './components/exercicio08/contato'
import Jogo from './components/exercicio09/jogo'
import ItemLoja from './components/exercicio10/itemLoja'
import Produtos from './components/produtos/produtos'

import FotoAluno from './assets/download.jpg'
import FotoJogo from './assets/download (5).jpg'

function App() {
  return(
    // <>
    //   <Title Texto = "Jaozin Rei Delas" Situacao = "Solteiro" Idade = {20} />
    //   <Title Texto = "Ariel Da Pra Elas" Situacao = "Casado" Idade = {25} />
    //   <Title Texto = "Rafael Suga Eles" Situacao = "Divorciado" Idade = {30} />
    // </>

    //exercicio - 01
    // <Saudacao nome= "Jaozin"/>

    //exercicio - 02
    // <Produto nome = "Notebook" preco = {3500.00} descricao = "Notebook Gamer com processador Intel Core i7, 16GB de RAM e placa de vídeo dedicada." />

    //exercicio - 03
    // <>
    //   <Perfil nome="JaozinReiDelas" idade={67} profissao="Programador"/>
    //   <Perfil nome="ArielDaPraElas" idade={25} profissao="Designer"/>
    //   <Perfil nome="RafaelSugaEles" idade={30} profissao="Professor"/>
    // </>

    //exercicio - 04
    // <Botao clicou={() => alert('Botão clicado!')} />

    //exercicio - 05
    // <>
    //   <Filme titulo="O Poderoso Chefão" ano="1972" genero="Drama" nota={9.2}/>
    //   <Filme titulo="Vingadores Ultimato" ano="2019" genero="Ação" nota={8.4}/>
    // </>

    //exercio - 06
    // <>
    //   <Aluno nome="JaozinReiDelas" curso="Engenharia de Software" imagem={FotoAluno}/>
    //   <Aluno nome="ArielDaPraElas" curso="Desempregado" imagem={FotoAluno}/>
    // </>

    //exercicio - 07
    // <Cardzinhos>
    //   <Perfil nome="JaozinReiDelas" idade={67} profissao="Programador"/>
    //   <Perfil nome="ArielDaPraElas" idade={25} profissao="Designer"/>
    //   <Perfil nome="RafaelSugaEles" idade={30} profissao="Professor"/>
    // </Cardzinhos>

    //exercicio - 08
    // <Cardzinhos>
    //   <Contato nome="Jaozin" telefone="11 94579-4352" email="jaozinreidelas@gmail.com"/>
    //   <Contato nome="Jaozin" telefone="11 94579-4352" email="jaozinreidelas@gmail.com"/>
    //   <Contato nome="Jaozin" telefone="11 94579-4352" email="jaozinreidelas@gmail.com"/>
    //   <Contato nome="Jaozin" telefone="11 94579-4352" email="jaozinreidelas@gmail.com"/>
    //   <Contato nome="Jaozin" telefone="11 94579-4352" email="jaozinreidelas@gmail.com"/>
    // </Cardzinhos>

    //exercicio - 09
    // <Cardzinhos>
    //   <Jogo nome="Valorant" preco={0} plataforma="Pc ou Console" imagem={FotoJogo}/>
    // </Cardzinhos>`

    //exercicio - 10
    // <Cardzinhos>
    //   <ItemLoja nome="Ryzen 5 5500" preco={550.50} categoria="Processador" estoque="2"/>
    //   <ItemLoja nome="Ryzen 7 5700X3D" preco={1789.50} categoria="Processador" estoque="0"/>
    //   <ItemLoja nome="RTX 5090" preco={24999.99} categoria="Placa de vídeo" estoque="5"/>
    //   <ItemLoja nome="GTX 1080 Ti" preco={2300.00} categoria="Placa de vídeo" estoque="0"/>

    // </Cardzinhos>

    <Produtos/>

  )
}

export default App
