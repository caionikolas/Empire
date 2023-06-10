'use client';

import "./menu.css"
import Image from "next/image"
import Burger from "../../assets/images/burguer.png"
import Fries from "../../assets/images/french-fries.png"
import iceCream from "../../assets/images/ice-cream.png"
import { lilitaOne } from "@/app/layout"

export default function Menu(){
    const Lanches = {
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
                        <h3 className={lilitaOne.className}>{Lanches[1].nome}</h3>
                        <p>{Lanches[1].peso}</p>
                    </div>
                    <div className="right-title">
                        <p> Apenas <br /> <strong className={lilitaOne.className}>Hoje</strong></p>
                    </div>
                </div>
                
                <div className="lanche">
<<<<<<< HEAD:Empire/src/components/menu/Menu.tsx
                    <Image 
                        src={Fries}
                        alt="Batata Frita"
                    />
=======
                    <div className="img-lanche">
                        <Image 
                            src={Fries}
                            alt="Burguer"
                        />
                    </div>
>>>>>>> 8a1b8dc4a6d2ac4bf29d0a52f3f3909a42a7fbb4:src/components/menu/Menu.tsx
                    <div className="left-title">
                        <h3 className={lilitaOne.className}>{Lanches[2].nome}</h3>
                        <p>{Lanches[2].peso}</p>
                    </div>
                </div>

                <div className="lanche">
<<<<<<< HEAD:Empire/src/components/menu/Menu.tsx
                    <Image 
                        src={iceCream}
                        alt="Sorvete"
                    />
=======
                    <div className="img-lanche">
                        <Image 
                            src={iceCream}
                            alt="Burguer"
                        />
                    </div>
>>>>>>> 8a1b8dc4a6d2ac4bf29d0a52f3f3909a42a7fbb4:src/components/menu/Menu.tsx
                    <div className="left-title">
                        <h3 className={lilitaOne.className}>{Lanches[3].nome}</h3>
                        <p>{Lanches[3].peso}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
