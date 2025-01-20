"use client";
import { motion, animate } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./TextAnim.module.css";
import { useInView } from "react-intersection-observer";

export default function TextAnim() {
  const { ref, inView } = useInView({ triggerOnce: true });
  const baseText = "Grab Upto 50% Off On Selected HeadPhone";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (inView) {
      const controls = animate(0, baseText.length, {
        type: "tween",
        duration: 1,
        ease: "easeInOut",
        onUpdate: (latest) => {
          setDisplayText(baseText.slice(0, Math.round(latest)));
        },
      });

      return controls.stop;
    }
  }, [inView]);

  return (
    <span ref={ref} className={styles.bannerSpanContainer}>
      <motion.span>{displayText}</motion.span>
    </span>
  );
}
