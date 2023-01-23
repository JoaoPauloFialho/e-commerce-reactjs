import Comentario from './Comentario'
import FazerComentario from './FazerComentario'
import styles from './Comentarios.module.scss'
import { useComentariosContext } from '../../common/contexts/Comentarios'
import { useParams } from 'react-router-dom'
import { useUserContext } from '../../common/contexts/User'

export default function Comentarios() {
    const { comentarios } = useComentariosContext()
    const { user } = useUserContext()
    const usuarioId = useParams()

    const comentariosPage = comentarios.filter(
        comentario => comentario.id === usuarioId.id
    )

    return (
        <section className={styles.conteiner}>
            <h2>Avalie o produto</h2>
            <FazerComentario />
            <h2>Comentários</h2>
            {comentariosPage.map(comentario =>
                <Comentario
                    nome={comentario.usuario}
                    dataHora={comentario.data}
                    texto={comentario.comentario}
                    avaliacao={comentario.avaliacao}
                />
            )}
        </section>
    )
}