
import styles from './gauge.module.scss'
import { motion } from 'framer-motion';


const Gauage = ({percent}) => {
  return (
    <motion.div
      initial={{width: 0}}
      animate={{width: percent}}
      transition={{duration: 1}}
      className={styles['gauage']}/>
  )
}

export default Gauage;

