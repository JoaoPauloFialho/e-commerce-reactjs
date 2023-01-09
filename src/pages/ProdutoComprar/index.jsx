import { Link, useParams } from 'react-router-dom'
import styles from './ProdutoCompra.module.scss'
import logoPix from './logo_pix.png'
import logoLoja from './logo_icon.png'
import FreteGarantia from '../../components/FreteGarantia';
import Filtragem from '../../components/Filtragem';
import produtos from '../../components/assets/produtos.json'
import precoStringParaFloat from '../../commons/functions/Converte/precoStringParaFloat'
import conversaoPreco from '../../commons/functions/Converte/conversaoPreco';
import { useCarrinhoContext } from '../../commons/contexts/Carrinho';
import { useEffect } from 'react';


export default function ProdutoComprar() {
    const produtoId = useParams();
    const produtoPag = produtos.find(produto => produto.id === produtoId['id'])
    const precoFloat = precoStringParaFloat(produtoPag.preco)
    const { adicionarProdutoNoCarrinho } = useCarrinhoContext()

    //para que a página seja scrollada para o topo sempre que a página for recarregada
    useEffect(() => {
        window.scroll(0, 100)
    }, [])

    return (
        <>
            <section className={styles.produto_pagina}>
                <img src={produtoPag.imagem} alt='imagem produto'></img>
                <span className={styles.produto_pagina__informacoes}>
                    <h1 className={styles.produto_pagina__informacoes__titulo}>{produtoPag.titulo}</h1>
                    <p className={styles.produto_pagina__informacoes__codigo}>
                        Código Produto {produtoPag.id}
                    </p>
                    <p className={styles.produto_pagina__informacoes__preco}>
                        R$ {produtoPag.preco}
                    </p>
                    <p className={styles.produto_pagina__informacoes__parcelas}>
                        ou 12x de R$ {
                            conversaoPreco((precoFloat / 12).toFixed(2))
                        }
                    </p>
                    <span className={styles.produto_pagina__informacoes__pix}>
                        <img src={logoPix} alt="logo pix" />
                        <p>
                            R$ {(precoFloat - (precoFloat * 0.10)).toFixed(2)} pagando com PIX {`(-10%)`}
                        </p>
                    </span>
                    <Link
                        to={'/carrinho'}
                        onClick={() => adicionarProdutoNoCarrinho(produtoPag)}
                        className={styles.produto_pagina__informacoes__botao_compra}
                    >
                        <p style={{ color: 'white' }}>Comprar</p>
                        <img src={logoLoja} alt="imagem carrinho" />
                    </Link>
                    <FreteGarantia />
                </span>
            </section>
            <section className={styles.semelhantes}>
                <h1>Produtos semelhantes</h1>
                <Filtragem tag={produtoPag.tag} id={produtoPag.id} />
            </section>
        </>
    )
}