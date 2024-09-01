import styles from "./styles.module.scss";
import clsx from "clsx";

export const GenericLoader = ({ color = "gray" }) => {
  return <div className={clsx(styles["loader"], `text-${color}-100`)} />;
};
