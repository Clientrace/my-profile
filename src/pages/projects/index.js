
import Head from "next/head";
import Home from "../components/home/home";
import CMD from "../components/cmd/cmd";
import styles from "./projects.module.scss";
import { useState } from "react";
import Heading from "../components/heading/heading";
import Subheading from "../components/subheading/subheading";
import ProjectCard from "../components/projectCard/projectCard";
import { motion } from "framer-motion";
import Divider from "../components/divider/divider";


const Projects = () => {
  const [cmdText, setCmdText] = useState("> Browse projects");
  const [cmdSticky, setCmdSticky] = useState(false);
  const [cmdAccessFlag, setCmdAccessFlag] = useState(false);
  const setInteractiveText = (text) => {
    if(cmdAccessFlag){
      setCmdText(text);
    }
  }

  return <div>
    <Head>
      <title>Projects</title>
    </Head>
    <Home
      headingText="Projects"
      subheadingText="<Tech Stuff & more/>"
      animationFlag={false}
      setCmdText={setInteractiveText}
      setCmdSticky={setCmdSticky}/>
    <CMD 
      showFlag={true}
      setAccessFlag={setCmdAccessFlag}
      cmdText={cmdText}
      sticky={cmdSticky}/>
    <div className={styles['mainBodyContainer']}>
      <div className={styles['body']}>
        <Heading iconUrl="/assets/folder.svg">
          All projects
        </Heading>
        <div>
          <Subheading>
            Click a project to learn more about it
          </Subheading>
        </div>
        <Divider/>
        <div className={styles['']}>
            <div className={styles['projectList']}>
              <motion.div initial={{scale: 0.9, opacity: 0}}
                animate={{scale: 1, opacity: 1}} transition={{delay: 0.2}}>
                <ProjectCard name="Friday Bot"
                  tech={['python']}
                  subtitle="A Facebook Chatbot"/>
              </motion.div>
              <motion.div initial={{scale: 0.9, opacity: 0}}
                animate={{scale: 1, opacity: 1}} transition={{delay: 0.4}}>
                <ProjectCard name="Inxscape" 
                  tech={['javascript', 'python']}
                  subtitle="Headless Web CMS Tool"/>
              </motion.div>
              <motion.div initial={{scale: 0.9, opacity: 0}}
                animate={{scale: 1, opacity: 1}} transition={{delay: 0.6}}>
                <ProjectCard name="Pymicro" 
                  tech={['python']}
                  subtitle="Microservice framework"/>
              </motion.div>
              <motion.div initial={{scale: 0.9, opacity: 0}}
                animate={{scale: 1, opacity: 1}} transition={{delay: 0.6}}>
                <ProjectCard name="Pymicro" 
                  tech={['python']}
                  subtitle="Microservice framework"/>
              </motion.div>
              <motion.div initial={{scale: 0.9, opacity: 0}}
                animate={{scale: 1, opacity: 1}} transition={{delay: 0.6}}>
                <ProjectCard name="Pymicro" 
                  tech={['python']}
                  subtitle="Microservice framework"/>
              </motion.div>
           </div>
        </div>
      </div>
    </div>
  </div>
}

export default Projects;
