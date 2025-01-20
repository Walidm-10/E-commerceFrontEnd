"use client";
import { useMemo, useState } from "react";
import styles from "./CountProduct.module.css";
import { FaMinus, FaPlus } from "react-icons/fa6";
import ProductBtns from "../ProductBtns/ProductBtns";

export default function CountProduct({ id }) {
  const [count, setcount] = useState(1);
  const showMemo = useMemo(
    () => (
      <>
        <div className="flex items-center gap-2.5">
          <div className={styles.countContainer}>
            <FaMinus className="cursor-pointer" onClick={hanldeMinus} />
            <span className={styles.count}>{count}</span>
            <FaPlus className="cursor-pointer" onClick={handlePlus} />
          </div>
          <div>
            <span className="text-xs">
              Product
              <span className="text-green-500 text-xs"> Avaliable!</span>
            </span>
            <div className="text-xs">Don't miss it</div>
          </div>
        </div>
        <ProductBtns count={count} id={id} />
      </>
    ),
    [count]
  );
  // Handle Plus
  function handlePlus() {
    setcount((prev) => prev + 1);
  }
  // Handle Minus
  function hanldeMinus() {
    if (count > 1) {
      setcount((prev) => prev - 1);
    }
  }
  return showMemo;
}
