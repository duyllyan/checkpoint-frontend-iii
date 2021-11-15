import profilePic from '../../assets/profile.png';
import btnGithub from '../../assets/btnGithub.svg';
import btnLinkedin from '../../assets/btnLinkedin.svg';
import btnSend from '../../assets/btnSend.svg';
import './style.scss'

export function Banner () {
    return (
        <div className="banner">
            <div className="banner-item" id="profile-pic">
                <div id="profile-container">
                    <svg id="image-bg" viewBox="0 0 196 229" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0" mask-type="alpha">
                            <path d="M0 199.816L2.20386e-06 29.8701C0 -6.92348 79.4077 -3.70971 117.427 7.80688C155.446 19.3235 196.912 60.381 195.279 112.16C193.713 161.841 154.77 205.642 117.427 218.898C80.0847 232.154 2.41547e-06 236.61 0 199.816Z" />
                        </mask>
                        <g mask="url(#mask0)">
                            <path d="M0 199.816L2.20386e-06 29.8701C0 -6.92348 79.4077 -3.70971 117.427 7.80688C155.446 19.3235 196.912 60.381 195.279 112.16C193.713 161.841 154.77 205.642 117.427 218.898C80.0847 232.154 2.41547e-06 236.61 0 199.816Z" />
                            <image xlinkHref={profilePic}/>
                        </g>
                    </svg>
                    <svg id="letter" alt="letter U" viewBox="0 0 98 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M83.4593 0.472996H14.0411C-2.87667 0.472999 0.416939 18.9584 0.416946 55.9291C0.41695 75.5363 6.6588 109 52.3184 109C97.7359 109 97.7335 74.7974 97.7322 56.2247L97.7322 55.9291C97.7322 20.7473 101.164 0.473001 83.4593 0.472996Z"/>
                    </svg>
                </div>
            </div>
            <div className="banner-item" id="greetings">
                <h1>Olá,</h1>
                <h1>Me chamo Duyllyan</h1>
            </div>
            <div className="banner-item" id="title">
                <h2>Desenvolvedor Fullstack</h2>
            </div>
            <div className="banner-item" id="description">
                <p>Cursando desenvolvimento web, em busca de recolocação no mercado de trabalho.</p>
            </div>
            <div id="buttons">
                <a href="#" id="contact-me" alt="Contact">
                    Entre em contato
                    <img src={btnSend}/>
                </a>
                <a href="#" className="btn-social"id="linkedin" alt="Linkedin">
                    <img src={btnGithub}/>
                </a>
                <a href="#" className="btn-social" id="github" alt="Github">
                    <img src={btnLinkedin}/>
                </a>
            </div>
        </div>
    )
}