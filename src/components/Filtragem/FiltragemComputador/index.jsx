import { useEffect, useState } from 'react'
import Produtos from '../../Produtos'
import styles from './FiltragemComputador.module.scss'

export default function FiltragemComputador(props) {
    const produtosIniciais = props.produtos
    const [produtos, setProdutos] = useState(props.produtos)
    const maiorPreco = props.produtos.reduce((acum, produto) => acum.preco > produto.preco ? acum : produto).preco
    const menorPreco = props.produtos.reduce((acum, produto) => acum.preco < produto.preco ? acum : produto).preco
    const [preco, setPreco] = useState(maiorPreco)
    const [marca, setMarca] = useState('Todos')
    const [processador, setProcessador] = useState('Todos')
    const metade = (maiorPreco / 2).toFixed(2)

    const marcas = [...new Set(produtosIniciais.map(produto => produto.marca))]
    const processadores = [...new Set(produtosIniciais.map(produto => produto.processador))]


    function aoMudarPreco(preco) {
        setPreco(prevPreco => preco)
        setProdutos(props.produtos.filter(produto => produto.preco <= preco))
    }

    function aoMudarMarca(marca) {

        setMarca(marca)
        if (marca === "Todos") {
            //se a marca for todos ele mostra de acordo com o processador
            //se o processador for todos tbm ele mostra todos os produtos
            if (processador === "Todos") return setProdutos(
                produtosIniciais.filter(produto => produto.processador !== processador)
            )
            return setProdutos(produtosIniciais.filter(produto => produto.processador === processador))
        }
        //se a marca não for todos ele filtra os produtos
        return setProdutos(
            props.produtos.filter(produto => produto.marca === marca)
        )
    }

    function aoMudarProcessador(processador) {
        setProcessador(processador)
        if (processador === "Todos") {
            console.log(processador)
            //segue a mesma lógica do filtro de marcas ali em cima
            if (marca === "Todos") return setProdutos(produtosIniciais.filter(
                produto => produto.marca !== marca
            ))
            console.log(marca)
            return setProdutos(produtosIniciais.filter(produto => produto.marca === marca))
        }
        return setProdutos(
            props.produtos.filter(produto => produto.processador === processador
            ))
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
            <Produtos produtos={produtos} />
        </>
    )
}