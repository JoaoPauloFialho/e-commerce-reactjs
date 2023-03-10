import styles from './CardProdutoCarrinho.module.scss'
import precoStringParaFloat from '../../common/functions/Converte/precoStringParaFloat'
import conversaoPreco from '../../common/functions/Converte/conversaoPreco'
import { useCarrinhoContext } from '../../common/contexts/Carrinho'

export default function CardProdutoCarrinho({ produto }) {
    const { adicionarProdutoNoCarrinho, removerProdutoDoCarrinho } = useCarrinhoContext()

    return (
        <div className={styles.produto}>
            <span className={styles.produto__informacoes}>
                <img src={produto.imagem} alt='produto imagem' />
                <p className={styles.produto__informacoes__nome}>{produto.titulo}</p>
                <p className={styles.produto__informacoes__preco}>
                    R$ {conversaoPreco((
                        precoStringParaFloat(produto.preco) * produto.quantidade).toFixed(2)
                    )}
                </p>
            </span>
            <span className={styles.produto__quantidade}>
                <button
                    onClick={() => removerProdutoDoCarrinho(produto)}
                >-</button>

                <p>{produto.quantidade}</p>
                
                <button
                    onClick={() => adicionarProdutoNoCarrinho(produto)}
                >+</button>
            </span>
        </div>
    )
}