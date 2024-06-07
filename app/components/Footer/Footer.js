import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './footer.module.css';
import Container from '../ui/Container';

import Twitter from '../../../public/icons/x_icon_new.svg';
import Facebook from '../../../public/icons/fb_icon_new.png';
import Instagram from '../../../public/icons/ig_icon_new.svg';
import Youtube from '../../../public/icons/yt_icon_new.svg';
import Tiktok from '../../../public/icons/tiktok_icon_new.svg';
import SoftIcon from '../../../public/icons/softpos_logo_new.png';


function Footer() {
  const icons = [
    {
      id: 1, 
      image: Twitter
    },
    {
      id: 2, 
      image: Facebook
    },
    {
      id: 3, 
      image: Instagram
    },
    {
      id: 4, 
      image: Youtube
    },
    {
      id: 5, 
      image: Tiktok
    }
  ]

  var date = new Date().getFullYear();

  return (
    <>
    <Container className={styles.footerContainer}>
      <div className={`${styles.footerWrapper}`}>
        <div className="flex flex-col gap-lg">
          <span className=""><Image width={80} height={80} objectFit='contain' src={SoftIcon} alt="soft_icon" /></span>
          <span>
            <p>SoftPOS is a digital service to manage your digital business easily. Provides contactless payment services . Save your time</p>
            </span>
            <ul className="flex mt-3 items-center gap-5">
              {
                icons.map((el) => (
                 <li> <Link href=''> <Image width={15} height={15} src={el.image} alt="social_icons"/> </Link></li>
                ))
              }
            </ul>
        </div>
        <div className=''>
          <ul className="flex flex-col gap-2">
            <b className="mb-5">Features</b>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/'>Why SOFTPOS?</Link></li>
            <li><Link href='/'>Security</Link></li>
            <li><Link href='/'>Why Us?</Link></li>
            <li><Link href='/'>Security</Link></li>
          </ul>
          <ul className='flex flex-col gap-2'>
            <b className="mb-5">Our Services</b>
            <li><Link href='/'>Acconts</Link></li>
            <li><Link href='/'>Digital Services</Link></li>
          </ul>
          <ul className='flex flex-col gap-2'>
            <b className="mb-5">Support</b>
            <li><Link href='/'>Customers Service</Link></li>
            <li><Link href='/'>Accountability</Link></li>
            <li><Link href='/'>Contact Us</Link></li>
          </ul>
        </div>

     </div>
    </Container>
     <div className={`flex items-center justify-around gap-4 ${styles.copyRight}`}>
     <p className="flex items-center gap-2">
     © <span>{date}</span>   SoftPOS All Rights Reserved
        </p>
        <ul className='flex gap-4 items-center'>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>
      </>
  )
}

export default Footer