import Home from "../components/homev2";
import Head from "next/head";

import { useInterval } from "../helper/delta-timer";
import { useEffect, useState } from "react";


import Quote from "../components/quotev2";
import Contact from "../components/contactv2";
import Skills from "../components/skillsv2";
import CMD from "../components/cmd/cmd";

import ProjectsSection from "../components/projectsSectionv2";

const AppIndex = () => {
  const [cmdSticky, setCmdSticky] = useState(false);
  const [commandFlag, setCommandFlag] = useState(false);
  const [cmdAccessFlag, setCmdAccessFlag] = useState(false);

  const [componentIdx, setComponentIdx] = useState(0);
  const [componentFlags, setComponentFlags] = useState([
    false,
    false,
    false,
    false,
  ]);

  const [init, setInit] = useState(false);
  const [initText, setInitText] = useState(
    "> Hello friend. Let me introduce myself."
  );
  const [cmdText, setCmdText] = useState("> Let there be light");
  const [compRenderDelay, setCompRenderDelay] = useState(6800);
  const [animationFlag, setAnimationFlag] = useState(true);

  useEffect(() => {
    const initFlag = sessionStorage.getItem("init") === "true";

    // check if recently visited
    const dateVisited = localStorage.getItem("visited");
    if (dateVisited) {
      setInitText("> Hi friend. Welcome back.");
    }

    if (initFlag) {
      const RELOAD_SPEED_REF_SEC = 600;
      const dtPrev = new Date(parseInt(dateVisited));
      const dtNow = new Date(Date.now());
      const dtElapsed = (dtNow - dtPrev) / 1000;

      if (dtElapsed) {
        // Reload too fast, don't load the animations
        console.log(dtElapsed);
        if (dtElapsed < RELOAD_SPEED_REF_SEC) {
          setComponentFlags([true, true, true, true]);
          setCmdText("> Hello");
          setCommandFlag(true);
          setAnimationFlag(false);
        } else {
          setAnimationFlag(true);
        }
      }
    }

    // save visit record
    localStorage.setItem("visited", Date.now());
    sessionStorage.setItem("init", "true");
    setInit(true);
  }, []);

  useInterval(() => {
    setCommandFlag(true);
  }, 4800);
  useInterval(() => {
    const compFlags = [...componentFlags];
    compFlags[componentIdx] = true;
    setComponentFlags(compFlags);
    setComponentIdx(componentIdx + 1);
    if (compFlags[0]) {
      setCompRenderDelay(2000);
    }
  }, compRenderDelay);

  const setInteractiveText = (text) => {
    if (cmdAccessFlag) {
      setCmdText(text);
    }
  };

  return (
    <div className="w-full">
      <Head>
        <title>Clarence Penaflor</title>
      </Head>
      {init && (
        <>
          <Home
            headingText="Kim Clarence Peñaflor"
            subheadingText="<Full Stack Software Engineer/>"
            animationFlag={animationFlag}
            setCmdText={setInteractiveText}
            setCmdSticky={setCmdSticky}
          />
          <CMD
            initText={initText}
            showFlag={commandFlag}
            setAccessFlag={setCmdAccessFlag}
            cmdText={cmdText}
            sticky={cmdSticky}
          />

          <div className="px-6 sm:px-20 md:px-40 py-4 sm:py-10">
            {componentFlags[3] && (
              <ProjectsSection
                animationFlag={animationFlag}
                hoverAction={() => setInteractiveText("> Browse my projects")}
              />
            )}
            {componentFlags[2] && (
              <Skills
                animationFlag={animationFlag}
                hoverAction={() =>
                  setInteractiveText("> Some of my technical skills")
                }
              />
            )}
            {componentFlags[1] && (
              <Contact
                animationFlag={animationFlag}
                hoverAction={() =>
                  setInteractiveText("> Contact me from any of that")
                }
                setCmdText={setInteractiveText}
              />
            )}

            {componentFlags[0] && <Quote setCmdText={setInteractiveText} />}
          </div>

          {/* {componentFlags[3] && (
            <ProjectsSection
              animationFlag={animationFlag}
              hoverAction={() => setInteractiveText("> Browse my projects")}
            />
          )}
          {componentFlags[2] && (
            <Skills
              animationFlag={animationFlag}
              hoverAction={() =>
                setInteractiveText("> Some of my technical skills")
              }
            />
          )}
          {componentFlags[1] && (
            <Contact
              animationFlag={animationFlag}
              hoverAction={() =>
                setInteractiveText("> Contact me from any of that")
              }
              setCmdText={setInteractiveText}
            />
          )} */}
          {/* {componentFlags[0] && <Quote setCmdText={setInteractiveText} />} */}
        </>
      )}
      {/* <Graph/> */}
    </div>
  );
};

export default AppIndex;
