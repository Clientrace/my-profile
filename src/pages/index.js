
import TopNav from './components/topnav/topnav';
import Home from './components/home/home';
import Graph from './components/graph/graph';
import Bar from './components/animations/bar/bar';

const AppIndex = () => {
  return (
    <div>
      <TopNav/>
      <Home/>
      <Bar/>
      {/* <Graph/> */}
    </div>
  )
}

export default AppIndex;
