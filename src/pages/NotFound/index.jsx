import styles from './NotFound.module.scss'
import bonfire from './bonfire.gif'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {

    const navegar = useNavigate()

    return (
        <section className={styles.notfound}>
            <span className={styles.notfound__text}>

                <h1>OPS, NÃO CONSEGUI ENCONTRAR ESSA PÁGINA</h1>
                <p>Você desbravou longe demais {`amigo(a)`} por favor, descanse na fogueira ao lado</p>
                <p>e clique em um dos links válidos abaixo para ser redirecionado</p>
                <button onClick={() => navegar("/")} className={styles.botao}>
                    HOME
                </button>
                <button onClick={() => navegar(-1)} className={styles.botao}>
                    VOLTAR
                </button>

            </span>

            <img className={styles.notfound__img} src={bonfire} alt='bonfire' />
        </section>
    )
}