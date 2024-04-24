
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./s.module.scss";

const Surprise = () => {

  const [isOpened, setIsOpened] = useState(false);
  const [state, setState] = useState(0);

  const Test = () => {
    if (state === 0) {
      return <motion.div initial={{
        opacity: 0
      }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >

        <div className="w-full justify-center align-middle">
          <div className={styles["dot"]}>H</div>
          <div className={styles["dot"]}>A</div>
          <div className={styles["dot"]}>P</div>
          <div className={styles["dot"]}>P</div>
          <div className={styles["dot"]}>Y</div>
        </div>
        <div className="mt-4">
          <div>
            <b>Happy</b> <i className="text-sm">Adjective</i> [hap-ee]
          </div>
          <div className="text-sm w-34 mt-0.5">
            delighted, pleased, or glad, as over a particular thing:
            <p className="text-gray-600 italic">
              "I'm so happy to see you!"
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <button onClick={() => setState(1)} className="border border-gray-800 h-8 rounded-lg px-2 shadow-md text-sm">
            Another example
          </button>
        </div>
      </motion.div>
    }
    if (state === 1) {
      return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
        <div className={`${styles["dot2"]} font-bold`}>
          H A P P Y
        </div>
        <motion.div
          className="w-full flex text-center items-center justify-center text-base mt-1"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
          Anniversary, Babe Ley
        </motion.div>

        <motion.div className="w-full mt-4 justify-center text-center flex" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
          I L O V E Y O U
        </motion.div>

      </motion.div>
    }
  }

  return <div className="flex w-screen h-screen justify-center align-middle items-center bg-white">
    {!isOpened ?

      <div className="px-6">
        <div className="mb-3">
          Hi there! I have a surprise for you. Click 'LEARN' to learn something new.
        </div>
        <div className="flex items-center align-middle justify-center">
          <button onClick={() => setIsOpened(true)} className="border border-gray-800 h-12 rounded-lg px-3 shadow-md">
            LEARN
          </button>
        </div>
      </div>

      : <Test />}
  </div>
}


export default Surprise;


