
import styles from './skills.module.scss';
import Icon from '../../components/icon/icon';
import Heading from '../../components/heading/heading';


const Skills = () => {
  return (
    <div className={styles['mainBodyContainer']}>
      <div className={styles['body']}>
        <Heading>Techinical Skills</Heading>
        <div className={styles['container']}>
          Python, Javascript, Go lang, HTML, CSS
        </div>
      </div>
    </div>
  )
}

export default Skills;

