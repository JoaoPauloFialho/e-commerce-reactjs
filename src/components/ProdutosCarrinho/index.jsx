import styles from './ProdutosCarrinho.module.scss'
import produtos from '../assets/produtos.json'
import CardProdutoCarrinho from '../CardProdutoCarrinho'

export default function ProdutosCarrinho(){
    const novosProdutos = produtos.filter(produto => produto.tag === "Computador")

    return(
        <div className={styles.produtos}>
            {novosProdutos.map(prod => <CardProdutoCarrinho produto={prod}/>)}
        </div>
    )
}