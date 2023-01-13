import { useCarrinhoContext } from '../../common/contexts/Carrinho'
import styles from './BotaoComprar.module.scss'
import icone from './logo_icon.png'

export default function BotaoComprar({ children }) {
    const { compra } = useCarrinhoContext()
    return (
        <span onClick={() => compra()} className={styles.botao_compra}>
            <img src={icone} alt="icone carrinho botao comprar"/>
            <p>{children}</p>
        </span>
    )
}