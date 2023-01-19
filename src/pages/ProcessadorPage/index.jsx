import styles from './ProcessadorPage.module.scss'
import Filtragem from '../../components/Filtragem'

export default function PlacaDeVideoPage() {
    return (
        <main className={styles.processador}>
            <span className={styles.processador__titulo}>
                <h1>Processadores</h1>
            </span>
            <Filtragem tag='Processador' />
        </main>
    )
}