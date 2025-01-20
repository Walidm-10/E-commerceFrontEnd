import Btn from "../Btn/Btn";
import styles from "./Banner.module.css";
import ImgBanner from "./Img/ImgBanner";
import TextAnim from "./TextAnim/TextAnim";

export default function Banner() {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerInfoContainer}>
        <TextAnim />
        <Btn url="/cart" />
      </div>
      <ImgBanner />
    </div>
  );
}
