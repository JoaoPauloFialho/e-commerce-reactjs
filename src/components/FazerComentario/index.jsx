import { useState } from 'react'
import { useUserContext } from '../../common/contexts/User'
import BotaoFacaUmaAvaliacao from './BotaoFacaUmaAvaliacao'
import Login from '../Login'
import styles from './FazerComentario.module.scss'
import { useComentariosContext } from '../../common/contexts/Comentarios'
import getDataHoraAtual from '../../common/functions/DataHorario/getDataHoraAtual'
import Comentario from '../Comentarios/Comentario'
import PublicarComentario from './PublicarComentario'

export default function FazerComentario() {
    const { user } = useUserContext()
    const [cancelar, setCancelar] = useState(false)

    function mudaBotao() {
        return setCancelar(preCancelar => !preCancelar)
    }


    let naoLogado = <Login />

    return (
        <div className={styles.container}>
            <BotaoFacaUmaAvaliacao cancelar={cancelar} mudaBotao={mudaBotao} />
            { user ? <PublicarComentario/> : naoLogado}
        </div>
    )
}