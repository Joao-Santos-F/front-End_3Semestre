import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/home/Home'
import Perfil from './components/perfil/Perfil'
import MyPage from './components/mypage/MyPage'
import Header from './components/header/Header'
import Produtos from './components/produto/Produto'
import PrivateRoute from './Routes/privateRoute'

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/myPage" element={
              <PrivateRoute>
                <MyPage />
              </PrivateRoute>} 
          />
          <Route path="/produto" element={<Produtos />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
