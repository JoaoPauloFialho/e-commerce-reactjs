import { Component } from 'react';
import styles from './BarraMenu.module.scss';
import lupa from './lupa.png';
import menu from './menu.png';
import Menu from './Menu';

export default class BarraMenu extends Component{

    state = {
        mostrar_menu : false,
    }
    
    constructor(props){
        super(props)
        this.showMenu = this.showMenu.bind(this)
    }

    showMenu(e){
        if(!this.state.mostrar_menu){
            this.setState({mostrar_menu : true})
            return
        }
        this.setState({mostrar_menu : false})
    }

    render(){
        return(
            <>
                <section className={styles.barra_menu}>
                    <img onClick={e => this.showMenu(e)} className={styles.menu} src={menu} alt="icone de menu" />
                    <div className={styles.pesquisa}>
                        <input type='text' className={styles.pesquisa_texto} placeholder='Pesquisar Produtos'/>
                        <img  className={styles.imagem_lupa} src={lupa} alt='lupa de pesquisa'/>
                    </div>
                </section>
                {this.state.mostrar_menu && <Menu/>}
            </>
        )
    }
}