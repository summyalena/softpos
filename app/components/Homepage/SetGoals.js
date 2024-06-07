'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import Container from '../ui/Container'
import styles from './home.module.css';
import HumanPic from '../../../public/images/third_human_picture.png';
import GoalsBg from '../../../public/images/background_third_picture.png';
import Checked from '../../../public/icons/checked_icon.svg';
import ArrowRight from '../../../public/icons/arrow_right.svg';
import TapToPay from '../../../public/images/Tap_to_pay_slider.png';
import Mobility from '../../../public/images/Mobility_Flexibility.png';
import Contactless from '../../../public/images/Contactless_slider.png';

function SetGoals() {
  const images = [
    {
      id: 1,
      name: 'image1',
      image: TapToPay
    },
    {
      id: 2,
      name: 'image2',
      image: Mobility
    },
    {
      id: 3,
      name: 'image3',
      image: Contactless
    }
  ]

  const [activeIndex, setActiveIndex] = useState(1);
  const { length } = images

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
    <Container className={` ${styles.goalsContainer}`}>
      <div className={` grid ${styles.goalsWrapper}`}>
        <div className={`flex flex-col gap-4 ${styles.goalTextWrap}`}>
          <div className={`${styles.goalHeading}`}>
            <p className='flex items-center gap-2'><span/> <i>Set your goals</i></p>
            <h3>Always know what's Tap-to-Pay.</h3>
          </div>
          <p>Tap-to-Pay is a more accurate reflection of an ease success that represents your payments and purchase services conveniently.
          </p>
          <ul className='flex flex-col items-center gap-2'>
            <li className='flex items-center gap-3'><Image src={Checked} alt="" />Easy Contactless Payment</li>
            <li className='flex items-center gap-3'><Image src={Checked} alt="" />Tap-to-Pay Conveniences
            </li>
            <li className='flex items-center gap-3'><Image src={Checked} alt="" className='ml-[-17px]'/> Mobility and Flexibility
            </li>
          </ul>
          <button className='flex items-center justify-center gap-4 mt-3'>Learn more
            <Image width={15} height={15} src={ArrowRight} alt="arrow_right"/>
          </button>
        </div>
        <div className={`flex items-center justify-center ${styles.goalsImage}`}>
        <Image className={`${styles.bgGoalsImage}`} src={GoalsBg} alt="background_image"/>
          <Image className={`${styles.fgImage}`} src={HumanPic} alt="" />
          <div className={`${styles.goals}`}>
            {images.map((el) => (
              el.id === activeIndex ?
              <span>
                <Image width={170} height={170} src={el.image} alt=""/>
             </span> : ''
           ))}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default SetGoals