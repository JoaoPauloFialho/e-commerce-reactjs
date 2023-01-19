import { useEffect, useState } from 'react'
import Produtos from '../../Produtos'
import styles from './FiltragemProcessadores.module.scss'

export default function FiltragemHardware(props) {
    const produtosIniciais = props.produtos
    const [produtos, setProdutos] = useState(props.produtos)

    const maiorPreco = props.produtos.reduce(
        (acum, produto) => acum.preco > produto.preco ? acum : produto
    ).preco
    const menorPreco = props.produtos.reduce(
        (acum, produto) => acum.preco < produto.preco ? acum : produto
    ).preco

    const [preco, setPreco] = useState(maiorPreco)
    const [serie, setSerie] = useState('Todos')
    const metade = (maiorPreco / 2).toFixed(2)

    const series = [...new Set(produtosIniciais.map(produto => produto.serie))]

    //sempre que ocorre mudanças nos filtros os produtos são renderizados novamente
    useEffect(() => {
        let novosProdutos = produtosIniciais
        novosProdutos = novosProdutos.filter(produto => produto.preco <= preco)
        if (serie !== "Todos") novosProdutos = novosProdutos.filter(
            produto => produto.serie === serie
        )
        setProdutos(novosProdutos)
    }, [preco, serie, setProdutos])

    function aoMudarPreco(preco) {
        setPreco(preco)
    }

    function aoMudarserie(serie) {
        setSerie(serie)
    }

    return (
        <>
            <div className={styles.filtragem}>
                <span className={styles.filtragem__precos}>
                    <p className={styles.filtragem__precos__titulo}>Preços</p>
                    <p className={styles.filtragem__precos__preco_atual}>{preco}</p>
                    <span className={styles.filtragem__precos__span}>
                        <p className={styles.filtragem__precos__span__preco}>{menorPreco}</p>
                        <input
                            className={styles.filtragem__precos__span__input}
                            onChange={event => aoMudarPreco(event.target.value)}
                            value={preco}
                            type={'range'} max={maiorPreco}
                            min={menorPreco}
                            step={0.01}
                        />
                        <p className={styles.filtragem__precos__span__preco}>{maiorPreco}</p>
                    </span>
                </span>
                <span className={styles.filtragem__series}>
                    <p className={styles.filtragem__series__titulo}>Serie</p>
                    <select
                        onChange={event => aoMudarserie(event.target.value)}
                        defaultValue={'Todos'}
                    >
                        <option >Todos</option>
                        {series.map(tipos => <option>{tipos}</option>)}
                    </select>
                </span>
            </div>
            {produtos.length > 0 ?
                <Produtos produtos={produtos} /> :
                <p className={styles.sem_produtos}>Nenhum produto encontrado</p>
            }
        </>
    )
}