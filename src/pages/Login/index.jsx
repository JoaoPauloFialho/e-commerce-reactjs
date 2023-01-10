import { Link, useNavigate } from 'react-router-dom'
import CabecalhoLoginCadastro from '../../components/CabecalhoLoginCadastro'
import styles from './Login.module.scss'
import icone_olho from './olhoicone.png'

export default function Login() {
    const nav = useNavigate()

    return (
        <>
            <CabecalhoLoginCadastro/>
            <section className={styles.login}>
                <form>
                    <h1>Fazer Login</h1>
                    <input name='email' type='text' placeholder='E-mail' />
                    <input name='senha' type='password' placeholder='Senha' />
                    <img src={icone_olho} alt='mostrar senha' />
                    <button>Logar</button>
                </form>
                <span className={styles.login__nao_possui}>
                    <p>Não possui cadastro no site?</p>
                    <Link to='/cadastrar'>Clique aqui e realize</Link>
                </span>
            </section>
        </>
    )
}