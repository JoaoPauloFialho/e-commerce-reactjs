import { useParams } from 'react-router-dom'
import styles from './Pesquisa.module.scss'
import dadosBrutos from '../../components/assets/produtos.json'
import Produtos from '../../components/Produtos'
import { useEffect, useState } from 'react'

export default function Pesquisa() {
    const [produtos, setProdutos] = useState(dadosBrutos)
    const [termoValido, setTermoValido] = useState(true)

    //parametros de pesquisa já divididos em lista
    const parametros = useParams().pesquisa.toLowerCase()
    let parametrosLista = parametros.split(' ')
    const tags = [...new Set(...[dadosBrutos.map(dado => dado.tag)])]

    //função para juntar todas as palavras de uma string em uma só toda minúscula
    //eu vou usar isso aqui na parte de filtragem da pesquisa pelo nome
    function juntaMinusculo(string) {
        let concatenada = string.split(' ')
        concatenada = concatenada.join('').toLowerCase()
        return concatenada
    }

    //função para checar se algum dos parâmetros de pesquisa é uma tag
    function achaTag(lista) {
        if (lista)
            for (let i = 0; i < lista.length; i++) {
                if (lista[i] === "placa" && lista[i + 1] === "de" && lista[i + 2] === "video") return "placa de video"
                if (tags.some(tag => tag.toLowerCase() === lista[i].toLowerCase())) return lista[i]
            }
        return false
    }

    //função para realizar a procura de um termo em uma string
    function temTermo(string, termo) {
        if (string.indexOf(termo) !== -1) return true
        return false
    }

    useEffect(() => {
        const tag = achaTag(parametrosLista)
        let termos = parametrosLista
        let novosProdutos = dadosBrutos
        let filtragemAnterior

        //se existir alguma tag nos parametros de pesquisa eu filtro os produtos de acordo com a tag
        if (tag) {
            novosProdutos = produtos.filter(produto => produto.tag.toLowerCase() === tag.toLowerCase())
        }

        //faz um busca com todos os termos
        for (let termo of termos) {
            filtragemAnterior = novosProdutos

            if (termo !== tag) {
                novosProdutos = novosProdutos.filter(
                    produto => {
                        if (
                            temTermo(juntaMinusculo(produto.titulo), termo) || produto.tag.toLowerCase() === tag
                        ) return true
                        setTermoValido(prevTermo => !prevTermo)
                    }
                )
            }
            
            //se o novosProdutos tiver tamanho 0 e a filtragem anterior não 
            //significa que teve um erro na filtragem então eu só faço o novosProdutos receberem o valor
            //de filtragemAnterior
            if (novosProdutos.length === 0 && filtragemAnterior.length !== 0) {
                novosProdutos = filtragemAnterior
                break
            }
        }
        setProdutos(novosProdutos)
    }, [])

    return (
        <main className={styles.conteiner}>
            <span className={styles.conteiner__titulo}>
                <p>Busca por: "{parametros}"</p>
                <p>{produtos.length} Resultados</p>
            </span>
            {produtos.length > 0 ?
                <Produtos produtos={produtos} /> :
                <h3 className={styles.sem_produtos}>Nenhum produto encontrado</h3>
            }
        </main>
    )
}