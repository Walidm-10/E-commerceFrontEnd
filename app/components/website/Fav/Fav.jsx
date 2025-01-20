"use client";
import { useEffect, useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

export default function Fav(props) {
  const id = props.id;
  const [fav, setFav] = useState(false);

  let itemsFav = "";
  useEffect(() => {
    itemsFav = window.localStorage.getItem("fav");
    if (itemsFav !== "") {
      const check = window.localStorage.getItem(`${id}`);
      if (check) {
        setFav(true);
      } else {
        setFav(false);
      }
    }
  }, [fav]);

  //Handle Click
  function handleClick() {
    window.localStorage.setItem(`${id}`, id);
    setFav(true);
  }
  //Handle Delete
  function handleDelete() {
    window.localStorage.removeItem(`${id}`);
    setFav(false);
  }
  return fav === true ? (
    <FaHeart color="red" onClick={handleDelete} />
  ) : (
    <FaRegHeart onClick={handleClick} />
  );
}
