import Image from "next/image";
import imgMobile1 from "../../assets/images/0001.png"
import imgMobile2 from "../../assets/images/0002.png"
import imgMobile3 from "../../assets/images/0003.png"
import imgMobile4 from "../../assets/images/0004.png"

import imgWeb1 from "../../assets/images/001.png"
import imgWeb2 from "../../assets/images/002.png"
import imgWeb3 from "../../assets/images/003.png"
import imgWeb4 from "../../assets/images/004.png"
import imgWeb5 from "../../assets/images/005.png"
import imgWeb6 from "../../assets/images/006.png"
import imgWeb7 from "../../assets/images/007.png"
import imgWeb8 from "../../assets/images/008.png"
import { Lilita_One  } from 'next/font/google'
import "./social.css"

const lilitaOne = Lilita_One({ 
    subsets: ['latin'],
    weight: '400',
    variable: '--font-lilitaOne'
   })

export default function Social(){
    return (
        <div id="social">
            <div className="content">
                <h3 className={lilitaOne.className}>Publicações do instagram</h3>
                <p>Todos os nossos clientes são tratados como rei e rainha, com a nossa colunaria artesanal.</p>
            </div>
            <div className="listra">
                <div className="imgs-web">
                    <Image
                        src={imgWeb1}
                        alt=""
                    />
                    <Image
                        src={imgWeb2}
                        alt=""
                    />
                    <Image
                        src={imgWeb3}
                        alt=""
                    />
                    <Image
                        src={imgWeb4}
                        alt=""
                    />
                    <Image
                        src={imgWeb5}
                        alt=""
                    />
                    <Image
                        src={imgWeb6}
                        alt=""
                    />
                    <Image
                        src={imgWeb7}
                        alt=""
                    />
                    <Image
                        src={imgWeb8}
                        alt=""
                    />
                </div>
                <div className="imgs">
                    <Image
                        src={imgMobile1}
                        alt=""
                    />
                    <Image
                        src={imgMobile2}
                        alt=""
                    />
                    <Image
                        src={imgMobile3}
                        alt=""
                    />
                    <Image
                        src={imgMobile4}
                        alt=""
                    />
                </div>
                <p className={lilitaOne.className}>• #empireburger • #empireburger • #empireburger • #empireburger • #empireburger • #empireburger • #empireburger • #empireburger • #empireburger </p>
            </div>
        </div>
    )
}