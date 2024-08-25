import logo from '../../assets/img/react.svg'
import './styles.css'


function Header() {
    return(
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>Banco de Dados</h1>
                <p>
                    Desenvolvido por Gustavo
                    <a href="https://www.instagram.com/devsuperior.ig"></a>
                </p>
            </div>
        </header>
    ) 
}

export default Header