import styles from './TagsDeFiltragem.module.scss'
import produtos from '../assets/produtos.json';
import Produtos from '../Produtos';
import BotaoTags from '../BotaoTags';
import { useState } from 'react';

export default function TagsDeFiltragem(props) {
    const initial_state = produtos
    const [cards, setCards] = useState(initial_state)

    const tags = [
        'Computador',
        'Notebook',
        'Cadeira',
        'Processador',
        'Placa de Video',
        'Acessorio',
        'Monitor',
    ]

    const filtraProdutos = (tag) => {
        const novos_cards = produtos.filter(produto => produto.tag === tag)
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