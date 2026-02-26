"use client";
import { useState } from "react";
import Container from "./Container";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";
import { useCart } from "@/context/CartContext";

export default function Navber() {
  const [open, setOpen] = useState(false);
  const { cart } = useCart();

  return (
    <div className="  bg-[#E7E7E3] py-6">
      <Container>
        <div
          className="grid grid-cols-3 items-center bg-[#FAFAFA] text-[#232321] py-4 px-10 rounded-lg 
        "
        >
          {/* Left: menu */}
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
                <Link href="/">New Drops🔥</Link>
              </li>
              <li>
                <Link href="/men">Men</Link>
              </li>
              <li>
                <Link href="/woment">Woment</Link>
              </li>
            </ul>
          </div>

          {/* Center: logo */}
          <div className="flex justify-center">
            <Link href="/">
              <h1 className="text-2xl text-[#232321] font-bold ">KICKS</h1>
            </Link>
          </div>

          {/* Right: icons */}
          <div className="flex justify-end items-center gap-3">
            <Link
              href="/#"
              className="hidden md:inline-flex p-2 rounded hover:bg-gray-700"
            >
              <FiSearch className="w-5 h-5" />
            </Link>

            <Link
              href="/profile"
              className="inline-flex p-2 rounded hover:bg-gray-700"
            >
              <CgProfile className="w-6 h-6" />
            </Link>
            <Link
              href="/order-summary"
              className="inline-flex md:inline-flex justify-center items-center p-4 w-6 h-6 rounded-full bg-[#FFA52F] text-black text-xl font-bold hover:bg-orange-500 transition"
            >
              {cart.length}
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${open ? "block" : "hidden"} md:hidden pb-4`}>
          <ul className="flex flex-col gap-3 bg-gray-300 p-4 rounded-2xl text-white ">
            <li>
              <Link href="/">New Drops🔥</Link>
            </li>
            <li>
              <Link href="/men">Men</Link>
            </li>
            <li>
              <Link href="/woment">Woment</Link>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}
