import react from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import styles from './home.module.css';


function Explore() {

  return (
    <Container className={`${styles.exploreContainer}`}>
      <div className={`flex sm:flex-row flex-col items-center justify-around ${styles.exploreWrapper}`}>
      <div className={`flex flex-col gap-5 ${styles.exploreText}`}>
        <span>Hi, Ready to surface your business?</span>
        <h6>Explore your features today.</h6>
      </div>
      <div className={`flex items-center gap-5 ${styles.button}`}>
        <Button>Get started</Button>
        <button className={`${styles.learnMore}`}>Learn More</button>
        </div>
        </div>
    </Container>
  )
}

export default Explore;