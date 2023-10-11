"use client"

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import BannerHero from "@/components/bannerHero/BannerHero";
import Localization from "@/components/localization/localization";
import Offers from "@/components/offers/Offers";
import Time from "@/components/time/time";
import './globals.css'
import Service from "@/components/service/service";
import Delivery from "@/components/delivery/delivery";

import { Lilita_One  } from 'next/font/google'

import "./../components/comments/comments.css"
import "./../components/menu/menu.css"
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react"
import ClampLines from "react-clamp-lines";
import Social from "@/components/social/social";

const lilitaOne = Lilita_One({ 
    subsets: ['latin'],
    weight: '400',
    variable: '--font-lilitaOne'
   })

type Menu = {
    plate: string,
    price: number,
    ingredients: string
}

type Comment = {
    name: string,
    image: string,
    age: number,
    testimonial: string
}

export default function Home() {
    const [menus, setMenus] = useState<Menu[]>([])
    const [comments, setComments] = useState<Comment[]>([])

    useEffect(() => {
      async function getData() {
        const res = await fetch("https://api.brchallenges.com/api/empire-burger/menu")

        if (!res.ok){
          throw new Error("Erro ao carregar dados!")
      }

      const data: Menu[] = await res.json()

      setMenus(data)
      }
      getData()
    }, [])

    useEffect(() => {
      async function getData() {
        const res = await fetch("https://api.brchallenges.com/api/empire-burger/testimonials")

        if (!res.ok){
          throw new Error("Erro ao carregar dados!")
      }

      const data: Comment[] = await res.json()

      setComments(data)
      }
      getData()
    }, [])

  const options = { style: 'currency', currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 3 }
  const formatNumber = new Intl.NumberFormat('pt-BR', options)

  const slider = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0)

  useEffect(() => {
    console.log(slider.current?.scrollWidth, slider.current?.offsetWidth)
    //setWidth(slider.current?.scrollWidth)
  }, [])

  return (
    <>
      <Header/>
      <BannerHero/>
      <Offers/>
      <Time/>
      <div id="menu">
            <div className="escolha">
                <h2 className={lilitaOne.className}>Escolha o seu combo imperial,<span> peça agora!</span></h2>
                <p>Temos vários tipos de pratos para a nossa realeza, fique esperto porque temos sempre  promoção!</p>
                <button>Ver Cardápio Completo</button>
            </div>
            <div className="cardapio">
                <h2 className={lilitaOne.className}>Cardápio imperial | Burger</h2>
                {
                    menus.map((menu) => (
                        <div key={menu.plate}>
                            <h4 className={lilitaOne.className}><p>{menu.plate}</p><span>{formatNumber.format(menu.price)}</span></h4>
                            <p>{menu.ingredients}</p>
                        </div>
                    ))
                }
            </div>
        </div>   
      <Service/>
      <div id="comments">
            <h2 className={lilitaOne.className}>Nossa realeza</h2>
            <p >A satisfação de nossos clientes em primeiro lugar!</p>
            <motion.div ref={slider} className="commnets-user" whileTap={{ cursor:"grabbing" }}>
                <motion.div  className="comments-inner" 
                    drag="x"
                    dragConstraints={{ right: 0, left: -3360 }}
                >
                    {
                        comments.map((comment) => (
                            <motion.div className="comment" key={comment.image}>
                                <div className="-comment-user">
                                    <p>
                                    <ClampLines
                                        text={comment.testimonial}
                                        id="custom"
                                        lines={4}
                                        moreText="testando"
                                        lessText="Collapse"
                                        ellipsis="..."
                                        className="custom-class"/>
                                    </p>
                                    <div className="user">
                                        <Image
                                            src={comment.image}
                                            alt="image-user"
                                            width={48.5}
                                            height={48.5}
                                            className="img"
                                        />
                                        <div className="user-name">
                                            <h4 className={lilitaOne.className}>{comment.name}</h4>
                                            <h5>{comment.age} Anos •</h5>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    }
                </motion.div>
            </motion.div>
        </div>     
      <Social/>   
      <Delivery/>
      <Localization/>
      <Footer/>
    </>
  )
}
