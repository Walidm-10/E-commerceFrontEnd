import { FaStar } from "react-icons/fa6";
import styles from "./Rate.module.css";

export default function Rate() {
  return (
    <div className={styles.cardRateContainer}>
      <FaStar color="green" fontSize={12} />
      <FaStar color="green" fontSize={12} />
      <FaStar color="green" fontSize={12} />
      <FaStar color="green" fontSize={12} />
      <FaStar color="green" fontSize={12} />
      <span className={styles.cardRate}>(121)</span>
    </div>
  );
}
