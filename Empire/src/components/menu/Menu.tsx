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
                    <Image 
                        src={Burger}
                        alt="Burguer"
                    />
                    <div className="left-title">
                        <h3 className={lilitaOne.className}>{Lanches[1].nome}</h3>
                        <p>{Lanches[1].peso}</p>
                    </div>
                    <div className="right-title">
                        <p> Apenas <br /> <strong className={lilitaOne.className}>Hoje</strong></p>
                    </div>
                </div>
                
                <div className="lanche">
                    <Image 
                        src={Fries}
                        alt="Batata Frita"
                    />
                    <div className="left-title">
                        <h3 className={lilitaOne.className}>{Lanches[2].nome}</h3>
                        <p>{Lanches[2].peso}</p>
                    </div>
                </div>

                <div className="lanche">
                    <Image 
                        src={iceCream}
                        alt="Sorvete"
                    />
                    <div className="left-title">
                        <h3 className={lilitaOne.className}>{Lanches[3].nome}</h3>
                        <p>{Lanches[3].peso}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
