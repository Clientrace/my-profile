import styles from "./banner.module.scss";


const Banner = ({ route }) => {
  return <div className={`${styles["container"]} flex w-full text-white justify-center align-center text-center flex-col`}>
    <div className="text-base text-white font-bold">
      Kim Clarence Peñaflor
    </div>
    <div className="mt-1 text-sm">
      {route}
    </div>
  </div>
}


export default Banner;

