import Image from "next/image"
import Logo from "../../assets/images/logo.svg"
import "./footer.css"
import { lilitaOne } from "@/app/layout"

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
            </div>
        </>
    )
}