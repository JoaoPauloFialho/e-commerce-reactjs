import { Outlet } from "react-router-dom";
import BarraMenu from "../../components/BarraMenu";
import Cabecalho from "../../components/Cabecalho";

export default function PaginaTemplate(){
    return(
        <main>
            <Cabecalho/>
            <BarraMenu/>
            <Outlet/>
        </main>
    )
}