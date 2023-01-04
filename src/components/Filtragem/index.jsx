
import produtos from '../assets/produtos.json'
import Produtos from '../Produtos/index.jsx'

export default function Filtragem(props){
    const cards = produtos.filter(produto => produto.tag === props.tag)


    return(
        <Produtos produtos={cards} />
    )
}