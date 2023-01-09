import styles from './ProdutosCarrinho.module.scss'
import produtos from '../assets/produtos.json'
import CardProdutoCarrinho from '../CardProdutoCarrinho'
import { useCarrinhoContext } from '../../commons/contexts/Carrinho'

export default function ProdutosCarrinho(){
    const { carrinho, adicionarProdutoNoCarrinho} = useCarrinhoContext()

    return(
        <div className={styles.produtos}>
            {carrinho.map(prod => <CardProdutoCarrinho produto={prod}/>)}
        </div>
    )
}