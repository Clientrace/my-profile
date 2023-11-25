import React, { useState } from "react";

import { motion } from "framer-motion";

import Name from "../animations/name/name";
import Heading from "../heading/heading";

const ProjectSection = ({ hoverAction, animationFlag }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <motion.div className="h-auto" onHoverStart={() => hoverAction()}>
      <div className="w-full">
        <Heading iconUrl="/assets/folder.svg">
          {loaded || !animationFlag ? (
            <div className="text-base sm:text-3xl">Projects</div>
          ) : (
            <div className="text-base sm:text-3xl">
              <Name
                text="Projects"
                initSpeed={200}
                teardown={() => setLoaded(true)}
              />
            </div>
          )}
        </Heading>
      </div>
    </motion.div>
  );
};

export default ProjectSection;
