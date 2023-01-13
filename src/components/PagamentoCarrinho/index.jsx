import Frete from '../Frete'
import styles from './PagamentoCarrinho.module.scss'
import sacoDinheiro from './saco_dinheiro.png'
import caminhao from './caminhao_icone.png'
import BotaoComprar from '../BotaoComprar'
import { useCarrinhoContext } from '../../common/contexts/Carrinho'
import conversaoPreco from '../../common/functions/Converte/conversaoPreco'
import { TiposPagamento } from '../TiposPagamento'

export default function PagamentoCarrinho() {
    const { subTotal, mudaFrete, frete = 0 } = useCarrinhoContext()

    return (
        <>
            <section className={styles.pagamento_carrinho}>
                <div className={styles.pagamento}>
                    <span className={styles.pagamento__titulo}>
                        <img src={sacoDinheiro} alt='saco dinheiro icone' />
                        <h3>Pagamento</h3>
                    </span>
                    <span className={styles.pagamento__tipo}>
                        <h4>Tipo Pagamento</h4>
                        <span className={styles.pagamento__tipo__tipos}>
                            <TiposPagamento />
                        </span>
                    </span>
                    <span className={styles.pagamento__sub_total}>
                        <p className={styles.pagamento__sub_total_sub_total}>Sub Total</p>
                        <p className={styles.pagamento__sub_total_preco}>R$ {conversaoPreco(subTotal.toFixed(2))}</p>
                    </span>
                    <div className={styles.pagamento__frete}>
                        <span className={styles.pagamento__frete_titulo}>
                            <img src={caminhao} alt='caminhao icone' />
                            <h3>Calcular frete</h3>
                        </span>
                        <Frete />
                    </div>
                    <span className={styles.pagamento__linha}>
                        <p> </p>
                    </span>
                    <span className={styles.pagamento__total}>
                        <p className={styles.pagamento__total_total}>Total</p>
                        <p className={styles.pagamento__total_preco}>R$ {conversaoPreco((subTotal + frete).toFixed(2))}</p>
                    </span>
                </div>
                <BotaoComprar>
                    Comprar
                </BotaoComprar>
            </section>
        </>
    )
}