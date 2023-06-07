import "./menu.css"
import Image from "next/image"
import Burger from "../../assets/images/burguer.png"
import Fries from "../../assets/images/french-fries.png"
import iceCream from "../../assets/images/ice-cream.png"
import { lilitaOne } from "@/app/layout"

export default function Menu(){
    const lanches = {
        1: {
            nome: "Burger Prime+Batata",
            peso: "250kg"
        },
        2: {
            nome: "Batata",
            peso: "150kg"
        },
        3: {
            nome: "Sorvete",
            peso: "50kg"
        }
    }

    return (
        <>
            <div id="menu">
                <h2 className={lilitaOne.className}>Ofertas especiais</h2>
                <p>Aproveite todas as nossas ofertas, fique de olho porque sempre estamos mudando o nosso cardapio.</p>
                <div className="lanche">
                    <div className="img-lanche">
                        <Image 
                            src={Burger}
                            alt="Burguer"
                        />
                    </div>
                    <div className="left-title">
                        <h3 className={lilitaOne.className}>Burger Prime+Batata</h3>
                        <p>250kg</p>
                    </div>
                    <div className="right-title">
                        <p> Apenas <br /> <strong className={lilitaOne.className}>Hoje</strong></p>
                    </div>
                </div>
                
                <div className="lanche">
                    <div className="img-lanche">
                        <Image 
                            src={Fries}
                            alt="Burguer"
                        />
                    </div>
                    <div className="left-title">
                        <h3 className={lilitaOne.className}>Batata</h3>
                        <p>150kg</p>
                    </div>
                </div>
                <div className="lanche">
                    <div className="img-lanche">
                        <Image 
                            src={iceCream}
                            alt="Burguer"
                        />
                    </div>
                    <div className="left-title">
                        <h3 className={lilitaOne.className}>Sorvete</h3>
                        <p>50kg</p>
                    </div>
                </div>
            </div>
        </>
    )
}