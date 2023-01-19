import styles from './Filtragem.module.scss'
import produtosBrutos from '../assets/produtos.json'
import { useEffect, useState } from 'react'
import FiltragemComputador from './FiltragemComputador'
import FiltragemHardware from './FiltragemHardware'
import FiltragemNotebook from './FiltragemNotebook'
import FiltragemPlacaDeVideo from './FiltragemPlacaDeVideo'
import FiltragemProcessador from './FiltragemProcessadores'


export default function Filtragem(props) {
    const produtosPage = produtosBrutos.filter(produto => produto.tag === props.tag)
    const [produtos, setProdutos] = useState(produtosPage)

    const [filtragem, setFiltragem] = useState()

    useEffect(() =>{
        if(props.tag === "Notebook") return setFiltragem(<FiltragemNotebook produtos={produtos}/>)
        if(props.tag === "Computador") return setFiltragem(<FiltragemComputador produtos={produtos}/>)
        if(props.tag === "Hardware") return setFiltragem(<FiltragemHardware produtos={produtos}/>)
        if(props.tag === "Placa de Video") return setFiltragem(<FiltragemPlacaDeVideo produtos={produtos}/>)
        if(props.tag === "Processador") return setFiltragem(<FiltragemProcessador produtos={produtos}/>)
    }, [setFiltragem, produtos])
    

    return (
        <section className={styles.filtragem_produtos}>
            {filtragem}
        </section>
    )
}