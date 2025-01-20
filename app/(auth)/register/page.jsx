"use client";
import Axios from "@/app/components/Api/Api";
import { useEffect, useMemo, useState } from "react";
import Cookie from "cookie-universal";
import "../globals.css";
import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import { FaRegUser, FaHeadphones } from "react-icons/fa";
import { FaRegRectangleXmark } from "react-icons/fa6";

export default function Register() {
  const [check, setCheck] = useState(false);
  const [error, setError] = useState("");
  const cookie = Cookie();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
        url: `${process.env.NEXT_PUBLIC_REGISTER}`,
        method: "Post",
        data: form,
      })
        .then((res) => {
          console.log(res);
          if (res.data.error === true) {
            setError(res.data.message);
            return;
          }
          cookie.set("Bearer", res.data.data);
          if (res.data.role === "ADMIN") {
            window.location.pathname = "/dashboard";
          } else {
            window.location.pathname = "/";
          }
        })
        .finally(() => setCheck(false));
    } catch (error) {
      console.log(error);
    }
  }
  const memoForm = useMemo(
    () => (
      <form onSubmit={handleSubmit} className="signForm reg">
        <FaHeadphones className="iconLogo" />
        <h1>Sign UP</h1>
        <div className="signDiv">
          <label htmlFor="name">
            <FaRegUser className="icon" />
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            placeholder="Name..."
            onChange={handleChange}
            required
          />
        </div>
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
            required
          />
        </div>
        <div className="btnsForm">
          <button
            disabled={check}
            type="submit"
            className="btn disabled:opacity-50 disabled:animate-pulse"
          >
            {check === true ? "Processing..." : "Register"}
          </button>
          <Link href="/login" className="goSign">
            or Sign In
          </Link>
          <Link href="/" className="forget">
            forget password?
          </Link>
        </div>
        {error !== "" ? <div className="error">{error}</div> : ""}
      </form>
    ),
    [form, check, error]
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
        <div>You Are Logged In...</div>
      )}
    </>
  );
}
