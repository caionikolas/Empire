import { Lilita_One  } from 'next/font/google'

import "./menu.css"

const lilitaOne = Lilita_One({ 
    subsets: ['latin'],
    weight: '400',
    variable: '--font-lilitaOne'
   })

export default function Menu(){
    const menu = {
        1: {
            nome: "Classic burger",
            preco: 49.99
        },
        2: {
            nome: "Special big burger",
            preco: 49.99
        },
        3: {
            nome: "special big burger",
            preco: 49.99
        },
        4: {
            nome: "Mexican burger",
            preco: 49.99
        },
    }

    return (
        <div id="menu">
            <div className="escolha">
                <h2 className={lilitaOne.className}>Escolha o seu combo imperial,<span> peça agora!</span></h2>
                <p>Temos vários tipos de pratos para a nossa realeza, fique esperto porque temos sempre  promoção!</p>
                <button>Ver Cardápio Completo</button>
            </div>
            <div className="cardapio">
                <h2 className={lilitaOne.className}>Nossa especialidade</h2>
                <h4 className={lilitaOne.className}>{menu[1].nome}.......................................{menu[1].preco}</h4>
                <p>Hamburguer bonino 160g, Molho, Bacon, Queijo prato, peito de peru, Tomate, Alface, Servidor do pão de batata</p>
                <h4 className={lilitaOne.className}>{menu[2].nome}...............................{menu[2].preco}</h4>
                <p>Hamburguer bonino 160g, Molho, Bacon, Queijo prato, peito de peru, Tomate, Alface, Servidor do pão de batata</p>
                <h4 className={lilitaOne.className}>{menu[3].nome}...............................{menu[3].preco}</h4>
                <p>Hamburguer bonino 160g, Molho, Bacon, Queijo prato, peito de peru, Tomate, Alface, Servidor do pão de batata</p>
                <h4 className={lilitaOne.className}>{menu[4].nome}....................................{menu[4].preco}</h4>
                <p>Hamburguer bonino 160g, Molho, Bacon, Queijo prato, peito de peru, Tomate, Alface, Servidor do pão de batata</p>
            </div>
        </div>   
    )
}