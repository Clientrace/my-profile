
import styles from './icon.module.scss';
import { motion } from 'framer-motion';


const Icon = ({src, url, delay}) => {
  return (
    <>
      {url?<a href={url} target="_blank">
        <motion.img
          initial={{scale: 1.3, opacity: 0}}
          animate={{scale: 1, opacity: 1}}
          whileHover={{scale: 1.2}}
          transition={{delay: delay}}
          src={src} className={styles['image']}/>
      </a>:<motion.img src={src} className={styles['image']}/>}
    </>
  )
}

export default Icon;



