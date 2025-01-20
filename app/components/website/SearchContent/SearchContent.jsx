"use client";
import useGetSearch from "@/app/customhooks/useGetSearch";
import Image from "next/image";
import styles from "./SearchContent.module.css";
import "../../globals.css";
import Link from "next/link";
import { useContext } from "react";
import { searchContext } from "@/app/context/searchContext";

export default function SearchContent() {
  const { search, setSearch } = useContext(searchContext);
  let res = useGetSearch();
  // Handle Click
  function handleClick() {
    setSearch("");
  }
  const showData = res?.map((data, index) => (
    <Link
      className={styles.cardSearch}
      key={index}
      href={`/product/${data._id}`}
      onClick={handleClick}
    >
      <div className={styles.imgSearch}>
        <Image
          src={data.productImage[0]}
          alt={data.productName}
          width={50}
          height={50}
          priority
        />
      </div>
      <div className={styles.info}>
        <span>{data.productName}</span>
        <span>{data.category}</span>
        <span>${data.sellingPrice}</span>
      </div>
    </Link>
  ));
  return search !== "" ? (
    res.length > 0 ? (
      <div className="searchContent">{showData}</div>
    ) : (
      <div className="searchEmpty">No Items Found...</div>
    )
  ) : (
    ""
  );
}
