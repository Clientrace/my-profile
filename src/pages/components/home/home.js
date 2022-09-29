
import Icon from '../../components/icon/icon';
import styles from './home.module.scss';

const Home = () => {
  return (
    <div className={styles['mainBody']}>
      <div className={styles['mainTitle']}>
        <h1>
          Kim Clarence Peñaflor
        </h1>
      </div>
      <div className={styles['mainSubtitle']}>
        <h4>
          <i>&lt; Full Stack Software Engineer /&gt;</i>
        </h4>
      </div>
      <div className={styles['socMed']}>
        <Icon src="/assets/facebook.svg" url="https://web.facebook.com/kcpenaflor11"/>
        <Icon src="/assets/github.svg" url="https://github.com/Clientrace"/>
        <Icon src="/assets/linkedin.svg" url="https://www.linkedin.com/in/kcpenaflor"/>
        <Icon src="/assets/instagram.svg" url="https://www.instagram.com/kcpenaflor/"/>
      </div>
    </div>
  )
}

export default Home;



