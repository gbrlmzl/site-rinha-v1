import '../../styles/header.css';
import rinhaLogo from '../../assets/imgs/rinhaLogo.png';
function Header() {
  return (
    <header>
      <nav className="header__navigation">
                {/*<div className="header__logo">
                    <a href=""><img  src={rinhaLogo}  alt="Rinha do Campus IV"/></a>
                </div>*/}
                <div className="header__menu">
                    <ul>
                        <li><a href="/">Início</a></li>
                        <li><a href="/inscricoes">Inscrições</a></li>
                        {/*<li><a href="">Jogos</a></li>
                        <li><a href="">Equipes</a></li>
                        <li><a href="">Edições</a></li>*/}
                        <li><a href="">Sobre</a></li>
                    </ul>
                </div>
                <div className="header__auth">
                    <button id="login__button">Entrar</button>
                    <button id="register__button">Registrar</button>
                </div>
               
            </nav>
    </header>
  );
}

export default Header;