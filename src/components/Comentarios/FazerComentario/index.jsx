import { useState } from 'react'
import { useUserContext } from '../../../common/contexts/User'
import Login from '../../Login'
import styles from './FazerComentario.module.scss'
import { useComentariosContext } from '../../../common/contexts/Comentarios'
import Comentario from '../Comentario'
import PublicarComentario from './PublicarComentario'
import { useParams } from 'react-router-dom'

export default function FazerComentario() {
    const { user } = useUserContext()
    const { comentarios, mediaAvaliacao } = useComentariosContext()
    const [cancelar, setCancelar] = useState(false)
    const produtoId = useParams()
    const comentarioUser = comentarios.filter(
        comentario => {
            return comentario.usuario === user.usuario && comentario.id === produtoId.id
        }
    )[0]

    //esse trecho do código está meio que parecido com o comentarioUser pois estou usando ele somente
    //para saber a quantidade de comentários do produto
    const comentariosProduto = comentarios.filter(
        comentario => comentario.id === produtoId.id
    )

    let userComentario = comentarioUser ?
        <div className={styles.user_comentario}>
            <p>Seu comentário</p>
            <Comentario nome={comentarioUser.usuario} dataHora={comentarioUser.data} texto={comentarioUser.comentario} />
        </div> : <PublicarComentario />

    let naoLogado =
        <div className={styles.user_login}>
            <p className={styles.user_login__titulo}>Faça o Login para avaliar o produto</p>
            <Login />
        </div>

    return (
        <div className={styles.container}>
            <span className={styles.container__avaliacoes_span}>
                <span className={styles.container__avaliacoes_span__media}>
                    <p className={styles.container__avaliacoes_span__media__titulo}>Nota média</p>
                    <p>{mediaAvaliacao(produtoId.id)} estrelas de 5</p>
                </span>
                <p>{comentariosProduto.length} avaliações</p>
            </span>
            {user ? <PublicarComentario /> : naoLogado}
        </div>
    )
}