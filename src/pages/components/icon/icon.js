
import styles from './icon.module.scss';


const Icon = ({src, url}) => {
  return (
    <a href={url} target="_blank">
      <img src={src} className={styles['image']}/>
    </a>
  )
}

export default Icon;



