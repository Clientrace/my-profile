import styles from "./subheading.module.scss";

const Subheading = ({ children }) => {
  return (
    <div className="items-center justify-center align-middle text-xs sm:text-base">
      {children}
    </div>
  );
};

export default Subheading;
