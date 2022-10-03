
import styles from './skills.module.scss';
import Heading from '../heading/heading';
import Subheading from '../subheading/subheading';
import Divider from '../divider/divider';


const Skills = () => {
  return (
    <div className={styles['mainBodyContainer']}>
      <div className={styles['body']}>
        <Heading>Techinical Skills</Heading>
        <div className={styles['content']}>
          <Subheading>Basic:</Subheading>
          <div className={styles['container']}>
            Python, Javascript, Go lang, HTML, CSS, Java, C, C++
          </div>
          <Divider/>
        </div>
      </div>
    </div>
  )
}

export default Skills;


