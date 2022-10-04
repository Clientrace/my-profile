
import styles from './heading.module.scss';
import Icon from '../../components/icon/icon';

const Heading = ({children, iconUrl=null}) => {
  return (
    <h2 className={styles['heading']}>
      <Icon src={iconUrl?iconUrl:"/assets/block.svg"}/> { children }
    </h2>
  )
}

export default Heading;

