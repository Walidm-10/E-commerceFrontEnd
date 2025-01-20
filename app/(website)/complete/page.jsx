"use client";
import { useEffect, useState } from "react";
import Axios from "@/app/components/Api/Api";
import Link from "next/link";

const url = `${process.env.NEXT_PUBLIC_DELETE_ALL_CART}`;
export default function CompletePage() {
  const [amount, setAmount] = useState(0);
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Ensure this runs only in the browser
      const searchParams = new URLSearchParams(window.location.search);
      const queryAmount = searchParams.get("amount"); // Get the "amount" parameter
      setAmount(queryAmount);
    }
    async function handleDelete() {
      try {
        await Axios({
          url: url,
          method: "post",
        });
      } catch (error) {
        console.log(error);
      }
    }
    handleDelete();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-blue-500 to-purple-500">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2 animate-bounce">
          Thank you!
        </h1>
        <h2 className="text-2xl">You successfully sent</h2>
        <div className="bg-white p-2 rounded-md text-purple-500 mt-5 text-4xl font-bold">
          ${amount}
        </div>
        <Link
          href="/"
          className="mt-5 font-bold flex items-center gap-1.5 hover:text-gray-800 duration-300 ease-in-out"
        >
          <span>{"<"}</span>
          <span>Continue Shopping</span>
        </Link>
      </div>
    </div>
  );
}
