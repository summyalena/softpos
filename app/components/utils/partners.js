import image1 from '../../../public/images/mastercard_symbol.svg';
import image2 from '../../../public/images/visa_inc_logo.svg';
import image3 from '../../../public/icons/apple-pay.svg';
import image4 from '../../../public/images/google-pay.svg';

import image5 from '../../../public/icons/digital.svg';
import image6 from '../../../public/icons/camera_trans.svg';
import image7 from '../../../public/icons/business.svg';

export const paymentInfo = [
  {
    id: 1,
    icon: image5,
    text: 'Digital Services'
  },
  {
    id: 2,
    icon: image6,
    text: 'Receive payment'
  },
  {
    id: 3,
    icon: image7,
    text: 'Manage Business'
  }
]

const partners = [
  {
    id: 1,
    name: 'mastercard',
    image: image1
  },
  {
    id: 2,
    name: 'visa',
    image: image2
  },
  {
    id: 3,
    name: 'applePay',
    image: image3
  },
  {
    id: 4,
    name: 'googlePay',
    image: image4
  }
]

export default partners;