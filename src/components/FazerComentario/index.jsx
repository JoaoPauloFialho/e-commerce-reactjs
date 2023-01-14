import { useState } from 'react'
import { useUserContext } from '../../common/contexts/User'
import BotaoFacaUmaAvaliacao from './BotaoFacaUmaAvaliacao'
import Login from '../Login'
import styles from './FazerComentario.module.scss'
import Cadastro from '../Cadastro'

export default function FazerComentario() {
    const { user } = useUserContext()
    const [cancelar, setCancelar] = useState(false)

    function mudaBotao() {
        return setCancelar(preCancelar => !preCancelar)
    }

    let naoLogado = <Login />

    let logado = <div></div>

    let fazerAvaliacao = user ? logado : naoLogado;

    return (
        <div className={styles.container}>
            <BotaoFacaUmaAvaliacao cancelar={cancelar} mudaBotao={mudaBotao} />
            {cancelar ? fazerAvaliacao : <h1>normal</h1>}
        </div>
    )
}