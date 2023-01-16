import { useUserContext } from "./User";

const { createContext, useState, useContext, useEffect } = require("react");

const ComentariosContext = createContext()
ComentariosContext.displayName = 'Comentarios'

export function ComentariosContextProvider({children}){
    const [comentarios, setComentarios] = useState([])

    useEffect(()=>{
        setComentarios(JSON.parse(localStorage.getItem("comentarios")) || [])
    }, [])

    return(
        <ComentariosContext.Provider value={{comentarios, setComentarios}}>
            {children}
        </ComentariosContext.Provider>
    )
}

export function useComentariosContext(){
    const {comentarios, setComentarios} = useContext(ComentariosContext)
    const { user } = useUserContext()

    function jaComentou(idproduto){
        if(user){
            const jaComentou = comentarios.some(
                comentario => comentario.usuario === user.usuario && comentario.id === idproduto
                )
            return jaComentou
        }
        return false
    }

    function fazerComentario(usuario, data, comentario, id){
        const novosComentarios = JSON.parse(localStorage.getItem("comentarios")) || []
        const coment = {
            usuario,
            data,
            comentario,
            id
        }
        novosComentarios.push(coment)
        localStorage.setItem("comentarios", JSON.stringify(novosComentarios));
        setComentarios(prevComentarios => [...prevComentarios, coment])
    }

    function acharComentarioUsuario(){
        const comentarioUser = comentarios.filter(comentario => comentario.usuario === user.usuario)
        return comentarioUser
    }

    return{
        comentarios,
        setComentarios,
        fazerComentario,
        jaComentou
    }
}