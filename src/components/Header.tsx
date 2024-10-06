import '../resourse/styles/header.scss'
import logo from '../resourse/images/logo.png'

export const Header = () => {
    return (<header className="header">
        <div>
            <img style={{width:'62px', height:'40px'}} src={logo} alt="logo" />
            <nav>
                <ul>
                    <li>Главная
                        </li>
                    <li>Навыки
                        </li>
                    <li>Сертификаты
                        </li>
                    <li>Проекты
                        </li>
                    <li>Контакты
                        </li>
                </ul>
            </nav>
        </div>
    </header>)
}