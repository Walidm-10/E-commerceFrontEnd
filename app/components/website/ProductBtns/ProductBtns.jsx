"use client";
import usePost from "@/app/customhooks/usePost";
import styles from "./ProductBtns.module.css";
import Link from "next/link";
import { useContext, useState } from "react";
import { countContext } from "@/app/context/countContext";

export default function ProductBtns({ count, id }) {
  const [loading, setLoading] = useState(false);
  const url = `${process.env.NEXT_PUBLIC_ADD_CART}`;
  const urlUpdate = `${process.env.NEXT_PUBLIC_UPDATE_CART}`;
  const { UsePost } = usePost();
  const { setChange } = useContext(countContext);
  //Handle AddCart
  async function handleAddCart() {
    setLoading(true);
    let res = await UsePost(url, id, count);
    if (typeof res !== "undefined") {
      const quantity = count + res.quantity;
      await UsePost(urlUpdate, res._id, quantity);
    }
    setChange((prev) => !prev);
    setLoading(false);
  }
  return (
    <div className={styles.btnsContainer}>
      <Link href="/cart">
        <button disabled={loading} className={styles.btnBuy}>
          Buy Now
        </button>
      </Link>
      <button
        disabled={loading}
        className={`${styles.btn} disabled:opacity-50 disabled:animate-pulse`}
        onClick={handleAddCart}
      >
        {loading === true ? "Processing..." : "Add to Cart"}
      </button>
    </div>
  );
}
