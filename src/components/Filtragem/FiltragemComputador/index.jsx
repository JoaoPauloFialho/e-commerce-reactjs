import { useEffect, useState } from 'react'
import Produtos from '../../Produtos'
import styles from './FiltragemComputador.module.scss'

export default function FiltragemComputador(props) {
    const produtosIniciais = props.produtos
    const [produtos, setProdutos] = useState(props.produtos)

    const maiorPreco = props.produtos.reduce(
        (acum, produto) => acum.preco > produto.preco ? acum : produto
    ).preco
    const menorPreco = props.produtos.reduce(
        (acum, produto) => acum.preco < produto.preco ? acum : produto
    ).preco

    const [preco, setPreco] = useState(maiorPreco)
    const [marca, setMarca] = useState('Todos')
    const [processador, setProcessador] = useState('Todos')
    const metade = (maiorPreco / 2).toFixed(2)

    const marcas = [...new Set(produtosIniciais.map(produto => produto.marca))]
    const processadores = [...new Set(produtosIniciais.map(produto => produto.processador))]

    //sempre que ocorre mudanças nos filtros os produtos são renderizados novamente
    useEffect(() => {
        let novosProdutos = produtosIniciais
        novosProdutos = novosProdutos.filter(produto => produto.preco <= preco)
        if (marca !== "Todos") novosProdutos = novosProdutos.filter(
            produto => produto.marca === marca
        )
        if (processador !== "Todos") novosProdutos = novosProdutos.filter(
            produto => produto.processador === processador
        )
        setProdutos(novosProdutos)
    }, [preco, marca, processador])

    function aoMudarPreco(preco) {
        setPreco(preco)
    }

    function aoMudarMarca(marca) {
        setMarca(marca)
    }

    function aoMudarProcessador(processador) {
        setProcessador(processador)
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
                <span className={styles.filtragem__marcas}>
                    <p className={styles.filtragem__marcas__titulo}>Marcas</p>
                    <select
                        onChange={event => aoMudarMarca(event.target.value)}
                        defaultValue={'Todos'}
                    >
                        <option >Todos</option>
                        {marcas.map(marca => <option>{marca}</option>)}
                    </select>
                </span>
                <span className={styles.filtragem__processadores}>
                    <p className={styles.filtragem__processadores__titulo}>Processadores</p>
                    <select
                        onChange={event => aoMudarProcessador(event.target.value)}
                        defaultValue={'Todos'}
                    >
                        <option >Todos</option>
                        {processadores.map(marca => <option>{marca}</option>)}
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