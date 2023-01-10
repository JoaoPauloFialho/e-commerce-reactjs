import styles from './Cabecalho.module.scss'
import logo from './logo_texto.png'
import iconPerfil from './icon_perfil.png'
import iconSac from './icon_sac.png'
import iconCarrinho from './logo_icon.png'
import { Link } from 'react-router-dom';


export default function Cabecalho(props) {

    return (
        <>
            <header className={styles.cabecalho}>
                <Link to={'/'}><img className={styles.logo} src={logo} alt='Logo do site fialho shop'></img></Link>

                <nav className={styles.nav_cabecalho}>
                    <span className={styles.login_cadastro}>
                        <img src={iconPerfil} alt='icone do perfil' />
                        <Link to={'/login'}><p>Login</p></Link>
                        <p className={styles.pipe}>|</p>
                        <Link to={'/cadastrar'}><p>Cadastro</p></Link>
                    </span>

                    <Link to={'/'}>
                        <span className={styles.atendimento_ao_cliente}>
                            <img src={iconSac} alt='icone atendimento ao cliente' />
                            <p>SAC</p>
                        </span>
                    </Link>

                    <Link to={'/carrinho'}>
                        <span className={styles.carrinho_de_compras}>
                            <img src={iconCarrinho} alt='icone do carrinho de compras' />
                            <p>Carrinho de compras</p>
                        </span>
                    </Link>
                </nav>
            </header>
        </>
    )
}