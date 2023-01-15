import Comentario from './Comentario'
import FazerComentario from '../FazerComentario'
import styles from './Comentarios.module.scss'

export default function Comentarios() {
    let text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, perferendis doloremque. Molestiae, accusantium! Fugiat corrupti beatae soluta nihil iste nisi praesentium quam eveniet, a distinctio sunt aut ipsam dicta tempore!'

    return (
        <section className={styles.conteiner}>
            <h2>Avalie o produto</h2>
            <FazerComentario/>
            <h2>Comentários</h2>
            <Comentario nome='João Paulo' texto={text} data='13/01/2003' horario='23:47'/>
        </section>
    )
}