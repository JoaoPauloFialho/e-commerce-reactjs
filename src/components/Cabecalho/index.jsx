import styles from './Cabecalho.module.scss'
import logo from './logo_texto.png'
import iconPerfil from './icon_perfil.png'
import userIcon from './user_icon.png'
import iconSac from './icon_sac.png'
import iconCarrinho from './logo_icon.png'
import { Link } from 'react-router-dom';
import { useUserContext } from '../../common/contexts/User'
import { useEffect, useState } from 'react'


export default function Cabecalho(props) {
    const { user } = useUserContext()
    const [usuarioRenderizacao, setUsuarioRenderizacao] = useState()


    useEffect(() =>{
    if (user) {
        let renderizar =
            <div className={styles.usuario}>
                <span className={styles.usuario__nome}>
                    <img src={userIcon} alt='icone do usuário' />
                    <p>{user.usuario}</p>
                </span>
            </div>
        setUsuarioRenderizacao(renderizar)
    }}, [user])

    return (
        <>
            <header className={styles.cabecalho}>
                <Link to={'/'}><img className={styles.logo} src={logo} alt='Logo do site fialho shop'></img></Link>

                <nav className={styles.nav_cabecalho}>
                    {usuarioRenderizacao ?
                        usuarioRenderizacao :
                        <span className={styles.login_cadastro}>
                            <img src={iconPerfil} alt='icone do perfil' />
                            <Link to={'/user/login'}><p>Login</p></Link>
                            <p className={styles.pipe}>|</p>
                            <Link to={'/user/cadastrar'}><p>Cadastro</p></Link>
                        </span>
                    }

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