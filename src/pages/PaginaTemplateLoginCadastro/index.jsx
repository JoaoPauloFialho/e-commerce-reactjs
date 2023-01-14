import { Outlet } from "react-router-dom";
import CabecalhoLoginCadastro from "../../components/CabecalhoLoginCadastro";

export default function PaginaTemplateLoginCadastro(){
    return(
        <main>
            <CabecalhoLoginCadastro/>
            <Outlet/>
        </main>
    )
}