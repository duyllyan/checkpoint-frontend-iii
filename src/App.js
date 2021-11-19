import './styles/global.scss';
import {Banner} from './components/Banner';
import {Header} from './components/Header';
import { Portifolio } from './components/Portifolio';

export function App() {
    return (
    <>
        <Header />
        <Banner />
        <Portifolio />
    </>
    )
}