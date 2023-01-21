import { Link, useNavigate } from 'react-router-dom'
import styles from './Card.module.scss'
import icone from './logo_icon.png'
import conversaoPreco from '../../common/functions/Converte/conversaoPreco'
import { useCarrinhoContext } from '../../common/contexts/Carrinho'

export default function Card(props){
    const { adicionarProdutoNoCarrinho } = useCarrinhoContext()
    const nav = useNavigate()

    function aoComprarProduto(){
        adicionarProdutoNoCarrinho()
    }

        return (
            <>
                <div key={props.id} className={styles.card}>
                    <img src={props.imagem} alt="imagem card"/>
                    <p className={styles.card__desc}>{props.titulo}</p>
                    <span className={styles.pagamento}>
                        <p className={styles.card__preco}>R$ {conversaoPreco(props.preco.toFixed(2))}</p>
                        <p className={styles.card__pix}>À vista no pix</p>
                    </span>
                    <a href={`/carrinho`}>
                    <span className={styles.card__botao_compra}>
                        <img src={icone} alt="icone carrinho botao comprar"/>
                        <p>Comprar</p>
                    </span>
                    </a>
                </div>
            </>
        )

}