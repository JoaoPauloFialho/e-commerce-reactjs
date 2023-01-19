import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './BarraMenuCategoria.module.scss'
import setaBaixo from './setaparabaixo.png'

export default function BarraMenuCategoria(props) {
    const [mostrar, setMostrar] = useState(false)
    const [tamanhoMenu, setTamanhoMenu] = useState()
    const localizacao = useLocation()

    useEffect(() =>{
        if(props.children === "Computadores") setTamanhoMenu("8.8rem")
        if(props.children === "Hardware") setTamanhoMenu("7rem")
        if(props.children === "Eletronicos") setTamanhoMenu("7rem")
    })

    function aoClicar(){
        return setMostrar(prevMostrar => !prevMostrar)
    }
    
    return (
        <span className={styles.conteiner}>
            <p onClick={() => aoClicar()}  className={styles.nav}>
                {props.children}<img 
                src={setaBaixo} 
                className={`
                    ${styles.imagem_seta}
                    ${mostrar ? styles.imagem_seta_rotacionado : ''} 
                `}
                />
            </p>
            <nav style={{width: tamanhoMenu}} className={`${mostrar ? styles.menu_ativo : styles.menu_desativo}`}>
                {props.subCategorias.map(subCategoria => <Link to={subCategoria.toLowerCase()}>{subCategoria}</Link>)}
            </nav>
        </span>
    )
}
