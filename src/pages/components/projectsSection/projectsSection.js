
import Divider from '../divider/divider';
import Heading from '../heading/heading';
import Subheading from '../subheading/subheading';
import styles from './projectsSection.module.scss';
import ProjectCard from '../projectCard/projectCard';
import Name from '../animations/name/name';
import { useState } from 'react';
import { motion } from 'framer-motion';

const ProjectsSection = ({hoverAction, animationFlag}) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <motion.div
      onHoverStart={()=>hoverAction()}
      className={styles['mainBodyContainer']} style={{opacity: 0.8}} whileHover={{opacity: 1}}>
      <div className={styles['body']}>
        <Heading iconUrl="/assets/folder.svg">
          {loaded||!animationFlag? "Projects": <Name text="Projects" initSpeed={200} teardown={()=>setLoaded(true)}/>}
        </Heading>
        <motion.div className={styles['container']} initial={{opacity: 0}} animate={{opacity: 1}}>
          <div className={styles['content']}>
            <Subheading>Personal Projects</Subheading>
            I have worked on a lot of pet projects, some are publicly viewable on my github account. Here are top 3 of my projects:
            <Divider/>
            <div className={styles['projectList']}>
              <motion.div initial={{scale: 0.9, opacity: 0}}
                animate={{scale: 1, opacity: 1}} transition={{delay: 0.2}}>
                <ProjectCard name="Friday Bot"
                  tech={['python']}
                  subtitle="A Facebook Chatbot"
                  linkoutUrl="https://www.facebook.com/frid4ybot"/>
              </motion.div>
              <motion.div initial={{scale: 0.9, opacity: 0}}
                animate={{scale: 1, opacity: 1}} transition={{delay: 0.4}}>
                <ProjectCard name="Inxscape" 
                  tech={['javascript', 'python']}
                  subtitle="Headless Web CMS Tool"
                  linkoutUrl="https://www.inxscape.com"/>
              </motion.div>
              <motion.div initial={{scale: 0.9, opacity: 0}}
                animate={{scale: 1, opacity: 1}} transition={{delay: 0.6}}>
                <ProjectCard name="Pymicro" 
                  tech={['python']}
                  subtitle="Microservice framework"
                  linkoutUrl="https://github.com/Clientrace/py-micro"/>
              </motion.div>
           </div>
           <div className={styles['viewMore']}>
            <a href="/projects" className={styles['link']}>
              {/* View More */}
            </a>
           </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}


export default ProjectsSection;
