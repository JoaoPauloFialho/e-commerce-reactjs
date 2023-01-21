import Card from './../Card';
import styles from './Produtos.module.scss';
export default function Produtos(props) {

    return (
        <>
            <div className={styles.cards}>
                {props.produtos.map(produto => <Card produto={produto} />)}
            </div>
        </>
    )
}