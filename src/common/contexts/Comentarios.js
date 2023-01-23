import { useUserContext } from "./User";

const { createContext, useState, useContext, useEffect } = require("react");

const ComentariosContext = createContext()
ComentariosContext.displayName = 'Comentarios'

export function ComentariosContextProvider({ children }) {
    const [comentarios, setComentarios] = useState([])

    useEffect(() => {
        setComentarios(JSON.parse(localStorage.getItem("comentarios")) || [])
    }, [])

    return (
        <ComentariosContext.Provider value={{ comentarios, setComentarios }}>
            {children}
        </ComentariosContext.Provider>
    )
}

export function useComentariosContext() {
    const { comentarios, setComentarios } = useContext(ComentariosContext)
    const { user } = useUserContext()

    function jaComentou(idproduto) {
        if (user) {
            const jaComentou = comentarios.some(
                comentario => comentario.usuario === user.usuario && comentario.id === idproduto
            )
            return jaComentou
        }
        return false
    }

    function fazerComentario(usuario, data, comentario, id, avaliacao) {
        const novosComentarios = JSON.parse(localStorage.getItem("comentarios")) || []
        const coment = {
            usuario,
            data,
            comentario,
            id,
            avaliacao
        }
        novosComentarios.push(coment)
        localStorage.setItem("comentarios", JSON.stringify(novosComentarios));
        setComentarios(prevComentarios => [...prevComentarios, coment])
    }

    function acharComentarioUsuario() {
        const comentarioUser = comentarios.filter(comentario => comentario.usuario === user.usuario)
        return comentarioUser
    }

    function mediaAvaliacao(idProduto) {
        const comentariosProduto = comentarios.filter(comentario => comentario.id === idProduto)

        if (comentariosProduto.length === 0) return 0.0

        const avaliacoes = comentariosProduto.reduce(
            (contador, comentario) =>
            //como a avaliacao armazenada é uma lista com objetos eu preciso iterar tbm essa avalicação
            //para pegar cada valor isolado
                comentario.avaliacao.reduce(
                    (quantidade, estrela) => estrela.valor + quantidade, 0
                ) + contador
            , 0)

        //para calcular a média é só dividir o total da avaliação pela quantidade de comentários
        return avaliacoes/comentariosProduto.length
    }

    return {
        comentarios,
        setComentarios,
        fazerComentario,
        jaComentou,
        mediaAvaliacao
    }
}