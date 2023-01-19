import { useParams } from 'react-router-dom'
import styles from './Pesquisa.module.scss'
import dadosBrutos from '../../components/assets/produtos.json'
import Produtos from '../../components/Produtos'
import { useEffect, useState } from 'react'

export default function Pesquisa() {
    const [produtos, setProdutos] = useState(dadosBrutos)
    const parametros = useParams()

    useEffect(() => {
        const novosProdutos = produtos.filter(produto => produto.titulo.indexOf(parametros.pesquisa) !== -1)
        setProdutos(novosProdutos)
    }, [])

    return (
        <main className={styles.conteiner}>
            <span className={styles.conteiner__titulo}>
                <p>Busca por: "{parametros.pesquisa}"</p>
                <p>{produtos.length} Resultados</p>
            </span>
            <Produtos produtos={produtos} />
        </main>
    )
}