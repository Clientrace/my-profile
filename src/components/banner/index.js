import styles from "./banner.module.scss";


const Banner = () => {
  return <div className={`${styles["container"]} flex w-full text-white justify-center align-center text-center flex-col`}>
    <div className="text-base text-white">
      Kim Clarence Peñaflor
    </div>
  </div>
}


export default Banner;

