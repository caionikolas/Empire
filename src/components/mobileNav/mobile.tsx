'use client'
import { useState } from 'react'

import { IoMdClose } from 'react-icons/io'
import Menu from '../../assets/images/menu.svg'

import Link from "next/link"

import { motion } from "framer-motion"

import "./mobile.css"
import Image from 'next/image'

export default function MobileNav() {
    const [openMenu, setOpenMenu] = useState(false);

    const menuVariants = {
        hidden: {
            y: '-100%',
        },
        show: {
            y: 0,
            transition: {
                ease: [0.6, 0.01, -0.05, 0.9]
            },
        },
    }

    return (
        <nav className='mobile-nav'>
            <div onClick={() => setOpenMenu(true)} className="mobile-hub">
                <Image
                    src={Menu}
                    alt='menu mobile'
                />
            </div>
            <motion.div 
                variants={menuVariants}
                initial='hidden'
                animate={openMenu ? 'show' : ''}

                className="mobile-menu">
                <div onClick={() => setOpenMenu(false)} className="mobile-menu-close">
                    <IoMdClose/>
                </div>
                <ul className="mobile-list">
                    <li onClick={() => setOpenMenu(false)}><Link href={'#start'} className="link">Home</Link></li>

                    <li onClick={() => setOpenMenu(false)}><Link href={'#offers'} className="link">Promoção</Link></li>

                    <li onClick={() => setOpenMenu(false)}><Link href={'#menu'} className="link">Cardápio</Link></li>

                    <li onClick={() => setOpenMenu(false)}><Link href={'#menu'} className="link">Portfolio</Link></li>
                    
                    <li onClick={() => setOpenMenu(false)}><Link href={'#menu'} className="link">Cardápio</Link></li>

                    <li onClick={() => setOpenMenu(false)}><Link href={'#service'} className="link">Comentario</Link></li>

                    <li onClick={() => setOpenMenu(false)}><Link href={'#footer'} className="link">Contato</Link></li>
                </ul>
            </motion.div>
        </nav>
    )
}