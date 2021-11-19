import './style.scss'
import {useState, useEffect, useLayoutEffect} from 'react'
import { PortifolioItem } from '../PortifolioItem'

const repository = {
    imgUrl: null,   
    title: null,
    description: null,
    link: null
}

export function Portifolio() {

    const [repositories, setRepositories] = useState([])
    const [scrollPosition, setScrollPosition] = useState(0)

    useEffect(() => {
        fetch('https://api.github.com/users/duyllyan/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, []);

    return (
        <section className="portifolio" id="portifolio">
            <h1 className="titulo">Portifólio</h1>
            <div className="portifolio-container">
                {/* <p className="arrow left">{'<'}</p> */}
                {repositories.map(repository => {
                    return <PortifolioItem repository={repository} />
                })}
                {/* <p className="arrow right">{'>'}</p> */}
            </div>
        </section>
    )
}