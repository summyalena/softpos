
import Herosection from './components/Homepage/Herosection';
import Budget from './components/Homepage/Budget';
import SetGoals from './components/Homepage/SetGoals';
import Customers from './components/Homepage/Customers';
import Slider from './components/Slider/Slider';
import Testimonials from './components/Homepage/Testimonial/Testimonial';
import Explore from './components/Homepage/Explore';

export default function Home() {
  return (
    <>
      <Herosection />
      <Budget />
      <SetGoals />
      <Customers />
      <Slider />
      <Testimonials />
      <Explore/>
    </>
  );
}
