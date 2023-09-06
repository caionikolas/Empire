import './globals.css'
import { Lato, Lilita_One  } from 'next/font/google'


const lato = Lato({ 
  subsets: ['latin'],
  weight: ['100', '300', '400', '700' , '900'],
  display: 'swap'
})

export const lilitaone = Lilita_One({ 
  subsets: ['latin'],
  weight: '400',
  display: 'swap'
 })

const metadata = {
  title: 'Empire Burger',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={lato.className}>{children}</body>
    </html>
  )
}
