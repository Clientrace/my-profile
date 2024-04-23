import styles from "./icon.module.scss";
import { motion } from "framer-motion";

const Icon = ({ src, url, delay, onHoverStart, small = false }) => {
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
            className={small ? "w-4 h-4" : "w-8 h-8"}
            src={src}
          />
        </motion.a>
      ) : (
        <motion.img
          src={src}
          alt="tech image"
          className={small ? "w-4 h-4" : "w-8 h-8"}
        />
      )}
    </>
  );
};

export default Icon;
