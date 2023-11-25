import React from "react";
import { motion } from "framer-motion";

import Icon from "../../components/icon/icon";
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
      <div className={`${styles["mainSubtitle"]} -mt-2 sm:mt-0`}>
        <motion.h4 {...titleAnimation}>
          <div className="text-sm sm:text-lg">{subheadingText}</div>
        </motion.h4>
      </div>
      <div className="flex gap-x-2 align-center text-center justify-center">
        <Icon
          onHoverStart={() => setCmdText("> Jump to my facebook profile")}
          src="/assets/facebook.svg"
          url="https://web.facebook.com/kcpenaflor11"
          delay={animationFlag ? 5.2 : 0.1}
        />
        <Icon
          onHoverStart={() => setCmdText("> Jump to my github page")}
          src="/assets/github.svg"
          url="https://github.com/Clientrace"
          delay={animationFlag ? 5.4 : 0.2}
        />
        <Icon
          onHoverStart={() => setCmdText("> View my linkedin page")}
          src="/assets/linkedin.svg"
          url="https://www.linkedin.com/in/kcpenaflor"
          delay={animationFlag ? 5.6 : 0.3}
        />
        <Icon
          onHoverStart={() => setCmdText("> Visit my instagram")}
          src="/assets/instagram.svg"
          url="https://www.instagram.com/kcpenaflor/"
          delay={animationFlag ? 5.8 : 0.4}
        />
      </div>
    </div>
  );
};

export default Home;
