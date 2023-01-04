import styles from './FiltragemTags.module.scss'
import produtos from '../assets/produtos.json';
import Produtos from '../Produtos';
import BotaoTags from '../BotaoTags';
import { useState } from 'react';

export default function FiltragemTags(props) {
    const initial_state = produtos
    const [cards, setCards] = useState(initial_state)

    const tags = [
        'Computador',
        'Cadeira',
        'Hardware',
        'Acessorio',
        'Monitor',
    ]

    const filtraProdutos = (tag) => {
        const novos_cards = produtos.filter(produto => produto.tag === tag)
        console.log(tag)
        console.log(novos_cards)
        setCards(novos_cards);
    }
    return (
        <section className={styles.filtro}>
            <nav className={styles.filtro__nav_tags}>
                <h1>{props.titulo}</h1>
                <span className={styles.filtro__tags}>
                    <p onClick={e => setCards(initial_state)}>Todos</p>
                    {tags.map(tag => <BotaoTags id={tag} tag={tag} filtraProdutos={filtraProdutos} />)}
                </span>
            </nav>
            <nav className={styles.filtro__cards}>
                <Produtos produtos={cards} />
            </nav>
        </section>
    )
}