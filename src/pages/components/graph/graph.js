
import { GithubContributions } from "react-github-graph";
import styles from './graph.module.scss';

const Graph = () => {
  return (
    <div className={styles['graph']}>
      <GithubContributions username="Clientrace"/>
    </div>
  )
}

export default Graph;

