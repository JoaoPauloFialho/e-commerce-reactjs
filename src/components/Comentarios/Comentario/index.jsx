import styles from './Comentario.module.scss'
import userComentarioFundo from './user_comentario_fundo.png'


export default function Comentario(props) {

    function fazerSigla(string){
        const array = []
        array.push(string.toUpperCase()[0])
        for (let i = string.length; i != -1; i--) {
            if(string[i] === ' ') array.push(string[i+1])
        }
        return array.join('')
    }

    return (
        <div className={styles.comentario}>
            <span className={styles.comentario__titulo}>
                <span>
                    <p>{fazerSigla(props.nome)}</p>
                </span>
                <p className={styles.comentario__titulo__usuario}> <b>{props.nome}</b> {`(${props.data} ${props.horario})`}</p>
            </span>
            <p className={styles.comentario__texto}>{props.texto}</p>
        </div>
    )
}