import styles from './Garantia.module.scss'
import icone_garantia from './garantia.png'

export default function Garantia() {

    const garantias = [
        {
            id: 1,
            nome: 'Nenhuma',
            parcelas: '',
        },
        {
            id: 2,
            nome: '12 meses de garantia estendida',
            parcelas: 'em 12x R$ 42,00 | Total R$ 296,45'
        },
        {
            id: 3,
            nome: '24 meses de garantia estendida',
            parcelas: 'em 12x R$ 42,00 | Total R$ 503,96'
        },
        {
            id: 4,
            nome: '12 meses garantia de quebra',
            parcelas: 'em 12x R$ 49,83 | Total R$ 597,95',
        }
    ]

    return (
        <>
            <div className={styles.garantias}>
                <span className={styles.garantias__titulo}>
                    <img src={icone_garantia} alt='icone garantia' />
                    <h1>Cobertura em todo território nacional</h1>
                </span>
                <span className={styles.garantias__texto}>
                    <p>Garantida estendida de até 2 meses</p>
                </span>
            </div>
        </>
    )
}