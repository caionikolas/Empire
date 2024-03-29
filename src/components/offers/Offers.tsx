import "./offers.css"
import Image from "next/image"
import Fries from "../../assets/images/french-fries.png"
import iceCream from "../../assets/images/ice-cream.png"
import { Lilita_One  } from 'next/font/google'

const lilitaOne = Lilita_One({ 
    subsets: ['latin'],
    weight: '400',
    variable: '--font-lilitaOne'
   })

export default function Offers(){

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
            <div id="offers">
                <h2 className={lilitaOne.className}>Ofertas especiais</h2>
                <p>Aproveite todas as nossas ofertas, fique de olho porque sempre estamos mudando o nosso cardapio.</p>
                <div className="lanches ">
                    <div className="lanche">
                        <div className="img-lanche"></div>
                        <div className="left-title">
                            <h3 className={lilitaOne.className}>{Lanches[1].nome}</h3>
                            <p>{Lanches[1].peso}</p>
                        </div>
                        <div className="right-title">
                            <p> Apenas <br /> <strong className={lilitaOne.className}>Hoje</strong></p>
                        </div>
                    </div>
                    
                    <div className="lanche">
                        <div className="img-lanche2">
                            <Image 
                                src={Fries}
                                alt="Batata Frita"
                            />

                            <div className="left-title">
                                <h3 className={lilitaOne.className}>{Lanches[2].nome}</h3>
                                <p>{Lanches[2].peso}</p>
                            </div>
                        </div>
                        <div className="img-lanche3">
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
                </div>
                
            </div>
        </>
    )
}
