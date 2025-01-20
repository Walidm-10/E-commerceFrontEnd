import Link from "next/link";
import styles from "./Btn.module.css";

export default function Btn(props) {
  return (
    <Link href={props.url} className={styles.btnBannerCotainer}>
      <button className={styles.btnBanner}>Buy Now</button>
    </Link>
  );
}
