import { Component } from 'react';
import styles from './Banner.module.scss'
import banner from './banner_home.webp'

export default class Banner extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <span className={styles.banner} >
                    <a href='/'>
                        <img src={banner} alt='banner' />
                    </a>
                </span>
            </>
        )
    }
}