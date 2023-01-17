import styles from './BotaoFacaUmaAvaliacao.module.scss'

export default function BotaoFacaUmaAvaliacao({ cancelar, mudaBotao }) {
    return (
        <>

            {cancelar ?
                <button onClick={() => mudaBotao()} className={`${styles.botao} ${styles.cancelar}`}>Cancelar</button> :
                <button onClick={() => mudaBotao()} className={`${styles.botao} ${styles.login}`}>Faça uma Avaliação</button>
            }
        </>
    )
}
