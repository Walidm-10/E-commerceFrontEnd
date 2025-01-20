"use client";
import axios from "axios";
import Cookie from "cookie-universal";

let cookie;
let token;
if (typeof window !== "undefined") {
  cookie = Cookie();
  token = cookie.get("Bearer");
}

const Axios = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
  headers: {
    Authorization: "Bearer " + token,
  },
});

export default Axios;
