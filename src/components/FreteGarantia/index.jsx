import styles from './FreteGarantia.module.scss'
import iconeCaminhao from './caminhao_icone.png'
import iconeVerificado from './verificado_icone.png'
import { useState } from 'react'
import Frete from './Frete'
import Garantia from './Garantia'

export default function FreteGarantia() {

    const [freteAtivo, setFreteAtivo] = useState(true)
    const [garantiaAtivo, setGarantiaAtivo] = useState(false)

    const ativaDesativaFrete = () => {
        if (!freteAtivo) {
            setFreteAtivo(true)
            setGarantiaAtivo(false)
        }
    }


    const ativaDesativaGarantia = () => {
        if (!garantiaAtivo) {
            setGarantiaAtivo(true)
            setFreteAtivo(false)
        }
    }

    return (
        <section className={styles.frete_garantia}>
            <nav className={styles.frete_garantia__nav}>
                <div onClick={() => ativaDesativaFrete()} className={`
                    ${styles.frete_garantia__nav__frete}
                    ${freteAtivo ? styles.frete_garantia__nav__frete_ativo : ""}
                `}>
                    <span className={styles.frete_garantia__nav__frete__titulo}>
                        <img src={iconeCaminhao} alt='icone caminhao frete' />
                        <h1>Calcular o frete</h1>
                    </span>
                </div>
                <div onClick={() => ativaDesativaGarantia()} className={`
                    ${styles.frete_garantia__nav__garantia}
                    ${garantiaAtivo ? styles.frete_garantia__nav__garantia_ativo : ""}
                `}>
                    <span className={styles.frete_garantia__nav__garantia__titulo}>
                        <img src={iconeVerificado} />
                        <h1>Garantia</h1>
                    </span>
                </div>
            </nav>
            <div>
                {freteAtivo ? <Frete /> : <Garantia />}
            </div>
        </section>
    )
}