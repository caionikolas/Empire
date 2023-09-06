import Image from 'next/image'
import Logo from '../../assets/images/logo.svg'
import Ifood from '../../assets/images/ifood.svg'
import Instagram from '../../assets/images/instagram.svg'
import Barra from '../../assets/images/barra.svg'
import Wpp from '../../assets/images/whatsapp.svg'
import './header.css'
import { Lato, Lilita_One  } from 'next/font/google'
import MobileNav from '../mobileNav/mobile'

const lato = Lato({ 
  subsets: ['latin'],
  weight: ['100', '300', '400', '700' , '900'],
  variable: '--font-lato'
})

const lilitaOne = Lilita_One({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-lilitaOne'
 })

export default function Header() {
    return (
        <>
            <header className={lato.className}>
                <a href="#start">
                    <div className="logo">
                        <div className="img" >
                            <div className={lilitaOne.className}>
                                <Image 
                                    src={Logo}
                                    alt='logo Empire Burger'
                                />
                            </div>
                            
                        </div>
                        <h1>EMPIRE <span>BURGER</span></h1>
                    </div>
                </a>
                <nav className='menu-mobile'>
                    <MobileNav/>
                </nav>
                <div className="menu-nav">
                    <a href="#start" className="active">Home</a>
                    <a href="#menu">Promoção</a>
                    <a href="#menu">Cardápio</a>
                    <a href="#localization">Comentario</a>
                    <a href="#localization">Contato</a>
                </div>
                <div className="menu-icon">
                    <Image 
                        src={Ifood}
                        alt='icone do Ifood'
                        className='ifood'
                    />
                    <Image 
                        src={Instagram}
                        alt='icone do Instagram'
                    />
                    <Image 
                        src={Barra}
                        alt='icone do Ifood'
                    />
                    <div className="wpp">
                        <Image 
                            src={Wpp}
                            alt='icone do Instagram'
                        />
                        <p>Contato</p>
                    </div>
                </div>
            </header>
        </>   
    )
}