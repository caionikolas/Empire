import { Lilita_One  } from 'next/font/google'
import Image from 'next/image'
import wpp_mini from '../../assets/images/wpp.svg'
import moto from '../../assets/images/moto.svg'
import soverte from '../../assets/images/soverte.svg'
import ifood from '../../assets/images/ifood-.svg'

import "./delivery.css"

const lilitaOne = Lilita_One({ 
    subsets: ['latin'],
    weight: '400',
    variable: '--font-lilitaOne'
   })

export default function Delivery(){
    return (
        <div id="delivery">
            <div className="card-phone"></div>
            <h2 className={lilitaOne.className}>Nossas entregas</h2>
            <div className="card active">
                <div className="icon ">
                    <Image 
                        src={wpp_mini}
                        alt='icone whatsapp'
                    />
                </div>
                <div className="text-card">
                    <h5 className={lilitaOne.className}>Whatsapp</h5>
                    <p>Vamos direto ao ponto, sem perder tempo!</p>
                </div>
            </div>
            <div className="card">
                <div className="icon">
                    <Image 
                        src={moto}
                        alt='icone delivery'
                    />
                </div>
                <div className="text-card">
                    <h5 className={lilitaOne.className}>Entrega</h5>
                    <p>Entregamos menos de 45 minutos na porta da sua casa!</p>
                </div>
            </div>
            <div className="card">
                <div className="icon">
                    <Image 
                        src={soverte}
                        alt='icone soverte'
                    />
                </div>
                <div className="text-card">
                    <h5 className={lilitaOne.className}>Sobremesa</h5>
                    <p>Pedidos assima de 100 reais, ganham brindes.</p>
                </div>
            </div>
            <div className="card">
                <div className="icon">
                    <Image 
                        src={ifood}
                        alt='icone ifood'
                    />
                </div>
                <div className="text-card">
                    <h5 className={lilitaOne.className}>iFood</h5>
                    <p>Nossa Loja é Top 1 da região!</p>
                </div>
            </div>
        </div>
    )
}