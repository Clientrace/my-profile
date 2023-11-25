import styles from "./icon.module.scss";
import { motion } from "framer-motion";

const Icon = ({ src, url, delay, onHoverStart, size = "35px" }) => {
  return (
    <>
      {url ? (
        <motion.a whileHover={{ opacity: 0.3 }} href={url} target="_blank">
          <motion.img
            alt={url}
            onHoverStart={onHoverStart}
            initial={{ scale: 1.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.2 }}
            transition={{ delay: delay }}
            src={src}
            style={{ width: size }}
          />
        </motion.a>
      ) : (
        <motion.img src={src} alt="tech image" className={{ width: size }} />
      )}
    </>
  );
};

export default Icon;
