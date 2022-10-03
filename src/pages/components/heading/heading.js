
import styles from './heading.module.scss';
import Icon from '../../components/icon/icon';

const Heading = ({children}) => {
  return (
    <h2 className={styles['heading']}>
      <Icon src="/assets/block.svg"/> { children }
    </h2>
  )
}

export default Heading;

