'use client'

import Image from 'next/image'
import Banner from '../../assets/images/Banner mobile 1.png'
import Burger from '../../assets/images/burguer.svg'
import Phone from '../../assets/images/fone.svg'
import Delivery from '../../assets/images/delivery.svg'
import BannerWeb from '../../assets/images/banner-hero-web.png'
import './layout.css'
import useWindowDimension from 'use-window-dimensions';

import { lilitaOne } from '@/app/layout'

export default function BannerHero() {
    const { width }  = useWindowDimension();
    
    return (
        <>
            <section id="start" >
                <div className='img'>
                    {width < 1024 ? <Image src={Banner} alt='Banner Empire Burger'/> : <Image src={BannerWeb}alt='Banner Empire Burger' width={1920} height={545}/>}
                </div>
                <div className="grupo">
                    <h3>Uma nova experiência!</h3>
                    <h1 className={lilitaOne.className}>KING <span>BURGER</span></h1>
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
                            <h2  className={lilitaOne.className}>ARTESANAL</h2>
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
                            <h2  className={lilitaOne.className}>ATENDIMENTO</h2>
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
                            <h2  className={lilitaOne.className}>DELIVERY SPEED</h2>
                            <p>Entregamos menos de <br/> 30 minutos</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}