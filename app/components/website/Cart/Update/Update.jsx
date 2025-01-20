"use client";

import usePost from "@/app/customhooks/usePost";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Update({ quantity, id }) {
  const url = `${process.env.NEXT_PUBLIC_UPDATE_CART}`;
  const { UsePost } = usePost();
  const router = useRouter();
  const [check, setCheck] = useState(false);
  async function handleMinus() {
    if (quantity > 1) {
      setCheck(true);
      await UsePost(url, id, quantity - 1);
      router.push("/cart");
      setCheck(false);
    }
  }
  async function handlePlus() {
    setCheck(true);
    await UsePost(url, id, quantity + 1);
    router.push("/cart");
    setCheck(false);
  }
  return (
    <div className="flex items-center  justify-around">
      <span
        className={
          quantity > 1 ? "cursor-pointer text-4xl" : "text-gray-300 text-4xl"
        }
        onClick={handleMinus}
      >
        -
      </span>
      <span className={check === true ? "animate-ping" : ""}>{quantity}</span>
      <span className="cursor-pointer text-xl" onClick={handlePlus}>
        +
      </span>
    </div>
  );
}
