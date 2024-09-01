import { useState } from "react";
import { motion } from "framer-motion";

import Head from "next/head";
import Home from "../../components/homev2";
import CMD from "../../components/cmd/cmd";

import styles from "./projects.module.scss";

import Heading from "../../components/heading/heading";
import Subheading from "../../components/subheading/subheading";
import Navigator from "../../components/navigator";

import Divider from "../../components/divider/divider";
import { ProjectCard } from "../../components/projectsSectionv2/components/projectCard";

const Projects = () => {
  const [cmdText, setCmdText] = useState("> Browse projects");
  const [cmdSticky, setCmdSticky] = useState(false);
  const [cmdAccessFlag, setCmdAccessFlag] = useState(false);
  const setInteractiveText = (text) => {
    if (cmdAccessFlag) {
      setCmdText(text);
    }
  };

  return (
    <div>
      <Head>
        <title>Projects</title>
      </Head>
      <Home
        headingText="Projects"
        subheadingText="<Tech Stuff & more/>"
        animationFlag={false}
        setCmdText={setInteractiveText}
        setCmdSticky={setCmdSticky}
      />
      <CMD
        showFlag={true}
        setAccessFlag={setCmdAccessFlag}
        cmdText={cmdText}
        sticky={cmdSticky}
      />
      <div className={styles["mainBodyContainer"]}>
        <div className={styles["body"]}>
          <Navigator index="/projects" />
          <Heading iconUrl="/assets/folder.svg">All projects</Heading>
          <div>
            <Subheading>Click a project to learn more about it</Subheading>
          </div>
          <Divider />
          <div className={styles[""]}>
            <div className={styles["projectList"]}>
              <ProjectCard
                linkoutUrl="/projects/friday-bot"
                name="Friday Chatbot"
                imageUrl="/assets/friday.png"
                platform="Facebook"
                year="2018"
                tech={["python"]}
              >
                A facebook messenger chatbot for answer simple search queries.
                Heavily relies on messenger API.
              </ProjectCard>
              <ProjectCard
                name="Pymicro"
                imageUrl="/assets/pymicro.png"
                platform="AWS Lambda"
                year="2022"
                tech={["python"]}
              >
                Serverless AWS Framework for creating API. Has it's own CLI for
                code scaffolding.
              </ProjectCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
