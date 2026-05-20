import { Link } from 'react-router-dom'
import './header.css'

function HeaderPage() {
    return (
        <nav className='navbar'>
            <Link to='/'/>Home<Link/>
            <Link to="/quemsomos">Quem somos?</Link>
            <Link to="/frutas">Frutas</Link>
            <Link to="/produtos">Produtos</Link>
        </nav>
    )
}

export default HeaderPage