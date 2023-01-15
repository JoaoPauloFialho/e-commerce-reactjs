import styles from './Comentario.module.scss'
import fazerSigla from '../../../common/functions/Formatacao/fazerSigla'


export default function Comentario(props) {

    console.log(props.nome)
    console.log(props.texto)

    return (
        <div className={styles.comentario}>
            <span className={styles.comentario__titulo}>
                <span>
                    <p>{fazerSigla(props.nome)}</p>
                </span>
                <p className={styles.comentario__titulo__usuario}> <b>{props.nome}</b> {props.dataHora}</p>
            </span>
            <p className={styles.comentario__texto}>{props.texto}</p>
        </div>
    )
}