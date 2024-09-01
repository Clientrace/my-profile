import styles from "./styles.module.scss";

export const GenericLoader = ({ color = "gray" }) => {
  const loaderClassnames = `${styles["loader"]} text-${color}-100`;
  return <div className={loaderClassnames} />;
};
