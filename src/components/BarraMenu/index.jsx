import { Component, useEffect, useState } from 'react';
import styles from './BarraMenu.module.scss';
import lupa from './lupa.png';
import menu_icone from './menu.png';
import Menu from './Menu';
import { Link, useLocation } from 'react-router-dom';
import BarraMenuCategoria from './BarraMenuCategoria';

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
                <div className={styles.pesquisa}>
                    <input type='text' className={styles.pesquisa_texto} placeholder='Pesquisar Produtos' />
                    <img className={styles.imagem_lupa} src={lupa} alt='lupa de pesquisa' />
                </div>
            </section>
            {menu && <Menu />}
        </>
    )
}
