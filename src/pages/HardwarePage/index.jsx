import Filtragem from '../../components/Filtragem'
import styles from './HardwarePage.module.scss'
import hardware from './hardware_icon.png'

export default function HardwarePage(){
    return (
        <main className={styles.hardware}>
            <span className={styles.hardware__titulo}>
                <img src={hardware} alt='computador icone'/>
                <h1>Hardware</h1>
            </span>
            <Filtragem tag='Hardware'/>
        </main>
    )
}