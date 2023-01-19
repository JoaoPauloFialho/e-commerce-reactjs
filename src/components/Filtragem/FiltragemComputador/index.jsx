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
    const [placaDeVideo, setPlacaDeVideo] = useState('Todos')
    const [armazenamento, setArmazenamento] = useState('Todos')
    const metade = (maiorPreco / 2).toFixed(2)

    const marcas = [...new Set(produtosIniciais.map(produto => produto.marca))]
    const processadores = [...new Set(produtosIniciais.map(produto => produto.processador))]
    const placas = [...new Set(produtosIniciais.map(produto => produto.placaDeVideo))]
    const armazenamentos = [...new Set(produtosIniciais.map(produto => produto.armazenamento))]

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
        if (placaDeVideo !== "Todos") novosProdutos = novosProdutos.filter(
            produto => produto.placaDeVideo === placaDeVideo
        )
        if (armazenamento !== "Todos") novosProdutos = novosProdutos.filter(
            produto => produto.armazenamento === armazenamento
        )
        setProdutos(novosProdutos)
    }, [preco, marca, processador, placaDeVideo, armazenamento])

    function aoMudarPreco(preco) {
        return setPreco(preco)
    }

    function aoMudarMarca(marca) {
        return setMarca(marca)
    }

    function aoMudarProcessador(processador) {
        return setProcessador(processador)
    }

    function aoMudarPlacaDeVideo(placaDeVideo){
        return setPlacaDeVideo(placaDeVideo)
    }

    function aoMudarArmazenamento(armazenamento){
        return setArmazenamento(armazenamento)
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
                <span className={styles.filtragem__processadores}>
                    <p className={styles.filtragem__processadores__titulo}>Placas de Video</p>
                    <select
                        onChange={event => aoMudarPlacaDeVideo(event.target.value)}
                        defaultValue={'Todos'}
                    >
                        <option >Todos</option>
                        {placas.map(marca => <option>{marca}</option>)}
                    </select>
                </span>                
                <span className={styles.filtragem__processadores}>
                    <p className={styles.filtragem__processadores__titulo}>Armazenamento</p>
                    <select
                        onChange={event => aoMudarArmazenamento(event.target.value)}
                        defaultValue={'Todos'}
                    >
                        <option >Todos</option>
                        {armazenamentos.map(armazenamento => <option>{armazenamento}</option>)}
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