import { Component } from 'react';
import styles from './Rodape.module.scss'
import logo from './logo_icon.png'
import facebook from './facebook.svg'
import instagram from './instagram.svg'
import twitter from './twitter.svg'

export default class Rodape extends Component{
    render(){
        return(
            <>
                <section className={styles.rodape}>
                    <img  src={logo} alt="logo"/>
                    <span className={styles.rodape__redes_sociais}>
                        <img src={facebook} alt='icone do facebook'/>
                        <img src={instagram} alt='icone do instagram'/>
                        <img src={twitter} alt='icone do twitter'/>
                    </span>
                </section>
            </>
        )
    }
}