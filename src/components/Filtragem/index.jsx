
import produtos from '../assets/produtos.json'
import Produtos from '../Produtos/index.jsx'
import styles from './Filtragem.module.scss'

export default function Filtragem(props) {
    const cards = produtos.filter(produto => (produto.tag === props.tag && produto.id !== props.id))


    return (
        <>
            {cards.length > 0 ? <Produtos produtos={cards} /> :
                <div className={styles.filtragem}>
                    <h3>SEM PRODUTOS PARA MOSTRAR {`:(`}</h3>
                </div>}
        </>
    )
}