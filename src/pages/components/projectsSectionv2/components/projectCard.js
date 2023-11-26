import React from "react";
import { motion } from "framer-motion";

export const ProjectCard = ({
  name,
  imageUrl,
  platform,
  children,
  tech = [],
  linkoutUrl,
}) => {
  const renderTechIcons = () => {
    return (
      <div>
        {tech.map((data, idx) => {
          return <img key={`proj-${idx}`} src={`/assets/${data}.svg`} />;
        })}
      </div>
    );
  };
  return (
    <motion.div
      whileHover={{ opacity: 0.9 }}
      className="p-6 relative w-72 shadow-md cursor-pointer"
      style={{ backgroundColor: "#222222" }}
    >
      <div className="flex space-x-2">
        <div className="w-full">
          <div className="w-12 h-fit rounded-full border border-solid border-color-white space-x-2">
            <img src={imageUrl} className="rounded-full w-12 h-12" />
          </div>
        </div>
        <div className="text-sm text-gray-200">2018</div>
      </div>
      <div>
        <div className="text-xs text-gray-300 mt-2">{platform}</div>
        <div className="text-base text-white font-bold tracking-wide">
          {name}
        </div>
        <div className="mt-2 text-gray-200 text-sm">{children}</div>
        <div>{renderTechIcons()}</div>
      </div>
    </motion.div>
  );
};
