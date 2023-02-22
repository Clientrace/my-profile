
import styles from './projectCard.module.scss';
import {motion} from 'framer-motion';


const ProjectCard = ({name, bg, subtitle, tech}) => {
  const renderTechIcons = () => {
    return (
      <div>
        {
          tech.map(data=>{
            return <img src={`/assets/${data}.svg`}/>
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



