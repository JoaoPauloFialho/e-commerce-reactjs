import Frete from '../Frete'
import styles from './CardProdutoCarrinho.module.scss'

export default function CardProdutoCarrinho({ produto }) {
    return (
        <div className={styles.produto}>
            <span className={styles.produto__informacoes}>
                <img src={produto.imagem} />
                <p className={styles.produto__informacoes__nome}>{produto.titulo}</p>
                <p className={styles.produto__informacoes__preco}>R$ {produto.preco}</p>
            </span>
            <span className={styles.produto__quantidade}>
                <button>-</button>
                <p>1</p>
                <button>+</button>
            </span>
        </div>
    )
}