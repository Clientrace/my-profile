import React, { useState } from "react";

import { motion } from "framer-motion";

import Name from "../animations/name/name";
import Heading from "../heading/heading";
import Divider from "../divider/divider";
import { ProjectCard } from "./components/projectCard";

const ProjectSection = ({ hoverAction, animationFlag }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <motion.div className="h-auto" onHoverStart={() => hoverAction()}>
      <div className="w-full">
        <Heading
          subtitle="Personal Projects/Pet Projects"
          description="I have worked on a lot of pet projects, some are publicly viewable on my github account. Here are top 3 of my projects:"
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
        <div className="flex flex-row gap-x-2">
          <ProjectCard
            name="Friday Chatbot"
            imageUrl="/assets/friday.png"
            platform="Facebook"
            tech={["python"]}
          >
            A facebook messenger chatbot for answer simple search queries.
            Heavily relies on messenger API.
          </ProjectCard>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectSection;
