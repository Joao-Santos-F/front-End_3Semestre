import CardPerfil from '../cardperfil/cardperfil';
import './menu.css'

function Menu() {
    return (
        <nav className="menu">
            <a href="#" className="menu__item">Home</a>
            <a href="#" className="menu__item">Sobre</a>
            <a href="#" className="menu__item">Contato</a>
            <a href="#" className="menu__item menu__item--signin">Entrar</a>
            <a href="#" className="menu__item menu__item--signup">Cadastrar</a>

            <CardPerfil />

        </nav>
    );
}

export default Menu;