import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login.jsx";
import { useAuth } from "../context/Authprovider.jsx";

const Navbar = () => {
  
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  const [sticky, setSticky] = useState(false);

  // 🌙 Theme handler
  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  // 📌 Sticky navbar
  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navitem = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/course">Course</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/about">About</Link></li>
    </>
  );

  return (
    <div
      className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50
      ${sticky ? "shadow-md bg-base-200 transition-all duration-300" : "bg-base-100"}`}
    >
      <div className="navbar flex-nowrap">

        {/* LOGO */}
        <div className="navbar-start">
          <Link to="/" className="text-2xl font-bold cursor-pointer">
            Bookstore
          </Link>
        </div>

        {/* NAV LINKS */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            {navitem}
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="navbar-end flex items-center gap-3 flex-nowrap">

          <input
            type="search"
            placeholder="Search"
            className="input input-bordered w-40"
          />

          {/* THEME TOGGLE */}
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={() =>
                setTheme(theme === "dark" ? "light" : "dark")
              }
            />
            <span className="swap-on text-xl">🌙</span>
            <span className="swap-off text-xl">☀️</span>
          </label>

          {/* LOGIN */}
          <button
            className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 whitespace-nowrap"
            onClick={() =>
              document.getElementById("my_modal_3").showModal()
            }
          >
            Login
          </button>
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
