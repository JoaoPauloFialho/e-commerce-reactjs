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

    return{
        comentarios,
        setComentarios
    }
}