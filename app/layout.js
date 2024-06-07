// import {Inter} from 'next/font/google';
import Head from 'next/head';
import './globals.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// const inter = Inter({subsets: ['latin']});

export const metadata = {
  title: 'SoftPOS',
  description: 'Transform any certified mobile device into a payment terminal with SoftPOS'
};

// const myFont = localFont({
//   src: [
//     {
//       path: './public/font/ClashDisplayBold.otf',
//       weight: '800'
//     },
//     {
//       path: './public/font/ClashDisplayExtralight.otf',
//       weight: '800'
//     },
//     {
//       path: './public/font/ClashDisplayLight.otf',
//       weight: '200'
//     },
//     {
//       path: './public/font/ClashDisplayMedium.otf',
//       weight: '500'
//     },
//     {
//       path: './public/font/ClashDisplayRegular.otf',
//       weight: '400'
//     },
//     {
//       path: './public/font/ClashDisplaySemibold.otf',
//       weight: '600'
//     }
//   ]
// })

export default function RootLayout({children}) {
  return (
    <html lang='en'>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link href='https://api.fontshare.com/v2/css?f[]=clash-display@200,400,500,700&display=swap' rel='stylesheet' />
      </Head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
