"use client";
import { useContext, useMemo } from "react";
import styles from "./Search.module.css";
import { GoSearch } from "react-icons/go";
import { searchContext } from "@/app/context/searchContext";
import "../../globals.css";

export default function SearchBar() {
  const { search, setSearch } = useContext(searchContext);
  //HandleChange
  function handleChange(e) {
    setSearch(e.target.value);
  }
  const showMemo = useMemo(
    () => (
      <div className={styles.searchBarContainer}>
        <input
          id="search"
          name="search"
          type="text"
          placeholder="Search Product"
          value={search}
          onChange={handleChange}
          className={`searchBar ${styles.searchBarInput}`}
        />
        <GoSearch className={styles.searchIcon} />
      </div>
    ),
    [search]
  );
  return showMemo;
}
