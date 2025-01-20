import { AiFillAccountBook } from "react-icons/ai";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.innerFooterContainer}>
        <div className={styles.leftFooterContainer}>
          <div className={styles.headerLogoContainer}>
            <AiFillAccountBook color="rgb(197, 78, 167)" fontSize={35} />
            <span className={styles.logoHeader}>E-commerce</span>
          </div>
          <p>Stay in the loop and sign up for the Wardiere newsletter</p>
        </div>
        <div className={styles.footerLinks}>
          <div className={styles.footerLink}>
            <h4 className={styles.linkTitle}>Company</h4>
            <span>Home</span>
            <span>About</span>
            <span>Solutions</span>
            <span>Pricing</span>
            <span>Team</span>
          </div>
          <div className={styles.footerLink}>
            <h4 className={styles.linkTitle}>Documentation</h4>
            <span>Help Centre</span>
            <span>Contact</span>
            <span>FAQ</span>
            <span>Privacy Policy</span>
          </div>
          <div className={styles.footerLink}>
            <h4 className={styles.linkTitle}>Social</h4>
            <span>Facebook</span>
            <span>Instagram</span>
            <span>Youtube</span>
            <span>Twitter</span>
          </div>
        </div>
      </div>
      <div className={styles.bottomFooterContainer}>
        <div>
          <span>©All Rights Reserved 2024</span>
        </div>
        <div>
          <span>Terms & Conditions</span>
        </div>
      </div>
    </div>
  );
}
