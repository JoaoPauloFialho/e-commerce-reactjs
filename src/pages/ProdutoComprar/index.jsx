import { Link, useNavigate, useParams } from 'react-router-dom'
import styles from './ProdutoCompra.module.scss'
import logoPix from './logo_pix.png'
import logoLoja from './logo_icon.png'
import Comentarios from '../../components/Comentarios'
import FreteGarantia from '../../components/FreteGarantia';
import ProdutosSemelhantes from '../../components/ProdutosSemelhantes';
import produtos from '../../components/assets/produtos.json'
import precoStringParaFloat from '../../common/functions/Converte/precoStringParaFloat'
import conversaoPreco from '../../common/functions/Converte/conversaoPreco';
import { useCarrinhoContext } from '../../common/contexts/Carrinho';
import { useEffect } from 'react';


export default function ProdutoComprar() {
    const produtoId = useParams();
    const produtoPag = produtos.find(produto => produto.id === produtoId['id'])
    const precoFloat = precoStringParaFloat(produtoPag.preco)
    const nav = useNavigate()
    const { adicionarProdutoNoCarrinho } = useCarrinhoContext()

    //para que a página seja scrollada para o topo sempre que a página for carregada
    useEffect(() => {
        window.scroll(0, 100)
    }, [])

    function aoClicar(){
        nav('/carrinho')
        adicionarProdutoNoCarrinho(produtoPag)
    }

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
                        R$ {conversaoPreco((produtoPag.preco.toFixed(2)))}
                    </p>
                    <p className={styles.produto_pagina__informacoes__parcelas}>
                        ou 12x de R$ {
                            conversaoPreco((precoFloat / 12).toFixed(2))
                        }
                    </p>
                    <span className={styles.produto_pagina__informacoes__pix}>
                        <img src={logoPix} alt="logo pix" />
                        <p>
                            R$ {conversaoPreco((precoFloat - (precoFloat * 0.10)).toFixed(2))} pagando com PIX {`(-10%)`}
                        </p>
                    </span>
                    <span
                        onClick={() => aoClicar()}
                        className={styles.produto_pagina__informacoes__botao_compra}
                    >
                        <p style={{ color: 'white' }}>Comprar</p>
                        <img src={logoLoja} alt="imagem carrinho" />
                    </span>
                    <FreteGarantia />
                </span>
            </section>

            <section className={styles.produto_comentarios}>
                <Comentarios />
            </section>

            <section className={styles.semelhantes}>
                <h1>Produtos semelhantes</h1>
                <ProdutosSemelhantes tag={produtoPag.tag} id={produtoPag.id} />
            </section>
        </>
    )
}