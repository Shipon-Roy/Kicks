"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";
import { useCart } from "@/context/CartContext";

export default function Navber() {
  const [open, setOpen] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const { cart } = useCart();

  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setProfileDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="  bg-[#E7E7E3] py-6 px-4 md:px-8">
      <div
        className="grid grid-cols-3 items-center bg-[#FAFAFA] text-[#232321] py-4 px-4 md:px-8 rounded-lg max-w-7xl mx-auto
        "
      >
        <div className="flex items-center gap-4">
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((s) => !s)}
            className="p-2 rounded-md hover:bg-gray-700 md:hidden"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          <ul className="hidden md:flex items-center gap-6">
            <li>
              <Link href="/new-drops">New Drops🔥</Link>
            </li>
            <li>
              <Link href="/#">Men</Link>
            </li>
            <li>
              <Link href="/#">Woment</Link>
            </li>
          </ul>
        </div>

        <div className="flex justify-center">
          <Link href="/">
            <h1 className="text-3xl text-[#232321] font-extrabold ">KICKS</h1>
          </Link>
        </div>

        <div className="flex justify-end items-center gap-2">
          <Link
            href="/#"
            className="hidden md:inline-flex p-2 rounded hover:bg-gray-700 hover:text-white"
          >
            <FiSearch className="w-5 h-5" />
          </Link>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setProfileDropdown(!profileDropdown)}
              className="inline-flex p-2 rounded hover:bg-gray-700 hover:text-white cursor-pointer"
            >
              {" "}
              <CgProfile className="w-6 h-6" />{" "}
            </button>
            <div
              className={`absolute right-0 mt-3 w-36 bg-white text-black rounded-xl shadow-xl overflow-hidden z-50
  transition-all duration-200 origin-top-right
  ${
    profileDropdown
      ? "opacity-100 scale-100 translate-y-0"
      : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
  }`}
            >
              <Link
                href="/login"
                className="block px-4 py-2 hover:bg-gray-100 transition"
                onClick={() => setProfileDropdown(false)}
              >
                Login
              </Link>

              <Link
                href="/signup"
                className="block px-4 py-2 hover:bg-gray-100 transition border-t"
                onClick={() => setProfileDropdown(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>

          <Link
            href="/order-summary"
            className="inline-flex md:inline-flex justify-center items-center p-4 w-6 h-6 rounded-full bg-[#FFA52F] text-black text-xl font-bold hover:bg-orange-500 transition"
          >
            {cart.length}
          </Link>
        </div>
      </div>

      <div className={`${open ? "block" : "hidden"} md:hidden pb-4`}>
        <ul className="flex flex-col gap-3 bg-gray-300 p-4 rounded-2xl text-white ">
          <li>
            <Link href="/new-drops">New Drops🔥</Link>
          </li>
          <li>
            <Link href="/#">Men</Link>
          </li>
          <li>
            <Link href="/#">Woment</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
