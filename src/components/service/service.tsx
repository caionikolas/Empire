import { Lilita_One  } from 'next/font/google'

import "./service.css"

const lilitaOne = Lilita_One({ 
    subsets: ['latin'],
    weight: '400',
    variable: '--font-lilitaOne'
   })

export default function Service(){
    return (
        <div id="service">
            <div className="girl"></div>
            <h2 className={lilitaOne.className}>Atendimento <br /><span>personalizado</span></h2>
            <p>Todos os nossos clientes são tratados como rei e rainha, com a nossa colunaria artesanal.</p>
            <button>Cardápio Imperial</button>
        </div>
    )
}