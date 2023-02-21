
import TopNav from './components/topnav/topnav';
import Home from './components/home/home';
import Graph from './components/graph/graph';
import Bar from './components/animations/bar/bar';
import Projects from './components/projects/projects';
import Skills from './components/skills/skills';
import { useInterval } from '../helper/delta-timer';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Name from './components/animations/name/name';
import style from './main.module.scss';

const AppIndex = () => {
  const [projFlag, setProjFlag] = useState(false);
  const [skillsFlag, setSkillsFlag] = useState(false);
  const [commandFlag, setCommandFlag] = useState(false);
  const [cmdAccessFlag, setCmdAccessFlag] = useState(false);
  const [cmdText, setCmdText] = useState("> Let there be light");

  useInterval(()=>{setSkillsFlag(true);}, 6500);
  useInterval(()=>{setProjFlag(true);}, 8500);
  useInterval(()=>{setCommandFlag(true);}, 3500);

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
      { projFlag && <Projects hoverAction={()=>setInteractiveText("> Browse my projects")}/> }
      { skillsFlag && <Skills/> }
      {/* <Graph/> */}
    </div>
  )
}

export default AppIndex;


