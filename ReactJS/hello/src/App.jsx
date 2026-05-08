import { Fragment } from 'react'
import './App.css'
import Title from './components/title/Title'
import Subtitle from './components/Subtitle/Subtitle'

function App(props) {
  return (
    <div>
      <Title Title= "Titulo do meu App" />
      <Subtitle Texto="Minha Pagina" />
      <Subtitle Texto="Minha Pagina2" Jao = "Daora" />
    </div>

  )
}

export default App