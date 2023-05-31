import Image from 'next/image'
import Logo from '../../assets/images/logo.svg'
import Menu from '../../assets/images/menu.svg'
import './header.css'
import { lilitaOne, lato } from '@/app/layout'

export default function Header() {
    return (
        <>
            <header className={lato.className}>
                <div className="logo">
                    <div className="img">
                        <Image 
                            src={Logo}
                            alt='logo Empire Burger'
                        />
                    </div>
                    <h1>EMPIRE <span>BURGER</span></h1>
                </div>
                <nav>
                    <Image 
                        src={Menu}
                        alt='icone de Menu'
                    />
                </nav>
            </header>
        </>   
    )
}