import PagamentoCarrinho from '../../components/PagamentoCarrinho'
import ProdutosCarrinho from '../../components/ProdutosCarrinho'
import BotaoComprar from '../../components/BotaoComprar'
import styles from './Carrinho.module.scss'
import carrinhoIcon from './carrinho_icon.png'

export default function Carrinho() {
    return (
        <section className={styles.carrinho}>
            <span className={styles.carrinho__titulo}>
                <img src={carrinhoIcon} alt='Icone de carrinho' />
                <h1 style={{ color: 'white' }}>Meu carrinho</h1>
            </span>
            <div className={styles.carrinho__informacoes}>
                <span className={styles.carrinho__informacoes__produtos}>
                    <ProdutosCarrinho />
                </span>
                <PagamentoCarrinho />
            </div>
        </section>
    )
}