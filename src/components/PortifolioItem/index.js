import './style.scss'
import {UilMessage} from '@iconscout/react-unicons'

export function PortifolioItem({repository}) {

    const img = 'https://opengraph.githubassets.com/82027648ae914124a8a55f0faafc7307417b1e6aba8e85c9d0f74dbecea3eac2/'

    return (
        <div className="portifolio-item">
            <div className="container">
            <div className="img">
                <img src={`${img}/${repository.owner.login}/${repository.name}`} alt={repository.name} />
            </div>
            <h3 className="title">{repository.name}</h3>
            <p className="description">{repository.description}</p>
            </div>
            <a href={repository.html_url} target="_blank"  className="button">
                Acessar
                <UilMessage/>
            </a>
        </div>
    )
}