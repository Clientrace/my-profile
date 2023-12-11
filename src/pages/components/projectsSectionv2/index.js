import React, { useState } from "react";

import Name from "../animations/name/name";
import Heading from "../heading/heading";
import Divider from "../divider/divider";
import SectionWrapper from "../sectionWrapper";

import { ProjectCard } from "./components/projectCard";

const ProjectSection = ({ hoverAction, animationFlag }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <SectionWrapper hoverAction={hoverAction}>
      <Heading
        subtitle="Personal Projects/Pet Projects"
        description="Worked on a lot of pet projects, some are publicly viewable on my github account. Here are top 3 of my projects:"
        iconUrl="/assets/folder.svg"
        desc
      >
        {loaded || !animationFlag ? (
          "Projects"
        ) : (
          <Name
            text="Projects"
            initSpeed={200}
            teardown={() => setLoaded(true)}
          />
        )}
      </Heading>
      <Divider />
      <div className="flex flex-wrap w-full gap-2 scroll-smooth overflow-auto items-center justify-center">
        <ProjectCard
          name="Friday Chatbot"
          imageUrl="/assets/friday.png"
          platform="Facebook"
          year="2018"
          tech={["python"]}
        >
          A facebook messenger chatbot for answer simple search queries. Heavily
          relies on messenger API.
        </ProjectCard>
        <ProjectCard
          name="Pymicro"
          imageUrl="/assets/pymicro.png"
          platform="AWS Lambda"
          year="2022"
          tech={["python"]}
        >
          Serverless AWS Framework for creating API. Has it's own CLI for code
          scaffolding.
        </ProjectCard>
        <ProjectCard
          name="Inxscape"
          imageUrl="/assets/inxscape.png"
          platform="Web Application"
          year="2020"
          tech={["python"]}
        >
          Headless Web Content Management Tool that utilizes Markdown to
          generate content.
        </ProjectCard>
      </div>
    </SectionWrapper>
  );
};

export default ProjectSection;
