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
  const [activeIndex, setActiveIndex] = useState(0);
  const { length } = paymentInfo;

  useEffect(() => {
    const handleSlide = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % length);
    }, 6000);
    return () => clearInterval(handleSlide);
  }, [length]);

  const calculateTransform = () => {
    const offset = (activeIndex - 1 + length) % length;
    return `translateX(-${offset * (80 + 5)}px)`;
  };

  return (
    <Container className={`w-full ${styles.heroContainer}`}>
      <Image className={`${styles.img}`} src={HeroImage} alt="hero_image" />
      <div className={`grid ${styles.wrapper}`}>
        <div className={`flex flex-col gap-6 ${styles.textContent}`}>
          <div className={`${styles.heroHeading}`}>
            <p className="flex items-center gap-3"><span /><i>Smart Banking Business</i></p>
            <h1>Platform Payment For Digital Business</h1>
          </div>
          <p className={`${styles.paraText}`}>SoftPOS is a Digital service to manage your digital business easily. Provides payment services all-in-one solution for accepting card payments on your mobile device. Save your time.</p>
          <div className={`flex items-center justify-between gap-8 ${styles.bizEmail}`}>
            <p>Your Business Email</p>
            <Button className="">Get Started</Button>
          </div>
          <p className={`${styles.respectText}`}>We'll respect the inbox and never share your email.</p>
          <div className={`flex flex-col gap-6 ${styles.partnership}`}>
            <p>Partnership by</p>
            <ul className="flex gap-4 items-center">
              {partners.map((el) => (
                <li key={el.name}><Image width={50} height={50} src={el.image} alt={el.name} /></li>
              ))}
            </ul>
          </div>
        </div>
        <div className={`flex flex-col items-center justify-center sm:flex hidden ${styles.heroImage}`}>
          <Image src={IphoneMockup} alt="iphone_mockup" />
          <div className={`${styles.animatePayInfo}`}>
            <ul style={{ transform: calculateTransform() }}>
              {paymentInfo.map((el, index) => (
                <li
                  key={el.id}
                  className={index === activeIndex ? 'active' : 'inactive'}
                >
                  <Image width={23} height={23} src={el.icon} alt={el.text} />
                  <span />
                  <p className="text-sm">{el.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Herosection;
