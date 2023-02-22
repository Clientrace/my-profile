
import Head from "next/head";
import Home from "../components/home/home";
import CMD from "../components/cmd/cmd";


const Projects = () => {
  return <div>
    <Head>
      <title>Projects</title>
    </Head>
    <Home
      headingText="Projects"
      subheadingText="<tech stuff & more/>"/>
    <CMD 
      initText={initText}
      showFlag={commandFlag}
      setAccessFlag={setCmdAccessFlag}
      cmdText={cmdText}
      sticky={cmdSticky}/>
  </div>
}

export default Projects;
