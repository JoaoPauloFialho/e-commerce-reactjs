import styles from './ProdutosCarrinho.module.scss'
import CardProdutoCarrinho from '../CardProdutoCarrinho'
import { useCarrinhoContext } from '../../common/contexts/Carrinho'
import { useNavigate } from 'react-router-dom'

export default function ProdutosCarrinho() {
    const { carrinho} = useCarrinhoContext()
    const navegar = useNavigate()

    return (
        <div className={styles.produtos}>
            {carrinho.length !== 0 ?
                carrinho.map(prod => <CardProdutoCarrinho produto={prod} />) :
                <div className={styles.carrinho_vazio}>
                    <h2>Infelizmente o seu Carrinho está vazio</h2>
                    <button onClick={() => navegar("/")} className={styles.botao}>
                        HOME
                    </button>
                    <button onClick={() => navegar(-1)} className={styles.botao}>
                        VOLTAR
                    </button>
                </div>
            }
        </div>
    )
}