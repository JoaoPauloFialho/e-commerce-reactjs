import Filtragem from '../../components/Filtragem'
import styles from './ComputadoresPage.module.scss'
import computadorIcone from './computador_icone.png'

export default function ComputadoresPage() {
    return (
        <main className={styles.computadores}>
            <span className={styles.computadores__titulo}>
                <img src={computadorIcone} alt='computador icone'/>
                <h1>Computadores</h1>
            </span>
            <Filtragem tag='Computador'/>
        </main>
    )
}