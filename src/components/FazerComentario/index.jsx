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
    const { comentarios } = useComentariosContext()
    const [cancelar, setCancelar] = useState(false)
    const comentarioUser = comentarios.filter(comentario => comentario.usuario === user.usuario)[0]

    function mudaBotao() {
        return setCancelar(preCancelar => !preCancelar)
    }

    //
    let userComentario = comentarioUser ?
        <div className={styles.user_comentario}>
            <p>Seu comentário</p>
            <Comentario nome={comentarioUser.usuario} dataHora={comentarioUser.data} texto={comentarioUser.comentario} />
        </div> : ''

    let naoLogado =
        <div className={styles.user_login}>
            <p className={styles.user_login__titulo}>Faça o Login para avaliar o produto</p>
            <Login />
        </div>


    //checa se existe um comentário ou não, se existir atribui o valor dele se não chama o componente
    //para publicar comentário
    let comentarioOuComentar = comentarioUser ? userComentario : <PublicarComentario />

    return (
        <div className={styles.container}>
            <span className={styles.container__avaliacoes_span}>
                <p>0 avaliações</p>
            </span>
            {user ? comentarioOuComentar : naoLogado}
        </div>
    )
}