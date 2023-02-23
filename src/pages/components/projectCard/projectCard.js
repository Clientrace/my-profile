
import styles from './projectCard.module.scss';
import {motion} from 'framer-motion';


const ProjectCard = ({name, subtitle, tech=[], linkoutUrl}) => {
  const renderTechIcons = () => {
    return (
      <div>
        {
          tech.map((data, idx)=>{
            return <img key={`proj-${idx}`} src={`/assets/${data}.svg`}/>
          })
        }
      </div>
    )
  }
  return (
    <motion.div
      whileHover={{scale: 0.95}}
      style={{
        backgroundColor: 'black',
        cursor: 'pointer'
      }}
      className={styles['mainBody']}>
      <div
        className={styles['overlay']}>
        <div>
           <b>{ name }</b>
        </div>
        <div className={styles['link-out']}>
          <a href={linkoutUrl} target="_blank">
            <motion.img 
              whileHover={{scale: 1.2}}
              src="/assets/link-out.svg"/>
          </a>
        </div>
        <div className={styles['description']}>
          {subtitle}
        </div>
        <div className={styles['red']}/>
        <div className={styles['tech']}>
          {renderTechIcons()}
        </div>
        <div className={styles['action']}>
          View Project
        </div>
      </div>
    </motion.div>
  )
}


export default ProjectCard;



