import { useState } from 'react'
import { useUserContext } from '../../common/contexts/User'
import BotaoFacaUmaAvaliacao from './BotaoFacaUmaAvaliacao'
import Login from '../Login'
import styles from './FazerComentario.module.scss'
import { useComentariosContext } from '../../common/contexts/Comentarios'
import getDataHoraAtual from '../../common/functions/DataHorario/getDataHoraAtual'
import Comentario from '../Comentarios/Comentario'
import PublicarComentario from './PublicarComentario'
import { useParams } from 'react-router-dom'

export default function FazerComentario() {
    const { user } = useUserContext()
    const { comentarios } = useComentariosContext()
    const [cancelar, setCancelar] = useState(false)
    const produtoId = useParams()
    const comentarioUser = comentarios.filter(
        comentario =>{
            return comentario.usuario === user.usuario && comentario.id === produtoId.id}
        )[0]


    function mudaBotao() {
        return setCancelar(preCancelar => !preCancelar)
    }

    console.log(comentarioUser)
    let userComentario = comentarioUser ?
        <div className={styles.user_comentario}>
            <p>Seu comentário</p>
            <Comentario nome={comentarioUser.usuario} dataHora={comentarioUser.data} texto={comentarioUser.comentario} />
        </div> : <PublicarComentario/>

    let naoLogado =
        <div className={styles.user_login}>
            <p className={styles.user_login__titulo}>Faça o Login para avaliar o produto</p>
            <Login />
        </div>
    console.log(userComentario)

    return (
        <div className={styles.container}>
            <span className={styles.container__avaliacoes_span}>
                <p>0 avaliações</p>
            </span>
            {user ? userComentario : naoLogado}
        </div>
    )
}