import styles from './Frete.module.scss'

export default function Frete() {
    return (
        <div className={styles.frete}>
            <span className={styles.frete__botao}>
                <input name='cep' type='text' required pattern="\d{5}-\d{3}"/>
                <button>Ok</button>
            </span>
            <a className={styles.frete__nao_sei_meu_cep}
                href="https://buscacepinter.correios.com.br/app/endereco/index.php"
                target='_blank'
                rel='noreferrer'
                >Não sei meu CEP</a>
        </div>
    )
}