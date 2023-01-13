import styles from './TiposPagamento.module.scss'
import { usePagamentoContext } from '../../common/contexts/Pagamento'

export function TiposPagamento() {
    const { pagamentos, mudaPagamento, tipoPagamento } = usePagamentoContext()

    return (
        <form className={styles.formulario}>
            <select 
            name='pagamento' 
            onChange={e => mudaPagamento(e)}
            defaultValue={tipoPagamento.tipo}
            >
                {pagamentos.map(pagamento => <option
                    id={pagamento.id}
                    key={pagamento.id}
                >{pagamento.tipo}</option>)}
            </select>
        </form>
    )
}