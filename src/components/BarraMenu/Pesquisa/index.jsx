import { useState } from 'react'
import styles from './Pesquisa.module.scss'
import lupa from './lupa.png'
import { useNavigate, useNavigation } from 'react-router-dom'

export default function PesquisaBarra() {
    const [pesquisa, setPesquisa] = useState()
    const navegacao = useNavigate()

    function aoMudarPesquisa(event) {
        return setPesquisa(event.target.value)
    }

    function aoEnviar(event) {
        navegacao(`/pesquisa/${pesquisa}`)
    }

    return (
        <form onSubmit={event => aoEnviar(event)} className={styles.pesquisa}>
            <input
                onChange={event => aoMudarPesquisa(event)}
                type='text' className={styles.pesquisa__texto}
                placeholder='Pesquisar Produtos'
            />
            <button className={styles.pesquisa__botao}><img
                className={styles.pesquisa__botao__imagem}
                src={lupa}
                alt='lupa de pesquisa'
            /></button>
        </form>
    )
}