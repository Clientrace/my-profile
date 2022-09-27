
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

    </div>
  )
}

export default Home;


