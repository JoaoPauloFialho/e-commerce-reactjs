import { createContext, useContext, useState } from "react";

export const PagamentoContext = createContext()
PagamentoContext.displayName = 'Pagamento'

export const PagamentoContextProvider = ({children}) =>{
    const pagamentos = [
        {
            tipo: 'Boleto',
            id:0,
            juro:1
        },
        {
            tipo: 'Cartão',
            id:1,
            juro:1.1
        },
        {
            tipo: 'Crediário',
            id:2,
            juro:1.15
        }
    ]

    const [tipoPagamento, setTipoPagamento] = useState(pagamentos[0])

    return(
        <PagamentoContext.Provider value={{tipoPagamento, setTipoPagamento, pagamentos}}>
            {children}
        </PagamentoContext.Provider>
    )
}

export const usePagamentoContext = () =>{
    const {tipoPagamento, setTipoPagamento, pagamentos} = useContext(PagamentoContext)

    
    function mudaPagamento(event) {
        setTipoPagamento(pagamentos.filter(pagamento => pagamento.tipo === event.target.value)[0])
    }


    return{
        tipoPagamento,
        setTipoPagamento,
        pagamentos,
        mudaPagamento
    }
}