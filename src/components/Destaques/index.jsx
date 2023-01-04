import { Component } from 'react';
import styles from './Destaques.module.scss'
import icone from './chama_icon.png'
import produtos from '../assets/produtos.json'
import Produtos from '../Produtos';

export default class Destaques extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <section className={styles.destaques}>
                    <span className={styles.destaques__titulo}>
                        <img src={icone} />
                        <h2>Ofertas em Destaque</h2>
                    </span>
                    <Produtos produtos={produtos}/>
                </section>
            </>
        )
    }
}