
import { motion } from "framer-motion";
import styles from './cmd.module.scss';
import Name from "../animations/name/name";


const CMD = ({initText="", showFlag=true, setAccessFlag, cmdText="", sticky=false}) => {
  return <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 0.2}}
    className={styles[sticky?"command-sticky":"command"]}>
    { showFlag ? <Name text={cmdText}
                    initSpeed={100}
                    refSpeed={60}
                    teardown={()=>setAccessFlag(true)}/>: initText}
  </motion.div>
}

export default CMD;

