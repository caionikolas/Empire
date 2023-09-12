import Image from "next/image"
import Logo from "../../assets/images/logo-color.svg"
import "./footer.css"
import { Lilita_One  } from 'next/font/google'
import Ifood from '../../assets/images/ifood-color.svg'
import Instagram from '../../assets/images/instagram-color.svg'

const lilitaOne = Lilita_One({ 
    subsets: ['latin'],
    weight: '400',
    variable: '--font-lilitaOne'
   })

export default function Footer() {
    return (
        <>
            <div id="footer">
                <div className="end">
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
                    <div className="menu-nav-web">
                        <a href="#start" className="active">Home</a>
                        <a href="#footer">Localização</a>
                        <a href="#menu">Cardápio</a>
                        <a href="#service">Sobre</a>
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
                            className='instagram'
                        />
                    </div>
                    <div className="menu-nav">
                        <a href="#start" className="active">Home</a>
                        <a href="#menu">Localização</a>
                        <a href="#menu">Cardápio</a>
                        <a href="#localization">Sobre</a>
                    </div>
                </div>
                <div className="copy">
                    <p>2022 © EmpireBurger. <span>Todos os direitos reservados.</span></p>
                </div>
            </div>
        </>
    )
}