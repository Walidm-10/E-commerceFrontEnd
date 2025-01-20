"use client";
import { motion } from "framer-motion";
import styles from "./ImgBanner.module.css";

export default function ImgBanner() {
  return (
    <div className={styles.imgBannerContainer}>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={styles.imgBannerDiv}
      >
        <img src="/bannerimg.png" alt="Banner" className={styles.imgBanner} />
      </motion.div>
    </div>
  );
}
