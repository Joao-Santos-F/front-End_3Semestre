import './App.css'
import Rotas from './Routes/Routes'
import UsuarioProvider from './context/UsuarioProvider'

function App() {
  return (
    <UsuarioProvider>
      <Rotas />
    </UsuarioProvider>
  )
}

export default App