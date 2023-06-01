import './globals.css'
import { Lato, Lilita_One  } from 'next/font/google'

export const lato = Lato({ 
  subsets: ['latin'],
  weight: ['100', '300', '400', '700' , '900'],
  variable: '--font-lato'
})

export const lilitaOne = Lilita_One({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-lilitaOne'
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
      <body className={`${lato.className}  `}>{children}</body>
    </html>
  )
}
