
import Head from "next/head";
import Home from "../components/home/home";
import CMD from "../components/cmd/cmd";
import { useState } from "react";


const Projects = () => {
  const [cmdText, setCmdText] = useState("> Browse projects");
  const [cmdSticky, setCmdSticky] = useState(false);
  const [cmdAccessFlag, setCmdAccessFlag] = useState(false);
  const setInteractiveText = (text) => {
    if(cmdAccessFlag){
      setCmdText(text);
    }
  }

  return <div>
    <Head>
      <title>Projects</title>
    </Head>
    <Home
      headingText="Projects"
      subheadingText="<Tech Stuff & more/>"
      animationFlag={false}
      setCmdText={setInteractiveText}
      setCmdSticky={setCmdSticky}/>
    <CMD 
      showFlag={true}
      setAccessFlag={setCmdAccessFlag}
      cmdText={cmdText}
      sticky={cmdSticky}/>
    <div>

    </div>
  </div>
}

export default Projects;
