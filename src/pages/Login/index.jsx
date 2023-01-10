import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUserContext } from '../../commons/contexts/User'
import CabecalhoLoginCadastro from '../../components/CabecalhoLoginCadastro'
import styles from './Login.module.scss'
import icone_olho from './olhoicone.png'

export default function Login() {
    const nav = useNavigate()
    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    const [tipoInput, setTipoInput] = useState('password')
    const { usuarios, loginCorreto, fazLogin } = useUserContext()
    const [loginInvalido, setLoginInvalido] = useState(false)

    function aoMudarEmail(event) {
        setEmail(event.target.value)
    }

    function aoMudarSenha(event) {
        setSenha(event.target.value)
    }

    function mostrarSenha() {
        if (tipoInput === 'password') return setTipoInput('text')
        return setTipoInput('password')
    }

    function aoLogar(event) {
        event.preventDefault()
        if (loginCorreto(email, senha)) {
            fazLogin(email, senha)
            alert('Usuário Logado')
            nav('/')
        } else {
            let loginInvalido = <p className={styles.erro}>Usuário ou senha inválidos</p>
            setLoginInvalido(loginInvalido)
        }
    }

    return (
        <>
            <CabecalhoLoginCadastro />
            <section className={styles.login}>
                <span className={styles.login__form}>
                    <form onSubmit={(event) => aoLogar(event)}>
                        <h1>Fazer Login</h1>
                        <input
                            onChange={(event) => aoMudarEmail(event)}
                            name='usuario'
                            type='text'
                            placeholder='Usuario'
                        />
                        <input
                            onChange={(event) => aoMudarSenha(event)}
                            name='senha' type={tipoInput}
                            placeholder='Senha'
                        />
                        {loginInvalido ?
                            loginInvalido :
                            ''
                        }
                        <img onClick={() => mostrarSenha()} src={icone_olho} alt='mostrar senha' />
                        <button>Logar</button>
                    </form>
                </span>
                <span className={styles.login__nao_possui}>
                    <p>Não possui cadastro no site?</p>
                    <Link to='/cadastrar'>Clique aqui e realize</Link>
                </span>
            </section>
        </>
    )
}