import React from 'react';
import Image from 'next/image';

import Container from '../ui/Container';
import styles from './home.module.css'
import SetuPin from '../../../public/images/setuppin_image.png';
import MultiplePay from '../../../public/images/multiple_payment.png';

function Customers() {

  return (
    <Container>
      <div className={`flex flex-col gap-1 items-center justify-center ${styles.customersWrapper}`}>
        <div className={`flex flex-col gap-6 ${styles.customersHeading}`}>
          <h4>Keep your customers trust</h4>
          <p>Goals make it easy to save for the things you want or want to do. There’s no need for spreadsheets or extra apps to budget and track your money .</p>
        </div>
        <div className={`grid gap-8 ${styles.customersGridContainer}`}>
          <div className='flex flex-col gap-5 items-center justify-center'>
            <div className={`${styles.wrapCustomer}`}>
            <h5>Set up your PIN</h5>
              <p>Improves your app's security. The users enter a PIN that is sent to their phone every time they log in.</p>
              </div>
            <Image src={SetuPin} alt="setup_pin_image"/>
          </div>
          <div className='flex flex-col gap-5 items-center justify-center'>
            <div className={`${styles.wrapCustomer}`}>
            <h5>Multiple Payment Method</h5>
              <p>Set up your payment method with SoftPOS. The linking of commercial networks and enterprises.</p>
              </div>
            <Image src={MultiplePay} alt="setup_pin_image"/>
          </div>
        </div>
      </div>
    </Container>

  )
}

export default Customers;