import '../resourse/styles/header.scss'
import logo from '../resourse/images/logo.png'

export const Header = () => {
    return (<header className="header">
        <div className='container'>
            <img style={{width:'52px', height:'40px'}} src={logo} alt="logo" />
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