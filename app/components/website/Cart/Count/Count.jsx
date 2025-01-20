"use client";
import Axios from "@/app/components/Api/Api";
import { useContext, useEffect, useState } from "react";
import styles from "./Count.module.css";
import { countContext } from "@/app/context/countContext";

export default function Count() {
  const url = `${process.env.NEXT_PUBLIC_COUNT_CART}`;
  const [count, setCount] = useState(0);
  const { change } = useContext(countContext);
  useEffect(() => {
    async function getCount() {
      try {
        let res = await Axios({
          url: url,
          method: "get",
        });
        setCount(res.data.data.count);
      } catch (error) {
        console.log(error);
      }
    }
    getCount();
  }, [count, change]);
  return count > 0 ? <div className={styles.count}>{count}</div> : "";
}
