import { motion } from "framer-motion";
import Heading from "../heading/heading";

const SectionWrapper = ({ hoverAction, children }) => {
  return (
    <motion.div
      className="h-auto my-4 sm:my-8 bg-white"
      onHoverStart={() => hoverAction()}
      whileHover={{ opacity: 1 }}
      style={{ opacity: 0.95 }}
    >
      <div className="w-full">{children}</div>
    </motion.div>
  );
};

export default SectionWrapper;
