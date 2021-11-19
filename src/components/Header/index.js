import './style.scss';
import { UilAngleDown } from '@iconscout/react-unicons'
import { useState, useLayoutEffect } from 'react';

export function Header() {

    const [clicked, setClicked] = useState(false);
    const handleClick = () => { setClicked(!clicked) }
    const [scrollPosition, setScrollPosition] = useState(0);

    useLayoutEffect(() => {
        function updatePosition() {
            setScrollPosition(window.scrollY);
        }
        window.addEventListener('scroll', updatePosition);
        updatePosition();
        return () => window.removeEventListener('scroll', updatePosition);
    }, []);

  return (
    <header className={`header ${clicked || scrollPosition > 100 ? "" : "hidden"}`}>
        <h2 className="indice content">Contato</h2>
        <nav className={`header-nav content ${clicked ? "clicked" : ""}`}>
            <ul>
                <li className="nav-item"><a href="#">Contato</a></li>
                <li className="nav-item"><a href="#portifolio">Portifólio</a></li>
                <li className="nav-item"><a href="#">Skills</a></li>
            </ul>
        </nav>
        <UilAngleDown onClick={handleClick} className={`menu content ${clicked ? "clicked" : ""}`}/>
    </header>
    );
}
