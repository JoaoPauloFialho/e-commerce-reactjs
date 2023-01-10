import { Link } from 'react-router-dom'
import styles from './Cadastro.module.scss'
import icone_olho from './olhoicone.png'
import CabecalhoLoginCadastro from '../../components/CabecalhoLoginCadastro'

export default function Cadastro() {
    return (
        <>
        <CabecalhoLoginCadastro/>
        <section className={styles.cadastro}>
            <form>
                <h1>Fazer Cadastro</h1>
                <input name='email' type='text' placeholder='E-mail' />
                <input name='senha' type='password' placeholder='Senha' />
                <input name='senha' type='password' placeholder='Confirmar senha' />
                <img src={icone_olho} alt='mostrar senha'/>
                <button>Cadastrar</button>
            </form>
            <span className={styles.cadastro__ja_possui}>
                <p>Já possui cadastro no site?</p>
                <Link to='/login'>Clique aqui e realize login</Link>
            </span>
        </section>
        </>
    )
}