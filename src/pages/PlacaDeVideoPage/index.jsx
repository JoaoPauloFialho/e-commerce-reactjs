import styles from './PlacaDeVideoPage.module.scss'
import Filtragem from '../../components/Filtragem'

export default function PlacaDeVideoPage() {
    return (
        <main className={styles.placa_de_video}>
            <span className={styles.placa_de_video__titulo}>
                <h1>Placas de Video</h1>
            </span>
            <Filtragem tag='Placa de Video' />
        </main>
    )
}