"use client";
import { RiMenuFold2Line } from "react-icons/ri";
import styles from "./MenuBar.module.css";
import { useState } from "react";
import Link from "next/link";

export default function MenuBar() {
  const [open, setOpen] = useState(false);
  //Handle Click
  function handleClick() {
    setOpen((prev) => !prev);
  }
  return (
    <div className={styles.menuBar} onClick={handleClick}>
      <RiMenuFold2Line
        fontSize={20}
        className={`cursor-pointer duration-300 ${
          open === true ? "rotate-90 " : ""
        }`}
      />
      {open === true ? (
        <div className={styles.links}>
          <Link className={styles.link} href="/">
            Home
          </Link>
          <Link className={styles.link} href="/top">
            Top
          </Link>
          <Link className={styles.link} href="/about">
            About
          </Link>
          <Link className={styles.link} href="/login">
            Account
          </Link>
          <Link className={styles.link} href="/cart">
            Cart
          </Link>
          <Link className={styles.link} href="/categories">
            Categories
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
