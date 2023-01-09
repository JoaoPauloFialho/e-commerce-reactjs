import Frete from '../Frete'
import styles from './PagamentoCarrinho.module.scss'
import sacoDinheiro from './saco_dinheiro.png'
import caminhao from './caminhao_icone.png'
import BotaoComprar from '../BotaoComprar'
import { useCarrinhoContext } from '../../commons/contexts/Carrinho'
import conversaoPreco from '../../commons/functions/Converte/conversaoPreco'

export default function PagamentoCarrinho() {
    const { total } = useCarrinhoContext()

    return (
        <>
            <section className={styles.pagamento_carrinho}>
                <div className={styles.pagamento}>
                    <span className={styles.pagamento__titulo}>
                        <img src={sacoDinheiro} alt='saco dinheiro icone' />
                        <h3>Pagamento</h3>
                    </span>
                    <span className={styles.pagamento__sub_total}>
                        <p className={styles.pagamento__sub_total_sub_total}>Sub Total</p>
                        <p className={styles.pagamento__sub_total_preco}>R$ {conversaoPreco(total.toFixed(2))}</p>
                    </span>
                    <span className={styles.pagamento__total}>
                        <p className={styles.pagamento__total_total}>Total</p>
                        <p className={styles.pagamento__total_preco}>R$ {conversaoPreco(total.toFixed(2))}</p>
                    </span>
                    <div className={styles.pagamento__frete}>
                        <span className={styles.pagamento__frete_titulo}>
                            <img src={caminhao} alt='caminhao icone' />
                            <h3>Calcular frete</h3>
                        </span>
                        <Frete />
                        <p>Valor do frete R$ 00</p>
                    </div>
                </div>
                <BotaoComprar>
                    Comprar
                </BotaoComprar>
            </section>
        </>
    )
}