import { motion } from "framer-motion";
import Heading from "../heading/heading";

const SectionWrapper = ({ hoverAction, children }) => {
  return (
    <motion.div
      className="h-auto"
      onHoverStart={() => hoverAction()}
      style={{ opacity: 0.8 }}
    >
      <div className="w-full">{children}</div>
    </motion.div>
  );
};

export default SectionWrapper;
