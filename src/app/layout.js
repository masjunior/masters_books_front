// import './globals.css'
'use client'
import { Inter } from 'next/font/google'
import { Row } from 'react-bootstrap'
import { Header } from './Pages/Utils/Header'
import { Footer } from './Pages/Utils/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Masters of Books Store',
  description: 'Expandindo mentes. Página por página!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossOrigin="anonymous"
        />
      </head>

      <body className={inter.className} style={{padding:"1%", width:"auto", height:"auto"}}>
        <Row className="p-1">
            <Header/>
        </Row>
        {children}
        <Row className="p-1">
          <Footer />
        </Row>  
      </body>
        
      
    </html>
  )
}
