import Card from './../Card';
import styles from './Produtos.module.scss';
export default function Produtos(props) {

    return (
        <>
            <div className={styles.cards}>
                {props.produtos.map(produto => <Card id={produto.id}
                    titulo={produto.titulo} preco={produto.preco}
                    imagem={produto.imagem} />)}
            </div>
        </>
    )
}