import styles from './Comentario.module.scss'
import fazerSigla from '../../../common/functions/Formatacao/fazerSigla'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'


export default function Comentario(props) {

    return (
        <div className={styles.comentario}>
            <span className={styles.comentario__titulo}>
                <span>
                    <p>{fazerSigla(props.nome)}</p>
                </span>
                <p className={styles.comentario__titulo__usuario}> <b>{props.nome}</b> {props.dataHora}</p>
                <ul className={styles.avaliacao}>
                    {props.avaliacao.map(estrela => <li
                        key={estrela.id}
                        id={estrela.id}
                        className={styles.avaliacao__estrela}>{
                            estrela.valor === 1 ? <AiFillStar color='yellow' /> :
                                <AiOutlineStar color='yellow' />
                        }</li>)
                    }
                </ul>
            </span>
            <p className={styles.comentario__texto}>{props.texto}</p>
        </div>
    )
}