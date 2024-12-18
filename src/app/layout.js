
import './globals.css'
import Navbar from './Components/Navbar'
import Image from 'next/image'

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <header>
        <Image src="/images/logosmall.png" alt="cantor logo" width="80" height="80"/>
        </header>
        <Navbar />
        <main>
        {children}
        </main>
        <footer><p>Cantor College &copy; {new Date().getFullYear()}</p></footer>
      </body> 
    </html>
  );
}