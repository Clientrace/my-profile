
import Icon from '../../components/icon/icon';
import Bar from '../../components/animations/bar/bar';
import styles from './home.module.scss';
import getScrollPosition from '../../../helper/scrollPos';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import TopNav from '../topnav/topnav';


const StickyBanner = () => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.5}}
      className={styles['stickyBanner']}>
      <TopNav showBrand/>
    </motion.div>
  )
}


const Home = () => {
  const TOP_BANNER_OFFSET = -150;
  const pageRef = useRef(null);
  const [isSticky, setSticky] = useState(false);


  const handleScroll = () => {
    var scrollPos = getScrollPosition(pageRef.current).y;
    setSticky(scrollPos < TOP_BANNER_OFFSET);
  }

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);
    window.removeEventListener('scroll', ()=>handleScroll);
  }, []);

  
  return (
    <>
      <div className={styles['nonStickyBanner']}>
        <TopNav/>
      </div>
      <div ref={pageRef} className={styles['mainBody']}>
        <div className={styles['mainTitle']}>
          <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}}>
            Kim Clarence Peñaflor
          </motion.h1>
        </div>
        <motion.img
          src='/assets/logo.svg' className={styles['logo']}/>
        <div className={styles['mainSubtitle']}>
          <motion.h4 initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.2}}>
            <i>&lt; Full Stack Software Engineer /&gt;</i>
          </motion.h4>
        </div>
        <div className={styles['socMed']}>
          <Icon src="/assets/facebook.svg" url="https://web.facebook.com/kcpenaflor11" delay={0.4}/>
          <Icon src="/assets/github.svg" url="https://github.com/Clientrace" delay={0.6}/>
          <Icon src="/assets/linkedin.svg" url="https://www.linkedin.com/in/kcpenaflor" delay={0.7}/>
          <Icon src="/assets/instagram.svg" url="https://www.instagram.com/kcpenaflor/" delay={0.8}/>
        </div>
      </div>
      {isSticky && <StickyBanner/>}
    </>
  )
}

export default Home;



