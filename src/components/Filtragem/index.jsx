import styles from './Filtragem.module.scss'
import produtosBrutos from '../assets/produtos.json'
import Produtos from '../Produtos'
import { useEffect, useState } from 'react'
import FiltragemComputador from './FiltragemComputador'
import FiltragemHardware from './FiltragemHardware'

export default function Filtragem(props) {
    const produtosPage = produtosBrutos.filter(produto => produto.tag === props.tag)
    const [produtos, setProdutos] = useState(produtosPage)

    const [filtragem, setFiltragem] = useState()

    useEffect(() =>{
        if(props.tag === "Computador") setFiltragem(<FiltragemComputador produtos={produtos}/>)
        if(props.tag === "Hardware") setFiltragem(<FiltragemHardware produtos={produtos}/>)
    }, [])
    

    return (
        <section className={styles.filtragem_produtos}>
            {filtragem}
        </section>
    )
}