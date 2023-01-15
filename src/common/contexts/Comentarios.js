import { useUserContext } from "./User";

const { createContext, useState, useContext } = require("react");

const ComentariosContext = createContext()
ComentariosContext.displayName = 'Comentarios'

export function ComentariosContextProvider({children}){
    const [comentarios, setComentarios] = useState([])

    return(
        <ComentariosContext.Provider value={{comentarios, setComentarios}}>
            {children}
        </ComentariosContext.Provider>
    )
}

export function useComentariosContext(){
    const {comentarios, setComentarios} = useContext(ComentariosContext)
    const { user } = useUserContext()

    function jaComentou(){
        if(user){
            const jaComentou = comentarios.some(comentario => comentario.usuario === user.usuario)
            return jaComentou
        }
        return false
    }

    function fazerComentario(usuario, data, comentario){
        
        const coment = {
            usuario:usuario,
            data:data,
            comentario:comentario
        }
        return setComentarios(prevComentarios => [...prevComentarios, coment])
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