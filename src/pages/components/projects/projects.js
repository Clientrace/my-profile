
import Heading from '../heading/heading';
import styles from './projects.module.scss';


const Projects = () => {
  return (
    <div className={styles['mainBodyContainer']}>
      <div className={styles['body']}>
        <Heading iconUrl="/assets/folder.svg">Projects</Heading>
      </div>
    </div>
  )
}


export default Projects;
