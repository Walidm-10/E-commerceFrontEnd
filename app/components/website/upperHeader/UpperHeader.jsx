import styles from "./upperHeader.module.css";
import { FiPhone } from "react-icons/fi";

export default function UpperHeader() {
  return (
    <div className={styles.upperHeader}>
      <div className={styles.upperHeaderIcon}>
        <FiPhone />
        <span> +01111111111</span>
      </div>
      <div>
        <span>Get 50% Off on Selected Items | Shop Now</span>
      </div>
      <div>
        <span>Location: exampleST.</span>
      </div>
    </div>
  );
}
