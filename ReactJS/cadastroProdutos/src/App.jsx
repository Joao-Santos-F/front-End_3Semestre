import './App.css'
import CadastroFrutaPage from './pages/cadastrofruta/cadastrofruta'
import CadastroProdutoPage from './pages/cadastroprodutos/cadastroproduto'
import HomePage from './pages/home/home'
import QuemSomosPage from './pages/quemsomos/quemsomos'
import Header from './pages/header/header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>

      <BrowserRouter>
      <Header />

        <Routes>
          <Route element={ <HomePage /> } path = '/' />
          <Route element={ <QuemSomosPage /> } path = '/quemsomos' />
          <Route element={ <CadastroFrutaPage /> } path = '/frutas' />
          <Route element={ <CadastroProdutoPage /> } path = '/produtos' />
        </Routes>
      </BrowserRouter>

    </>

  )
}

export default App
