import styles from './LoginPage.module.scss'
import Login from '../../components/Login'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
    const navegar = useNavigate()

    return (

        <>
            <Login redirect={true}/>
        </>
    )
}