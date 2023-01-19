import Filtragem from '../../components/Filtragem'
import styles from './NotebookPage.module.scss'

export default function NotebookPage(){
    return (
        <main className={styles.notebooks}>
            <span className={styles.notebooks__titulo}>
                <h1>Notebooks</h1>
            </span>
            <Filtragem tag='Notebook'/>
        </main>
    )
}