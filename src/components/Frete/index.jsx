import { useEffect, useState } from 'react'
import { useCarrinhoContext } from '../../commons/contexts/Carrinho'
import styles from './Frete.module.scss'

export default function Frete() {
    const [cep, setCep] = useState()
    const { frete, mudaFrete, setFrete } = useCarrinhoContext()

    function aoMudarCep(event) {
        setCep(event.target.value)
    }

    useEffect(() => setFrete(false), [])


    function consultaCep(cep) {
        let url = `https://viacep.com.br/ws/${cep}/json/`
        fetch(url).then(response => response.json())
            .then(dados => mudaFrete(dados.cep))
            .catch(erro => {
                setFrete(0)
                return alert("Digite um CEP válido")
            })
    }

    return (
        <div className={styles.frete}>
            <span className={styles.frete__botao}>
                <input onChange={event => aoMudarCep(event)} name='cep' type='number' />
                <button onClick={() => consultaCep(cep)}>Ok</button>
            </span>
            <a className={styles.frete__nao_sei_meu_cep}
                href="https://buscacepinter.correios.com.br/app/endereco/index.php"
                target='_blank'
                rel='noreferrer'
            >Não sei meu CEP</a>
            {frete > 0 ?
                <p className={styles.frete__valor}>Valor do frete R$ {frete}</p> :
                ''
            }
        </div>
    )
}