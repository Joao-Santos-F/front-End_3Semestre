import { useState } from 'react'
import './App.css'
import Contador from './components/contador/contador'
import FormularioState from './components/formulariostate/formulariostate'
import CadFruta from './components/cadfruta/cadfruta'

function App() {
  // variavel privada (objeto) só pode ser mudada pela funcao setTitulo
  const [Titulo, setTitulo] = useState("Google")

  function mudarTexto() {
    setTitulo("Microsoft")
  }

  function mudarTexto2() {
    setTitulo("Riot Games")
  }

  

  return (
    <>
      {/* <h1>Minha Página da {Titulo}</h1>
      <button onClick={mudarTexto}>Mudar Texto</button>
      <br />
      <button onClick={mudarTexto2}>Mudar empresa</button>

      <Contador /> */}

      {/* <FormularioState/> */}

      <CadFruta />

    </>
  )
}

export default App
