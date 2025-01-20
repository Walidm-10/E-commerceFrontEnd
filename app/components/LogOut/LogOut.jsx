"use client";
import Cookie from "cookie-universal";
export default function LogOut() {
  const cookie = Cookie();
  //Handle Log Out
  function handleLogOut() {
    cookie.remove("Bearer");
    window.location.pathname = "/";
  }
  return (
    <div>
      <button
        className="text-white w-full p-5 bg-black mt-2 rounded-md font-bold"
        onClick={handleLogOut}
      >
        Log Out
      </button>
    </div>
  );
}
