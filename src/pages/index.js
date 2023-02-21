
import TopNav from './components/topnav/topnav';
import Home from './components/home/home';
import Graph from './components/graph/graph';
import Bar from './components/animations/bar/bar';

import Contact from './components/contact/contact';
import Projects from './components/projects/projects';
import Skills from './components/skills/skills';

import { useInterval } from '../helper/delta-timer';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Name from './components/animations/name/name';
import style from './main.module.scss';
import Quote from './components/quote/quote';

const AppIndex = () => {
  const [projFlag, setProjFlag] = useState(false);
  const [skillsFlag, setSkillsFlag] = useState(false);
  const [commandFlag, setCommandFlag] = useState(false);
  const [cmdAccessFlag, setCmdAccessFlag] = useState(false);

  const [componentIdx, setComponentIdx] = useState(0);
  const [componentFlags, setComponentFlags] = useState([false, false, false]);
  const [cmdText, setCmdText] = useState("> Let there be light");

  const [compRenderDelay, setCompRenderDelay] = useState(6800);

  // useInterval(()=>{setSkillsFlag(true);}, 6500);
  // useInterval(()=>{setProjFlag(true);}, 8500);

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
      <Home setCmdText={setInteractiveText}/>
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        className={style['command']}>
        { commandFlag ? <Name text={cmdText}
          initSpeed={100}
          refSpeed={80}
          teardown={()=>setCmdAccessFlag(true)}/>:"> Hello friend. Let me introduce myself. " }
      </motion.div>

      { componentFlags[3] && <Projects hoverAction={()=>setInteractiveText("> Browse my projects")}/> }
      { componentFlags[2] && <Skills/> }
      { componentFlags[1] && <Contact setCmdText={setInteractiveText}/>}
      { componentFlags[0] && <Quote setCmdText={setInteractiveText}/>}
      {/* <Graph/> */}
    </div>
  )
}

export default AppIndex;





