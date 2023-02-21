
import { motion } from 'framer-motion';
import styles from './quote.module.scss';

const Quote = () => {
  return (
    <motion.div className={styles['container']}>
      <div className={styles['body']}>
        <div className={styles['quote']}>
          "Lorem ipsum dolorom"
        </div>
      </div>
    </motion.div>
  )
}

export default Quote;


