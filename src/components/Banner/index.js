import profilePic from '../../assets/profile2.png';
import './style.scss'
import * as Unicons from '@iconscout/react-unicons';

export function Banner () {
    return (
        <section className="banner">
            <div className="banner-item" id="profile-pic">
                <div id="profile-container">
                    <svg id="image-bg" viewBox="0 0 1094 1280" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0" mask-type="alpha">
                        <path d="M0 1119.12L1.23432e-05 167.295C0 -38.7768 444.741 -20.7772 657.677 43.7245C870.613 108.226 1102.85 338.18 1093.71 628.181C1084.93 906.436 866.821 1151.75 657.677 1226C448.532 1300.24 1.35284e-05 1325.2 0 1119.12Z"/>
                        </mask>
                        <g mask="url(#mask0)">
                        <path d="M0 1119.12L1.23432e-05 167.295C0 -38.7768 444.741 -20.7772 657.677 43.7245C870.613 108.226 1102.85 338.18 1093.71 628.181C1084.93 906.436 866.821 1151.75 657.677 1226C448.532 1300.24 1.35284e-05 1325.2 0 1119.12Z"/>
                            <image xlinkHref={profilePic}/>
                        </g>
                    </svg>
                    <p id="code">{'>'}</p>
                </div>
            </div>
            <div className="banner-item" id="content">
                <h1 className="greetings">Olá, <br></br> Me chamo Duyllyan</h1>
                <h2 className="title">Desenvolvedor Fullstack</h2>
                <p className="description">Cursando desenvolvimento web, em busca de recolocação no mercado de trabalho.</p>
                <div id="buttons">
                    <a href="#" className="button"id="contact-me" alt="Contact">
                        Entre em contato
                        <Unicons.UilMessage/>
                    </a>
                    <a href="https://www.linkedin.com/in/duyllyan/" className="btn-social"id="linkedin" alt="Linkedin" target="_blank">
                        <Unicons.UilLinkedinAlt />
                    </a>
                    <a href="https://github.com/duyllyan" className="btn-social" id="github" alt="Github" target="_blank">
                        <Unicons.UilGithubAlt />
                    </a>
                </div>
                <div id="arrow">
                <Unicons.UilAngleDown />
            </div>
            </div>
        </section>
    )
}