import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(false);

    return (
        <UserContext.Provider
            value={{ user, setUser }}
        >
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => {
    const { user, setUser } = useContext(UserContext)

    function cadastrar(usuario, senha) {
        const usuarios_cadastrados = JSON.parse(localStorage.getItem("usuarios_cadastrados")) || [];

        let user_dados = {
            usuario: usuario,
            senha: senha,
        }
        usuarios_cadastrados.push(user_dados);
        localStorage.setItem("usuarios_cadastrados", JSON.stringify(usuarios_cadastrados));
    }

    function fazLogin(usuario, senha) {
        const usuarios = JSON.parse(localStorage.getItem("usuarios_cadastrados"))
        if (usuarios) {
            for (let i = 0; i < usuarios.length; i++) {
                if (usuarios[i].usuario == usuario && usuarios[i].senha == senha) {
                    return setUser({
                        usuario: usuario
                    });
                }
            }
        }
        return false;
    }

    return {
        cadastrar,
        fazLogin,
        user
    }
}