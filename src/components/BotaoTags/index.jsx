import styles from './Botao.module.scss'

export default function BotaoTags(props){

    return(
        <>
            <p onClick={e => props.filtraProdutos(props.tag)}>{props.tag}</p>
        </>
    )
}