import { useState } from 'react'
import { useComentariosContext } from '../../../common/contexts/Comentarios'
import { useUserContext } from '../../../common/contexts/User'
import getDataHoraAtual from '../../../common/functions/DataHorario/getDataHoraAtual'
import fazerSigla from '../../../common/functions/Formatacao/fazerSigla'
import Comentario from '../../Comentarios/Comentario'
import styles from './PublicarComentario.module.scss'

export default function PublicarComentario() {
    const { user } = useUserContext()
    const { comentarios, fazerComentario, jaComentou } = useComentariosContext()
    const [comentario, setComentario] = useState()
    const comentarioUser = comentarios.filter(comentario => comentario.usuario === user.usuario)[0]

    function aoMudarComentario(event) {
        setComentario(event.target.value)
    }

    function aoPublicarComentario(event) {
        event.preventDefault()
        if (!jaComentou()) fazerComentario(user.usuario, getDataHoraAtual(), comentario)
    }

    if (comentarioUser) {
        return (
            <Comentario nome={comentarioUser.usuario} data={comentarioUser.data} texto={comentarioUser.comentario} />
        )
    } else {
        return (
            <div className={styles.comentario}>
                <span className={styles.comentario__titulo}>
                    <span>
                        <p>{fazerSigla(user.usuario)}</p>
                    </span>
                    <p>
                        <b>{user.usuario}</b>
                    </p>
                </span>
                <form onSubmit={(event) => aoPublicarComentario(event)}>
                    <input
                        onChange={event => aoMudarComentario(event)}
                        type='text'
                        placeholder='Faça um comentário'
                    />
                    <button>Publicar</button>
                </form>
            </div>
        )
    }
}