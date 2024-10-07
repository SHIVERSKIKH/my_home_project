import '../resourse/styles/about.scss'
import photo from '../resourse/images/me_photo.jpeg'

export const About = () => {
    return(<section className='about container'>
            <div className="about-info">
                <div className="decorat-eltv--wrp">
                    <div className="decorat-elt"></div>
                    <p className="about-txt">Екатерина Шиверских</p>
                </div>
                <h1>Frontend Developer</h1>
                <p>
                Привет! Меня зовут Екатерина! 
                Я&nbsp;выпускница онлайн школы GeekBrains! 
                Закончила курс по&nbsp;специальности It-специалист-Вёрстка и Frontend-разработчик! 
                Мой опыт в&nbsp;сфере веб-верстки более 2 лет, за&nbsp;этот период мною выполнены 12&nbsp;проектов в&nbsp;целях учебной разработки и 2 проекта собранные на vue.
                В данный момент работаю в компании PixlPark на позиции: веб-мастер. 
                В&nbsp;своё свободное время я&nbsp;люблю верстать интересные макеты и&nbsp;постоянно совершенствую свои знания.
                </p>
                <a href="https://t.me/Shiverskikh">Написать мне</a>
            </div>
            <div className="about-photo">
                <img src={photo} alt="photo" />
            </div>
    </section>

    )
}