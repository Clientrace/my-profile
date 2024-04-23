import { motion } from "framer-motion";
import { useRouter } from "next/router";


export const ProjectCard = ({
  name,
  imageUrl,
  platform,
  children,
  tech = [],
  year,
  linkoutUrl,
}) => {
  const router = useRouter();

  const renderTechIcons = () => {
    return (
      <div>
        {tech.map((data, idx) => {
          return (
            <img
              className="h-6"
              key={`proj-${idx}`}
              src={`/assets/${data}.svg`}
            />
          );
        })}
      </div>
    );
  };
  return (
    <motion.div
      onClick={() => {
        if (linkoutUrl) {
          router.push(linkoutUrl)
        }
      }}
      className="p-6 w-72 shadow-lg cursor-pointer"
      style={{ backgroundColor: "#222222" }}
    >
      <div className="flex space-x-2">
        <div className="w-full">
          <div className="w-12 h-fit rounded-full border border-solid border-color-white space-x-2">
            <img src={imageUrl} className="rounded-full w-12 h-12" />
          </div>
        </div>
        <div className="text-sm text-gray-200">{year}</div>
      </div>
      <div>
        <div className="text-xs text-gray-300 mt-2">{platform}</div>
        <div className="text-base text-white font-bold tracking-wide">
          {name}
        </div>
        <div className="mt-2 text-gray-200 text-sm h-20">
          {children}
          <div className="mt-2">
            <div className="mt-2">{renderTechIcons()}</div>
          </div>
        </div>
        <div className="flex text-white items-end justify-end h-12">
          <div className="text-sm">View Project</div>
        </div>
      </div>
    </motion.div>
  );
};
