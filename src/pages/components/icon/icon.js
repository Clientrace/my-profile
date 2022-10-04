
import styles from './icon.module.scss';


const Icon = ({src, url}) => {
  return (
    <>
      {url?<a href={url} target="_blank">
        <img src={src} className={styles['image']}/>
      </a>:<img src={src} className={styles['image']}/>}
    </>
  )
}

export default Icon;



