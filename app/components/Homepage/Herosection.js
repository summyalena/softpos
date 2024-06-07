'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import Container from '../ui/Container';
import styles from './home.module.css';
import Button from '../ui/Button';
import partners, { paymentInfo } from '../utils/partners';
import IphoneMockup from '../../../public/images/iphone_herosection.png';
import HeroImage from '../../../public/images/background_hero.png';

function Herosection() {
  const [activeIndex, setActiveIndex] = useState(1);
  const { length } = paymentInfo

  const currentIndex = (index) => {
   
    setActiveIndex(index + 1);
    console.log(index);
    console.log(index + 1);

  }


  useEffect(()=> {
    const handleSlide = setInterval(()=> {
       if(activeIndex > (length-1)){
         setActiveIndex(1)
       }
       if(activeIndex <= 0){
        setActiveIndex(length-1);
       }

       setActiveIndex((prev)=> prev + 1);
    }, 6000)
    return ()=> clearInterval(handleSlide);
  }, [activeIndex]);


  return (
    <Container className={`w-full ${styles.heroContainer}`}>
        <Image className={`${styles.img}`} src={HeroImage} alt="hero_image"/>
      <div className={`grid ${styles.wrapper}`}>
        <div className={`flex flex-col gap-6 ${styles.textContent}`}>
          <div className={`${styles.heroHeading}`}>
        <p className='flex items-center gap-3'><span/><i>Smart Banking Business</i></p>
          <h1>Platform Payment For Digital Business</h1>
          </div>
          <p className={`${styles.paraText}`}>SoftPOS is a Digital service to manage your digital business easily. Provides payment services  all-in-one solution for accepting card payments on your mobile device. Save your time.</p>
          <div className={`flex items-center justify-between gap-8 ${styles.bizEmail}`}>
            <p>Your Business Email</p>
            <Button className="">Get Started </Button>
          </div>

            <p className={`${styles.respectText}`}>We'll respect the inbox and never share your email.</p>
            <div className={`flex flex-col gap-6 ${styles.partnership}`}>
              <p>Patnership by</p>
              <ul className="flex gap-4 items-center">
                {partners.map((el) => (
                  <li><Image width={50} height={50} src={el.image} alt={el.name}/></li>
                ))}
              </ul>
              </div>
        </div>
        <div className={`flex flex-col items-center justify-center sm:flex hidden ${styles.heroImage}`}>
          <Image src={IphoneMockup} alt="iphone_mockup" />
          <div className={`${styles.animatePayInfo}`}>
            <ul className='flex items-center gap-3'>
              {paymentInfo.map((el) => (
                el.id === activeIndex ? 
                <li className='flex items-center gap-2 py-4 pr-[1rem] pl-2 bg-[#00000] text-sm text-[#fffff]'>
                    <Image width={23} height={23} src={el.icon} alt={el.text} />
                    <span />
                    <p className='text-sm'>{el.text}</p>
                </li>
                  : 
                  <li className='flex items-center gap-2 py-4 pr-[1rem] pl-2 bg-[#fffff] text-sm text-[#00000]'>
                  <Image width={23} height={23} src={el.icon} alt={el.text} /> <span/> <p className='text-sm'>{el.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        </div>
    </Container>
  )
}

export default Herosection