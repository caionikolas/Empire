import Image from 'next/image'
import Banner from '../../assets/images/Banner mobile 1.png'
import Burger from '../../assets/images/burguer.svg'
import Phone from '../../assets/images/fone.svg'
import Delivery from '../../assets/images/delivery.svg'
import './layout.css'

export default function Layout() {
    return (
        <>
            <section className="start">
                <div className='img'>
                    <Image 
                        src={Banner}
                        alt='Banner Empire Burger'
                    />
                </div>
                <div className="grupo">
                    <h3>Uma nova experiência!</h3>
                    <h1>KING <span>BURGER</span></h1>
                    <p>Para quem tem um <span>Apetite de um REI!</span></p>
                    <button>Comprar Agora</button>
                </div>
            
                <div className="qualifications">
                    <div className="todo">
                        <div className="icon">
                            <Image 
                                src={Burger}
                                alt='icone Burger'
                            />
                        </div>
                        <div>
                            <h2>ARTESANAL</h2>
                            <p>Nossas receitas são <br/> feitas com todo cuidado</p>
                            <div className="underline"></div>
                        </div>
                    </div>
                    <div className="todo">
                        <div className="icon">
                            <Image 
                                src={Phone}
                                alt='Icone Fone'
                            />
                        </div>
                        <div>
                            <h2>ATENDIMENTO</h2>
                            <p>Totalmente <br/> personalizado</p>
                            <div className="underline"></div>
                        </div>
                    </div>
                    <div className="todo">
                        <div className="icon">
                            <Image 
                                src={Delivery}
                                alt='Icone Delivery'
                            />
                        </div>
                        <div>
                            <h2>DELIVERY SPEED</h2>
                            <p>Entregamos menos de <br/> 30 minutos</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}