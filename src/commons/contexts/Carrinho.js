import precoStringParaFloat from '../../commons/functions/Converte/precoStringParaFloat'
const { createContext, useState, useContext, useEffect } = require("react");

export const CarrinhoContext = createContext()
CarrinhoContext.displayName = "carrinho"

export function CarrinhoContextProvider({ children }) {
    const [carrinho, setCarrinho] = useState([])
    const [total, setTotal] = useState(0)
    const [quantidade, setQuantidade] = useState(0)

    return (
        <CarrinhoContext.Provider value={{ carrinho, setCarrinho, total, setTotal, quantidade, setQuantidade }}>
            {children}
        </CarrinhoContext.Provider>
    )
}

export const useCarrinhoContext = () => {
    const { carrinho, setCarrinho, total, setTotal, quantidade, setQuantidade } = useContext(CarrinhoContext)

    function adicionarProdutoNoCarrinho(produtoNovo) {

        //checa se o produto já existe no carrinho
        const temNoCarrinho = carrinho.some(produto => produto.id === produtoNovo.id)

        //se ele não existir eu uso a notação ponto para adicionar um novo valor ao objeto e adiciono ele
        if (!temNoCarrinho) {
            produtoNovo.quantidade = 1
            return setCarrinho(prevCarrinho => [...prevCarrinho, produtoNovo])
        }
        //se existir eu mapeio um novo array adicionando mais 1 no valor quantidade do produto que eu quero
        //adicionar e depois dou um setCarrinho com o novo carrinho
        else {
            mudarQuantidade(produtoNovo.id, 1)
        }
    }

    function removerProdutoDoCarrinho(produtoRemover) {
        if (produtoRemover.quantidade === 1) {
            setCarrinho([...carrinho.filter(produto => produto.id !== produtoRemover.id)])
        } else {
            mudarQuantidade(produtoRemover.id, -1)
        }
    }

    function mudarQuantidade(id, qnt) {
        setCarrinho([...carrinho.map(produto => {
            if (produto.id === id) produto.quantidade += qnt
            return produto
        })])
    }

    useEffect(() => {
        const precoTotal = carrinho.reduce((contador, produto) => contador + (produto.preco * produto.quantidade), 0);
        console.log(precoTotal)
        setTotal(precoTotal)
    }, [carrinho, setTotal])

    return {
        carrinho,
        setCarrinho,
        adicionarProdutoNoCarrinho,
        removerProdutoDoCarrinho,
        total
    }
}