import { Link } from 'react-router-dom'
import styles from './Card.module.scss'
import icone from './logo_icon.png'

export default function Card(props){
        return (
            <>
                <div className={styles.card}>
                    <img src={props.imagem} alt="imagem card"/>
                    <p className={styles.card__desc}>{props.titulo}</p>
                    <span className={styles.pagamento}>
                        <p className={styles.card__preco}>R$ {props.preco}</p>
                        <p className={styles.card__pix}>À vista no pix</p>
                    </span>
                    <Link to={`/produto/${props.id}`}>
                    <span className={styles.card__botao_compra}>
                        <img src={icone} alt="icone carrinho botao comprar"/>
                        <p>Comprar</p>
                    </span>
                    </Link>
                </div>
            </>
        )

}