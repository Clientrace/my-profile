
import styles from './icon.module.scss';


const Icon = ({src}) => {
  return (
    <img src={src} className={styles['image']}/>
  )
}

export default Icon;


