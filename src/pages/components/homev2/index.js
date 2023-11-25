import React from "react";
import { motion } from "framer-motion";

import Name from "../animations/name/name";
import styles from "./styles.module.scss";

const Home = ({
  headingText,
  subheadingText,
  setCmdText,
  setCmdSticky,
  animationFlag,
}) => {
  const titleAnimation = animationFlag && {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { delay: 5 },
  };

  return (
    <div
      className={`${styles["Main"]} flex w-full text-white justify-center align-center text-center flex-col`}
      style={{ height: "30vh" }}
    >
      <div className="tracking-wider">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onHoverStart={() => setCmdText("> Yep, that's my name")}
        >
          <div className="text-2xl sm:text-4xl">
            <Name text={headingText} initSpeed={300} />
          </div>
        </motion.h1>
      </div>
      <div className={styles["mainSubtitle"]}>
        <motion.h4 {...titleAnimation}>
          <div className="text-sm sm:text-lg">{subheadingText}</div>
        </motion.h4>
      </div>
    </div>
  );
};

export default Home;
