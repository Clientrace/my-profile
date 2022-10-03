
import styles from './subheading.module.scss';

const Subheading = ({children}) => {
  return (
    <h4 className={styles['subheading']}>
      { children }
    </h4>
  )
}

export default Subheading;


