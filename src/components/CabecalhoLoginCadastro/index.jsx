import logo from './logo_texto.png'
import styles from './CabecalhoLoginCadastro.module.scss'
import { Link } from 'react-router-dom'

export default function CabecalhoLoginCadastro() {

    return (
        <header className={styles.cabecalho}>
            <Link to={'/'}><img className={styles.logo} src={logo} alt='Logo do site fialho shop'></img></Link>
        </header>
    )
}