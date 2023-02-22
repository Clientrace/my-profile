
import styles from './skills.module.scss';
import Heading from '../heading/heading';
import Subheading from '../subheading/subheading';
import Gauage from '../gauge/gauge';
import Divider from '../divider/divider';
import GithubContributions from 'react-github-graph';
import Name from '../animations/name/name';
import { motion } from 'framer-motion';
import { useState } from 'react';

const GauageBar = ({title, meter}) => {
  return (
    <div className={styles['gaugeBar']}>
      <div className={styles['title']}>
        {title}
      </div>
      <div className={styles['meter']}>
        <Gauage percent={meter}/>
      </div>
    </div>
  )
}


const Skills = ({hoverAction}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div className={styles['mainBodyContainer']}
      onHoverStart={()=>hoverAction()}
      style={{opacity: 0.8}}
      whileHover={{opacity: 1}}>
      <div className={styles['body']}>
        <Heading>
          { loaded? "Technical Skills":
            <Name text="Technical Skills" initSpeed={100} teardown={()=>setLoaded(true)}/> }
        </Heading>
        <div className={styles['container']}>
          <div className={styles['content']}>
            <Subheading>Basic (Languages and Databases):</Subheading>
            Python, Javascript, NodeJS, Go lang, HTML, CSS, Java, C, C++, MySQL, NoSQL
            <Divider/>
            <Subheading>Advance (Frameworks, Platforms, Cloud, and Other Technologies):</Subheading>
            ReactJS, AngularJS, VueJS, DynamoDB, AWS, Serverless, Terraform, Postgres, Redis, OpenCV, Linux, MongoDB, NativeScript, DialogFlow, Postman, Cypress
            <Divider/>
            <Subheading>Personal Github Contributions:</Subheading>
            <div className={styles['contributions']}>
              <GithubContributions username="Clientrace"/>
            </div>
          </div>
          <div className={styles['content']}>
            <div className={styles['chart']}>
              <h2>Language Mastery Chart</h2>
              <h5>Rating myself in each languages</h5>
              <div className={styles['chart-content']}>
                <GauageBar title="Python (5yrs Exp)" meter="85%"/>
                <GauageBar title="Javascript (4yrs Exp)" meter="75%"/>
                <GauageBar title="NodeJS (4yrs Exp)" meter="75%"/>
                <GauageBar title="Go lang (2yrs Exp)" meter="60%"/>
                <GauageBar title="HTML (5yrs Exp)" meter="70%"/>
                <GauageBar title="CSS (5yrs Exp)" meter="60%"/>
                <GauageBar title="Java (2yrs Exp)" meter="40%"/>
                <GauageBar title="C (1yr Exp)" meter="30%"/>
                <GauageBar title="C++ (1yr Exp)" meter="20%"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Skills;




