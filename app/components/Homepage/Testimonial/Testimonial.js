'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import styles from './testimonial.module.css';
import testimonials from '../../utils/testimonials';
import Container from '../../ui/Container';

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(1);
  const { length } = testimonials

  const prevSlide = () => {
    if (activeIndex <= 1) {
      setActiveIndex(length - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }
    console.log('hello')
  }

  const nextSlide = () => {
    if (activeIndex > length - 1) {
      setActiveIndex(1);
    } else {
      setActiveIndex(activeIndex + 1);
    }
    console.log('hello')
  }

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
    <Container className={`flex items-center justify-center flex-col gap-sm ${styles.testimonial}`}>
      <div className={`flex items-center ${styles.testimonialCard}`}> 
      {testimonials.map((test)=> (
        test.id === activeIndex ? 
          <div className={`flex sm:flex-row flex-col gap-10 items-center justify-around ${styles.testimonialCon}`}>
            <div className={`${styles.imageContainer}`}>
              <Image src={test.image} alt={test.name}/>
            </div>
            <div key={test.id} className={`flex flex-col gap-5 ${styles.card}`}>
              <p><span/> <i>Customer Story</i> </p>
              <h6>{test.heading}</h6>
     <p className={activeIndex ? styles.cardText : ''}>{test.text}</p>
          <div className='flex items-center gap-5'>
          <Image width={30} height={30} className="rounded-full" src={test.image2} alt={test.name}/>
              <span className={`flex flex-col ${styles.textSpan}`}>
          <p>{test.name}</p>
          <p className={`${styles.para}`}>{test.position}</p>
          </span>
              </div>
              <div className={`flex mt-2 gap-2 ${styles.testimonialPagination}`}>
        {testimonials.map((test, index)=> (
          <span className={styles.dot} onClick={() => currentIndex(index)} key={test.id}>
          <span className={test.id === activeIndex ? styles.active : ''} />
          </span>
        ))}
      </div>
        </div> 
        </div>: ''
      ))}
      
      </div>
      
     
    </Container>
  )
}

export default Testimonials