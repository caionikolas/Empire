import Image from 'next/image'
import Logo from '../../assets/images/logo.svg'
import Menu from '../../assets/images/menu.svg'
import './header.css'
import { Lato, Lilita_One  } from 'next/font/google'

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