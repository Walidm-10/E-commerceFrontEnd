"use client";
import Axios from "@/app/components/Api/Api";
import { countContext } from "@/app/context/countContext";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export default function Delete(props) {
  const url = `${process.env.NEXT_PUBLIC_DELETE_CART}`;
  const router = useRouter();
  const { setChange } = useContext(countContext);
  //Handle Delete
  async function handleDelete() {
    try {
      let res = await Axios({
        url: url,
        method: "post",
        data: { _id: props.id },
      });
      setChange((prev) => !prev);
      router.push("/cart");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div
      className="cursor-pointer text-gray-500 text-2xl hover:text-gray-700 duration-300 ease-in-out"
      onClick={handleDelete}
    >
      x
    </div>
  );
}
