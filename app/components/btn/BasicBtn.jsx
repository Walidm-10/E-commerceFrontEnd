"use client";
import styles from "./BasicBtn.module.css";

export default function BasicBtn() {
  return (
    <div className={styles.btnContainer}>
      <button type="submit">Save</button>
    </div>
  );
}
