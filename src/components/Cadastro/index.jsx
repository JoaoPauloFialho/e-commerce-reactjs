import { Link, useNavigate } from 'react-router-dom'
import styles from './Cadastro.module.scss'
import icone_olho from './olhoicone.png'
import { useUserContext } from '../../common/contexts/User'
import { useState } from 'react'

export default function Cadastro() {
    const { cadastrar, checaJaCadastrado } = useUserContext()
    const [senha, setSenha] = useState()
    const [confirmaSenha, setConfirmaSenha] = useState()
    const [usuario, setUsuario] = useState()
    const [tipoInputSenha, setTipoInputSenha] = useState('password')
    const [tipoInputRepetirSenha, setTipoInputRepetirSenha] = useState('password')
    const [senhasDiferentes, setSenhasDiferentes] = useState(false)
    const [senhaInválida, setSenhaInvalida] = useState(false)

    function aoMudarEmail(event) {
        setUsuario(event.target.value)
    }
    function aoMudarSenha(event) {
        setSenha(event.target.value)
    }
    function aoMudarConfirmaSenha(event) {
        setConfirmaSenha(event.target.value)
    }

    function mostrarSenha() {
        if (tipoInputSenha === 'password') return setTipoInputSenha('text')
        return setTipoInputSenha('password')
    }

    function mostrarRepetirSenha() {
        if (tipoInputRepetirSenha === 'password') return setTipoInputRepetirSenha('text')
        return setTipoInputRepetirSenha('password')
    }

    function validaSenha() {
        let senhaInvalida = <p className={styles.erro}>A senha precisa ter mais que 7 caracteres</p>
        let senhasDiferentes = <p className={styles.erro}>As senhas não são correspondentes</p>
        if (senha.length < 7) {
            setSenhaInvalida(senhaInvalida)
            return false
        } else if (senha !== confirmaSenha) {
            setSenhaInvalida(false)
            setSenhasDiferentes(senhasDiferentes)
            return false
        }
        setSenhasDiferentes(false)
        return true
    }

    function aoCadastrar(event) {
        event.preventDefault()
        if (validaSenha()) {
            if (!checaJaCadastrado(usuario)) {
                cadastrar(usuario, senha)
                alert('Usuário cadastrado com sucesso')
                window.location.pathname = '/user/login'
            }
            else {
                alert('Usuário já cadastrado')
            }
        } else {

        }
    }

    return (
        <section className={styles.cadastro}>
            <span className={styles.cadastro__form}>
                <h1>Fazer Cadastro</h1>
                <form onSubmit={(event) => aoCadastrar(event)}>
                    <input
                        onChange={(event) => aoMudarEmail(event)}
                        name='usuario'
                        type='text'
                        placeholder='Usuario'
                        className={styles.usuario}
                    />
                    <input
                        onChange={(event) => aoMudarSenha(event)}
                        name='senha' type={tipoInputSenha}
                        placeholder='Senha'
                        className={styles.senha}
                    />
                    <img onClick={() => mostrarSenha()}
                        src={icone_olho}
                        alt='mostrar senha'
                        className={styles.senha_icone}
                    />
                    <input
                        onChange={(event) => aoMudarConfirmaSenha(event)}
                        name='senha'
                        type={tipoInputRepetirSenha}
                        placeholder='Confirmar senha'
                        className={styles.repetir_senha}
                    />
                    <img
                        className={styles.repetir_senha_icone}
                        onClick={() => mostrarRepetirSenha()}
                        src={icone_olho}
                        alt='mostrar senha'
                    />

                    {senhasDiferentes ?
                        senhasDiferentes : ''
                    }
                    {senhaInválida ?
                        senhaInválida : ''
                    }
                    <button onClick={() => cadastrar}>Cadastrar</button>
                </form>
            </span>
            <span className={styles.cadastro__ja_possui}>
                <p>Já possui cadastro no site?</p>
                <Link to='/user/login'>Clique aqui e realize login</Link>
            </span>
        </section>
    )
}