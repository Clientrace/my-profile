
import Icon from '../../components/icon/icon';
import Bar from '../../components/animations/bar/bar';
import styles from './home.module.scss';
import getScrollPosition from '../../../helper/scrollPos';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Name from '../animations/name/name';
import TopNav from '../topnav/topnav';


const StickyBanner = () => {
  return (
    <motion.div
      transition={{duration: 0.5}}
      className={styles['stickyBanner']}>
      <TopNav showBrand/>
    </motion.div>
  )
}

const Home = ({setCmdText, setCmdSticky, animationFlag}) => {
  const TOP_BANNER_OFFSET = -150;
  const pageRef = useRef(null);
  const [isSticky, setSticky] = useState(false);
  const NAME = 'Kim Clarence Peñaflor';
  const titleAnimation = animationFlag && {
    initial:{opacity: 0},
    animate:{opacity: 1},
    transition: {delay: 5}
  };
  const logoAnimation = animationFlag && {
    initial:{opacity: 0},
    animate:{opacity: 0.1},
    transition:{delay: 5},
  };

  const handleScroll = () => {
    var scrollPos = getScrollPosition(pageRef.current).y;
    setSticky(scrollPos < TOP_BANNER_OFFSET);
    setCmdSticky(scrollPos < TOP_BANNER_OFFSET);
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
          <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}} onHoverStart={()=>setCmdText("> Yep, that's my name")}>
              <Name text={NAME} initSpeed={300}/>
          </motion.h1>
        </div>
        <motion.img
          {...logoAnimation}
          onHoverStart={()=>setCmdText("> Awesome logo?")}
          src='/assets/logo.svg' className={styles['logo']}/>
        <div className={styles['mainSubtitle']}>
          <motion.h4 {...titleAnimation}>
            <i>&lt; Full Stack Software Engineer /&gt;</i>
          </motion.h4>
        </div>
        <div className={styles['socMed']}>
          <Icon onHoverStart={()=>setCmdText("> Jump to my facebook profile")}
            src="/assets/facebook.svg" url="https://web.facebook.com/kcpenaflor11"
            delay={animationFlag?5.2:0.1}/>
          <Icon onHoverStart={()=>setCmdText("> Jump to my github page")}
            src="/assets/github.svg" url="https://github.com/Clientrace"
            delay={animationFlag?5.4:0.2}/>
          <Icon onHoverStart={()=>setCmdText("> View my linkedin page")}
            src="/assets/linkedin.svg"
            url="https://www.linkedin.com/in/kcpenaflor"
            delay={animationFlag?5.6:0.3}/>
          <Icon onHoverStart={()=>setCmdText("> Visit my instagram")}
            src="/assets/instagram.svg"
            url="https://www.instagram.com/kcpenaflor/"
            delay={animationFlag?5.8:0.4}/>
        </div>
      </div>
      {isSticky && <StickyBanner/>}
    </>
  )
}

export default Home;



