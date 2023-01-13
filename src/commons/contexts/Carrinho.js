import { PagamentoContext, usePagamentoContext } from "./Pagamento";

const { createContext, useState, useContext, useEffect } = require("react");

export const CarrinhoContext = createContext()
CarrinhoContext.displayName = "carrinho"

export function CarrinhoContextProvider({ children }) {
    const [carrinho, setCarrinho] = useState([])
    const [subTotal, setSubTotal] = useState(0)
    const [quantidade, setQuantidade] = useState(0)
    const [frete, setFrete] = useState(0)

    return (
        <CarrinhoContext.Provider value={{
            carrinho,
            setCarrinho,
            subTotal,
            setSubTotal,
            quantidade,
            setQuantidade,
            frete,
            setFrete
        }}>
            {children}
        </CarrinhoContext.Provider>
    )
}

export const useCarrinhoContext = () => {
    const {
        carrinho,
        setCarrinho,
        subTotal,
        setSubTotal,
        quantidade,
        setQuantidade,
        frete,
        setFrete
    } = useContext(CarrinhoContext)

    const{
        tipoPagamento,
    } = usePagamentoContext()


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
        const { novoTotal, novaQuantidade } = carrinho.reduce((contador, produto) => ({
            novoTotal: contador.novoTotal + (produto.preco * produto.quantidade),
            novaQuantidade: contador.novaQuantidade + produto.quantidade
        })
            , {
                novoTotal: 0,
                novaQuantidade: 0
            })
        setSubTotal(novoTotal * tipoPagamento.juro)
        setQuantidade(novaQuantidade)
    }, [carrinho, setSubTotal, setQuantidade, tipoPagamento])

    //seta o frete de acordo com a região do CEP (primeiro dígito do CEP)
    function mudaFrete(codCep) {
        const fretes = [40, 40, 35, 50, 60, 20, 10, 60, 50, 100]
        let codigo = codCep[0]
        codigo = parseInt(codigo)
        return setFrete(fretes[codigo])
    }

    function compra(){
        setCarrinho([])
        setFrete(false)
    }

    return {
        carrinho,
        setCarrinho,
        adicionarProdutoNoCarrinho,
        removerProdutoDoCarrinho,
        subTotal,
        frete,
        mudaFrete,
        quantidade,
        setFrete,
        compra
    }
}