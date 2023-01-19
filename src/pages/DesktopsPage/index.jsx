import Filtragem from '../../components/Filtragem'
import styles from './DesktopsPage.module.scss'
import computadorIcone from './computador_icone.png'

export default function DesktopsPage() {
    return (
        <main className={styles.computadores}>
            <span className={styles.computadores__titulo}>
                <h1>Desktops</h1>
            </span>
            <Filtragem tag='Computador'/>
        </main>
    )
}