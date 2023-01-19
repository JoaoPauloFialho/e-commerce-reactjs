import { Component, useEffect, useState } from 'react';
import styles from './BarraMenu.module.scss';
import menu_icone from './menu.png';
import Menu from './Menu';
import { Link, useLocation } from 'react-router-dom';
import BarraMenuCategoria from './BarraMenuCategoria';
import Pesquisa from './Pesquisa';

export default function BarraMenu() {
    const [menu, setMenu] = useState()
    const localizacao = useLocation()

    function mostrarMenu(e) {
        setMenu(prevMenu => !prevMenu)
    }

    return (
        <>
            <section className={styles.barra_menu}>
                <img onClick={e => mostrarMenu(e)} className={styles.menu} src={menu_icone} alt="icone de menu" />
                <Link className={styles.link_ativo}
                    to={"ofertas"}>
                    Ofertas
                </Link>
                <BarraMenuCategoria
                    subCategorias={["Notebooks", "Desktops"]}
                >
                    Computadores
                </BarraMenuCategoria>                
                <BarraMenuCategoria
                    subCategorias={["Processadores", "Placas de video"]}
                >
                    Hardware
                </BarraMenuCategoria>
                <BarraMenuCategoria
                    subCategorias={["Consoles", "Acessórios"]}
                >
                    Eletronicos
                </BarraMenuCategoria>
                <Pesquisa/>
            </section>
            {menu && <Menu />}
        </>
    )
}
