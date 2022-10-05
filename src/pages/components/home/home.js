
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
      transition={{duration: 0.3}}
      className={styles['stickyBanner']}>
      <TopNav showBrand/>
    </motion.div>
  )
}



const Home = () => {
  const TOP_BANNER_OFFSET = -290;
  const pageRef = useRef(null);
  const [isSticky, setSticky] = useState(false);


  const handleScroll = () => {
    console.log('triggered');
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
          <h1>
            Kim Clarence Peñaflor
          </h1>
        </div>
        <motion.img
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
      {isSticky && <StickyBanner/>}
    </>
  )
}

export default Home;



