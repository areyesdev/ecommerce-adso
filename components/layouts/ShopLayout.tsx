import { FC } from 'react'
import Head from "next/head"
import { Navbar, SideMenu } from '../ui';

interface Props {
  title: string;
  pageDescription: string;
  // esto va a ser opcional
  imageFullUrl?: string
}


// esto va a ser un functional component que va tener las siguientes props
export const ShopLayout: FC<Props> = ({ children, title, pageDescription, imageFullUrl }) => {
  return (
    // cremaos nuestro frame 
    <>
      <Head>
        <title>{title}</title>

        <meta name='description' content={pageDescription} />
        <meta name='og:title' content={title} />
        <meta name='og:description' content={pageDescription} />
        {/* si viene nuestra imageFullUrl hacemos lo siguiente */}
        {
          imageFullUrl && (
            <meta name='og:image' content={imageFullUrl} />
          )
        }
      </Head>
      <nav>
        {/* TODO: Navbar */}
        <Navbar />
      </nav>
      {/* TODO: Sidbar */}
      <SideMenu />
      <main style={{
        margin: '80px auto',
        // tamaño maximo de pantalla
        maxWidth: '1440px',
        padding: '0px 30px'
      }}>
        {children}
      </main>
      {/* TODO: Footer */}
      <footer>
        {/* TODO: Mi custom Footer */}
      </footer>
    </>
  )
}
