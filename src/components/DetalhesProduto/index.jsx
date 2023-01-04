import styles from './DetalhesProduto.module.scss'
import { Link, useParams } from 'react-router-dom'
import logoPix from './logo_pix.png'
import logoLoja from './logo_icon.png'
import FreteGarantia from '../FreteGarantia';

export default function DetalhesProduto(props) {
    const produtoId = useParams();
    return (
        <section className={styles.produto_pagina}>
            <img src='/assets/imagens/produtos/pc_gamer1.png' alt='imagem produto'></img>
            <span className={styles.produto_pagina__informacoes}>
                <h1 className={styles.produto_pagina__informacoes__titulo}>Intel i3-10100F, GeForce GTX 1630 4GB, 8GB DDR4, SSD 240GB</h1>
                <p className={styles.produto_pagina__informacoes__codigo}>Código Produto {produtoId.id}</p>
                <p className={styles.produto_pagina__informacoes__preco}>R$ 5.599,00</p>
                <p className={styles.produto_pagina__informacoes__parcelas}>ou 12x de R$ {parseInt(5599 / 12)}</p>
                <span className={styles.produto_pagina__informacoes__pix}>
                    <img src={logoPix} alt="logo pix" />
                    <p>R$ {parseInt(5599 - (5599 * 0.10))} pagando com PIX {`(-10%)`}</p>
                </span>
                <Link to={"/carrinho"} className={styles.produto_pagina__informacoes__botao_compra}>
                    <p style={{ color: 'white' }}>Comprar</p>
                    <img src={logoLoja} alt="imagem carrinho" />
                </Link>
                <FreteGarantia />
            </span>
        </section>
    )
}