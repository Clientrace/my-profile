
import TopNav from './components/topnav/topnav';
import Home from './components/home/home';
import Graph from './components/graph/graph';
import Bar from './components/animations/bar/bar';
import Projects from './components/projects/projects';
import Skills from './components/skills/skills';

const AppIndex = () => {
  return (
    <div>
      <Home/>
      <Projects/>
      <Skills/>
      {/* <Graph/> */}
    </div>
  )
}

export default AppIndex;
