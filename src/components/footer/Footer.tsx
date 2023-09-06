import Image from "next/image"
import Logo from "../../assets/images/logo.svg"
import "./footer.css"
import { lilitaOne } from "@/app/layout"
import Ifood from '../../assets/images/ifood.svg'
import Instagram from '../../assets/images/instagram.svg'
import Barra from '../../assets/images/barra.svg'
import Wpp from '../../assets/images/whatsapp.svg'

export default function Footer() {
    return (
        <>
            <div id="footer">
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
                <div className="menu-nav">
                    <a href="#start" className="active">Home</a>
                    <a href="#menu">Localização</a>
                    <a href="#menu">Cardápio</a>
                    <a href="#localization">Sobre</a>
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
                </div>
            </div>
        </>
    )
}