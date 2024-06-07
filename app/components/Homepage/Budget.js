'use client';

import React, {useEffect, useState} from 'react';
import Image from 'next/image';

import Container from '../ui/Container'
import HumanPic from '../../../public/images/Second_Human_Pic.png';
import ArrowRight from '../../../public/icons/arrow_right.svg';
import BudgetBg from '../../../public/images/background_second_human.png';
import FinancePlan from '../../../public/images/Finance_plan.png';
import ElectricityPlan from '../../../public/images/Electricity_plan.png';
import AirtimePlan from '../../../public/images/Airtime_plan.png';
import styles from './home.module.css';

function Budget() {
  const images = [
    {
      id: 1,
      name: 'image1',
      image: FinancePlan
    },
    {
      id: 2,
      name: 'image2',
      image: ElectricityPlan
    },
    {
      id: 3,
      name: 'image3',
      image: AirtimePlan
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
    <Container>
      <div className={`grid ${styles.budgetWrapper}`}>
        <div className={`flex items-center justify-center ${styles.budgetImage}`}>
          <Image className={`${styles.bgImage}`} src={BudgetBg} alt="background_image"/>
          <Image className={`${styles.fgImage}`} src={HumanPic} alt="section_human_picture" />
          <div className={`${styles.plans}`}>
            {images.map((el) => (
              el.id === activeIndex ?
              <span>
                <Image width={190} height={190} src={el.image} alt=""/>
             </span> : ''
           ))}
          </div>
        </div>
        <div className={`flex flex-col gap-5 ${styles.budgetTextWrap}`}>
          <div>
            <p className='flex items-center gap-3'><span /> <i>Plan your budget</i></p>
            <h2>Make Plans for what to do, not what's due</h2>
          </div>
          <p>Set up your recurring expenses (think power bill, cable, internet) in our app, and we’ll do the work of saving for them each month.
          </p>
          <p>
            Sticking to your budget is easy because tracking your spending is automatic!
          </p>
          <button className='flex items-center justify-center gap-4 mt-3'>Learn more
            <Image width={15} height={15} src={ArrowRight} alt="arrow_right"/>
          </button>
        </div>
     </div>
    </Container>
  )
}

export default Budget