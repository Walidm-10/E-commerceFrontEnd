"use client";
import Axios from "@/app/components/Api/Api";
import { useEffect, useMemo, useRef, useState } from "react";
import Cookie from "cookie-universal";
import "../globals.css";
import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import { FaHeadphones } from "react-icons/fa";
import { FaRegRectangleXmark } from "react-icons/fa6";
import LogOut from "@/app/components/LogOut/LogOut";

export default function Login() {
  const cookie = Cookie();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [check, setCheck] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");
  // Check for token after the component mounts
  useEffect(() => {
    const token = cookie.get("Bearer");
    setIsLoggedIn(typeof token !== "undefined");
  }, []);

  //HandleChange
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  //Handle Submit
  async function handleSubmit(e) {
    setCheck(true);
    e.preventDefault();
    try {
      await Axios({
        url: `${process.env.NEXT_PUBLIC_LOGIN}`,
        method: "Post",
        data: form,
      })
        .then((res) => {
          if (res.data.error === true) {
            console.log(res);
            setError(res.data.message);
          }
          if (res.data.role === "ADMIN") {
            cookie.set("Bearer", res.data.data);
            window.location.pathname = "/dashboard";
          } else if (res.data.role === "GENERAL") {
            cookie.set("Bearer", res.data.data);
            window.location.pathname = "/";
          }
        })
        .catch((error) => console.log(error))
        .finally(() => setCheck(false));
    } catch (error) {
      console.log(error);
      setCheck(false);
    }
  }
  const memoForm = useMemo(
    () => (
      <form onSubmit={handleSubmit} className="signForm">
        <FaHeadphones className="iconLogo" />
        <h1>Login</h1>
        <div className="signDiv">
          <label htmlFor="email">
            <MdOutlineEmail className="icon" />
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            placeholder="Email..."
            onChange={handleChange}
            required
          />
        </div>
        <div className="signDiv">
          <label htmlFor="password">
            <FiLock className="icon" />
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={form.password}
            placeholder="Password..."
            onChange={handleChange}
            minLength={8}
            required
          />
        </div>
        <div className="btnsForm">
          <button
            disabled={check}
            type="submit"
            className="btn disabled:opacity-50 disabled:animate-pulse"
          >
            {check === true ? "Processing..." : "Login"}
          </button>
          <Link href="/register" className="goSign">
            or Sign Up
          </Link>
          <Link href="/" className="forget">
            forget password?
          </Link>
        </div>
        {error !== "" ? <div className="error">{error}</div> : ""}
      </form>
    ),
    [form, error, check]
  );
  return (
    <>
      {!isLoggedIn ? (
        <div className="signPage backdrop-blur-sm">
          <Link href="/" className="xIcon">
            <FaRegRectangleXmark />
          </Link>
          {memoForm}
        </div>
      ) : (
        <div>
          You Are Logged In...
          <LogOut />
        </div>
      )}
    </>
  );
}
