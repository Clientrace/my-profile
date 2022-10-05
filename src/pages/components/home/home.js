
import Icon from '../../components/icon/icon';
import Bar from '../../components/animations/bar/bar';
import styles from './home.module.scss';
import getScrollPosition from '../../../helper/scrollPos';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const Home = () => {
  const pageRef = useRef(null);
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    console.log("SCROLL POSITION: ", getScrollPosition(pageRef.current).y);
    if(getScrollPosition(pageRef.current).y > -20){
      setSticky(false);
    } else {
      setSticky(true);
    }
  }


  useEffect(()=>{
    console.log("IS STICKY VALUE: ", isSticky);
  }, [isSticky])


  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles['mainBody']}>
      <div className={styles['mainTitle']}>
        <h1>
          Kim Clarence Peñaflor
        </h1>
      </div>
      <motion.img
        animate={{
          opacity: [0, 1, 1, 0],
          rotate: [-60, 0, 310]
        }}
        transition={{duration: 15, repeat: Infinity}}
        src='/assets/logo.svg' className={styles['logo']}/>
      <div className={styles['mainSubtitle']}>
        <h4>
          <i>&lt; Full Stack Software Engineer /&gt;</i>
        </h4>
      </div>
      <div className={styles['socMed']}>
        <Icon src="/assets/facebook.svg" url="https://web.facebook.com/kcpenaflor11"/>
        <Icon src="/assets/github.svg" url="https://github.com/Clientrace"/>
        <Icon src="/assets/linkedin.svg" url="https://www.linkedin.com/in/kcpenaflor"/>
        <Icon src="/assets/instagram.svg" url="https://www.instagram.com/kcpenaflor/"/>
      </div>
    </div>
  )
}

export default Home;



