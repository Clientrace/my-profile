import React from "react";
import Banner from "../banner";
import { motion } from "framer-motion";

export const PageLoadWrapper = ({ title, children }) => {
  return (
    <>
      <Banner route={title} />
      <motion.div
        className="mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    </>
  );
};
