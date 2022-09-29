
import { motion } from 'framer-motion';
import styles from './bar.module.scss';

const Bar = () => {
  return (
    <motion.div className={styles['container']}>
      <motion.div className={styles['bar']}/>
      <motion.div className={styles['bar']}/>
      <motion.div className={styles['bar']}/>
      <motion.div className={styles['bar']}/>
      <motion.div className={styles['bar']}/>
    </motion.div>
  )
}

export default Bar;

