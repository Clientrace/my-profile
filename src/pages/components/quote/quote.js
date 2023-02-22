
import { motion } from 'framer-motion';
import styles from './quote.module.scss';

const Quote = () => {
  return (
    <motion.div className={styles['container']}>
      <div className={styles['body']}>
        <div className={styles['quote']}>
          <q>
            Any sufficiently advanced technology<br/> is indistinguishable from magic.
          </q>
        </div>
          <div className={styles['credit']}>
            - Arthur C.
          </div>
      </div>
    </motion.div>
  )
}

export default Quote;


