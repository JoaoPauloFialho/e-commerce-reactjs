import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext({});
UserContext.displayName = 'usuario'

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(false);
    const [usuarios, setUsuarios] = useState(JSON.parse(localStorage.getItem("usuarios_cadastrados")));

    useEffect(() => {
        setUsuarios(JSON.parse(localStorage.getItem("usuarios_cadastrados")))
    }, [])

    return (
        <UserContext.Provider value={{ user, setUser, usuarios, setUsuarios }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => {
    const { user, setUser, usuarios, setUsuarios } = useContext(UserContext)

    function cadastrar(usuario, senha) {
        const usuarios_cadastrados = JSON.parse(localStorage.getItem("usuarios_cadastrados")) || [];

        let user_dados = {
            usuario: usuario,
            senha: senha,
        }
        usuarios_cadastrados.push(user_dados);
        localStorage.setItem("usuarios_cadastrados", JSON.stringify(usuarios_cadastrados));
    }

    function checaJaCadastrado(email) {
        let usuarios = JSON.parse(localStorage.getItem("usuarios_cadastrados"));
        if (usuarios) {
            for (let i = 0; i < usuarios.length; i++) {
                if (usuarios[i].usuario === email) {
                    return true;
                }
            }
        }
        return false;
    }

    function limpaStorage() {
        localStorage.clear()
    }


    function loginCorreto(email, senha) {
        const valido = usuarios.some(usuario => usuario.usuario === email && usuario.senha === senha)
        if(valido) return true
        return false
    }

    function fazLogin(email, senha){
        setUser({
            usuario:email,
            senha
        })
    }

    return {
        cadastrar,
        user,
        checaJaCadastrado,
        limpaStorage,
        usuarios,
        loginCorreto,
        fazLogin
    }
}