import { Link } from "react-router-dom";
import { useUserContext } from "../../../common/contexts/User";
import styles from '.././BarraMenu.module.scss'
import menuLogo from '.././logo_icon.png';

export default function Menu() {
    const { user, deslogar } = useUserContext()
    return (
        <>
            <div className={styles.menu_lateral} id='menu'>
                <img className={styles.menu_lateral_logo} src={menuLogo} alt='logo do menu' />
                <Link to={"produtos"}><p>Ofertas</p></Link>
                {user ? <p onClick={() => deslogar()} className={styles.sair}>Sair</p> : ''}
            </div>
        </>
    )
}