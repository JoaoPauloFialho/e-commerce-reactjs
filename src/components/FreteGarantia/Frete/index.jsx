import styles from './Frete.module.scss'

export default function Frete() {
    return (
        <>
            <div className={styles.frete}>
                <input type='text' />
                <button>Ok</button>
            </div>
            <a className={styles.frete__nao_sei_meu_cep}
                href="https://buscacepinter.correios.com.br/app/endereco/index.php"
                target='_blank'>Não sei meu CEP</a>
        </>
    )
}