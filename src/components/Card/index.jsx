import { Link, useNavigate } from 'react-router-dom'
import styles from './Card.module.scss'
import icone from './logo_icon.png'
import conversaoPreco from '../../common/functions/Converte/conversaoPreco'
import { useCarrinhoContext } from '../../common/contexts/Carrinho'

export default function Card({ produto }){
    const { adicionarProdutoNoCarrinho } = useCarrinhoContext()
    const nav = useNavigate()

        return (
            <>
                <div onClick={() => nav(`/produto/${produto.id}`)} key={produto.id} className={styles.card}>
                    <img src={produto.imagem} alt="imagem card"/>
                    <p className={styles.card__desc}>{produto.titulo}</p>
                    <span className={styles.pagamento}>
                        <p className={styles.card__preco}>R$ {conversaoPreco(produto.preco.toFixed(2))}</p>
                        <p className={styles.card__pix}>À vista no pix</p>
                    </span>
                    <span 
                    onClick={() => nav(`/produto/${produto.id}`)}
                    className={styles.card__botao_compra}>
                        <img src={icone} alt="icone carrinho botao comprar"/>
                        <p>Comprar</p>
                    </span>
                </div>
            </>
        )

}