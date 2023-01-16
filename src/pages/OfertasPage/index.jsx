import { Component } from "react";
import styles from './OfertasPage.module.scss';
import iconeDesconto from './icon_desconto.png';
import TagsDeFiltragem from "../../components/TagsDeFiltragem";

export default class Produtos extends Component {

    render() {
        return (
            <>
                <section className={styles.ofertas}>
                    <span className={styles.ofertas__titulo}>
                        <img src={iconeDesconto} alt="icone desconto"/>
                        <h2>Ofertas</h2>
                    </span>
                    <TagsDeFiltragem/>
                </section>
            </>
        )
    }
}