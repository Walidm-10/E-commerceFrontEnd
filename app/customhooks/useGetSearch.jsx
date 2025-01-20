"use client";
import { useContext, useEffect, useState } from "react";
import { searchContext } from "../context/searchContext";
import axios from "axios";

export default function useGetSearch() {
  const { search } = useContext(searchContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    if (search !== "") {
      let res = axios
        .get(`${process.env.NEXT_PUBLIC_SERVER_URL}search?${search}`)
        .then((res) => setData(res.data.data))
        .catch((error) => console.log(error));
    }
  }, [search]);
  return data;
}
