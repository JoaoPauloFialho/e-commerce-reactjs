import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useComentariosContext } from '../../../../common/contexts/Comentarios'
import { useUserContext } from '../../../../common/contexts/User'
import getDataHoraAtual from '../../../../common/functions/DataHorario/getDataHoraAtual'
import fazerSigla from '../../../../common/functions/Formatacao/fazerSigla'
import Comentario from '../../../Comentarios/Comentario'
import styles from './PublicarComentario.module.scss'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

export default function PublicarComentario() {
    const { user } = useUserContext()
    const { comentarios, fazerComentario, jaComentou } = useComentariosContext()
    const [comentario, setComentario] = useState()
    const [avaliacao, setAvaliacao] = useState(
        [
            { id: 0, valor: 0 },
            { id: 1, valor: 0 },
            { id: 2, valor: 0 },
            { id: 3, valor: 0 },
            { id: 4, valor: 0 }
        ]
    )

    const produtoId = useParams();
    const comentarioUser = comentarios.filter(
        comentario => comentario.usuario === user.usuario && comentario.id === produtoId.id
    )[0]

    function aoMudarComentario(event) {
        setComentario(event.target.value)
    }

    function aoPublicarComentario(event) {
        event.preventDefault()
        if (!jaComentou(produtoId.id)) fazerComentario(
            user.usuario,
            getDataHoraAtual(),
            comentario,
            produtoId.id,
            avaliacao
        )
    }

    function aoMudarAvaliacao(event) {
        //como o react icon possui um elemento filho <path/> o evento onMouseMove() fica meio "bugado" no
        //contexto dessa avaliação por estrela
        //para resolver isso eu estou pegando o elemento html do evento e checando, a avaliação só vai
        //mudar quando o evento
        if (event.target.outerHTML[1] === 's') {
            const novaAvaliacao = avaliacao.map(
                estrela => {
                    if (estrela.id <= event.target.id) return { id: estrela.id, valor: 1 }
                    else return { id: estrela.id, valor: 0 }
                }
            )
            setAvaliacao(novaAvaliacao)
        }
    }

    if (!comentarioUser) {
        return (
            <div className={styles.conteiner}>
                <p className={styles.conteiner__titulo}>Faça o seu comentário</p>
                <span className={styles.conteiner__comentario_titulo}>
                    <span>
                        <p>{fazerSigla(user.usuario)}</p>
                    </span>
                    <p>
                        <b>{user.usuario}</b>
                    </p>
                    <ul className={styles.avaliacao}
                    >
                        {avaliacao.map(estrela => <li
                            onMouseMove={(event) => aoMudarAvaliacao(event)}
                            key={estrela.id}
                            id={estrela.id}
                            className={styles.avaliacao__estrela}>{
                                estrela.valor === 1 ? <AiFillStar id={estrela.id} color='yellow' /> :
                                    <AiOutlineStar id={estrela.id} color='yellow' />
                            }</li>)
                        }
                    </ul>
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
    } else {
        return (
            <div className={styles.user_comentario}>
                <p>Seu comentário</p>
                <Comentario
                    nome={comentarioUser.usuario}
                    dataHora={comentarioUser.data}
                    texto={comentarioUser.comentario}
                    avaliacao={comentarioUser.avaliacao}
                />
            </div>
        )
    }
}