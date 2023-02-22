
import TopNav from './components/topnav/topnav';
import Home from './components/home/home';
import Graph from './components/graph/graph';
import Bar from './components/animations/bar/bar';
import Head from 'next/head';

import Contact from './components/contact/contact';
import ProjectsSection from './components/projectsSection/projectsSection';
import Skills from './components/skills/skills';

import { useInterval } from '../helper/delta-timer';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Name from './components/animations/name/name';
import style from './main.module.scss';
import Quote from './components/quote/quote';

const AppIndex = () => {

  const [cmdSticky, setCmdSticky] = useState(false);
  const [commandFlag, setCommandFlag] = useState(false);
  const [cmdAccessFlag, setCmdAccessFlag] = useState(false);

  const [componentIdx, setComponentIdx] = useState(0);
  const [componentFlags, setComponentFlags] = useState([false, false, false, false]);

  const [init, setInit] = useState(false);
  const [initText, setInitText] = useState("> Hello friend. Let me introduct myself.");
  const [cmdText, setCmdText] = useState("> Let there be light");
  const [compRenderDelay, setCompRenderDelay] = useState(6800);
  const [animationFlag, setAnimationFlag] = useState(true);

  useEffect(()=>{
    console.log('loading');

    const initFlag = sessionStorage.getItem('init') === 'true';

    // check if recently visited
    const dateVisited = localStorage.getItem('visited');
    if(dateVisited){
      setInitText('> Hi friend. Welcome back.');
    } 

    if(initFlag){
      const RELOAD_SPEED_REF_SEC = 600;
      const dtPrev = new Date(parseInt(dateVisited));
      const dtNow = new Date(Date.now());
      const dtElapsed = (dtNow - dtPrev)/1000;

      if(dtElapsed){
        // Reload too fast, don't load the animations
        console.log(dtElapsed);
        if(dtElapsed < RELOAD_SPEED_REF_SEC){
          setComponentFlags([true, true, true, true]);
          setCmdText("> Hello");
          setCommandFlag(true);
          setAnimationFlag(false);
        } else {
          setAnimationFlag(true);
        }
      }
    }

    // save visit record
    localStorage.setItem('visited', Date.now());
    sessionStorage.setItem('init', 'true');
    setInit(true);
  },[])

  useInterval(()=>{setCommandFlag(true);}, 4800);
  useInterval(()=>{
    const compFlags = [...componentFlags];
    compFlags[componentIdx] = true;
    setComponentFlags(compFlags);
    setComponentIdx(componentIdx+1);
    if(compFlags[0]){
      setCompRenderDelay(2000);
    }
  }, compRenderDelay)

  const setInteractiveText = (text) => {
    if(cmdAccessFlag){
      setCmdText(text);
    }
  }

  return (
    <div>
      <Head>
        <title>Clarence Penaflor</title>
      </Head>
      {init && <>
        <Home
          animationFlag={animationFlag}
          setCmdText={setInteractiveText}
          setCmdSticky={setCmdSticky}/>
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          className={style[cmdSticky?"command-sticky":"command"]}>
          { commandFlag ? <Name text={cmdText}
            initSpeed={100}
            refSpeed={60}
            teardown={()=>setCmdAccessFlag(true)}/>:initText }
        </motion.div>

        { componentFlags[3]
          && <ProjectsSection
              animationFlag={animationFlag}
              hoverAction={()=>setInteractiveText("> Browse my projects")}/> }
        { componentFlags[2]
          && <Skills
              animationFlag={animationFlag}
              hoverAction={()=>setInteractiveText("> Some of my technical skills")}/> }
        { componentFlags[1]
          && <Contact
              animationFlag={animationFlag}
              hoverAction={()=>setInteractiveText("> Contact me from any of that")} setCmdText={setInteractiveText}/>}
        { componentFlags[0]
          && <Quote
              setCmdText={setInteractiveText}/>}
      </>}
      {/* <Graph/> */}
    </div>
  )
}

export default AppIndex;





