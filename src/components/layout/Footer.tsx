"use client";

import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#E7E7E3] pt-10">
      <div className="max-w-7xl mx-auto  px-4">
        <div className="bg-[#4A69E2] rounded-3xl px-6 md:px-12 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="text-white max-w-xl ">
            <h2 data-aos="fade-up" className="text-2xl md:text-4xl font-bold">
              JOIN OUR KICKSPLUS <br /> CLUB & GET 15% OFF
            </h2>

            <p
              data-aos="fade-up"
              data-aos-duration="2000"
              className="mt-2 text-sm md:text-base text-[#E7E7E3]"
            >
              Sign up for free! Join the community.
            </p>

            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="mt-4 flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                placeholder="Email address"
                className="px-4 py-2 rounded-lg text-black border-2 border-blue-400 w-full sm:w-62.5"
              />
              <button className="bg-[#232321] text-white px-6 py-2 rounded-lg hover:bg-neutral-800 transition">
                SUBMIT
              </button>
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="text-white text-4xl md:text-6xl font-extrabold tracking-wide"
          >
            KICKS<span className="text-[#FFA52F]">+</span>
          </div>
        </div>

        <div className="relative min-h-120 bg-[#232321]  -mt-7.5 rounded-3xl px-6 md:px-12 pt-14 pb-20 overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            <div>
              <h3
                data-aos="fade-up"
                className="text-[#FFA52F] font-semibold text-lg mb-3"
              >
                About us
              </h3>
              <p
                data-aos="fade-up"
                data-aos-duration="2000"
                className="text-sm text-[#E7E7E3] leading-relaxed"
              >
                We are the biggest hyperstore in the universe. We got you all
                cover with our exclusive collections and latest drops.
              </p>
            </div>

            <div>
              <h3 className="text-[#FFA52F] font-semibold text-lg mb-3">
                Categories
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Runners</li>
                <li>Sneakers</li>
                <li>Basketball</li>
                <li>Outdoor</li>
                <li>Golf</li>
                <li>Hiking</li>
              </ul>
            </div>

            <div>
              <h3 className="text-[#FFA52F] font-semibold text-lg mb-3">
                Company
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>About</li>
                <li>Contact</li>
                <li>Blogs</li>
              </ul>
            </div>

            <div>
              <h3 className="text-[#FFA52F] font-semibold text-lg mb-3">
                Follow us
              </h3>

              <div className="flex gap-4 text-xl text-gray-300">
                <FaFacebook className="hover:text-white cursor-pointer" />
                <FaInstagram className="hover:text-white cursor-pointer" />
                <FaTwitter className="hover:text-white cursor-pointer" />
                <FaTiktok className="hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 md:bottom-10 left-0 w-full text-center pointer-events-none select-none translate-y-1/3 md:translate-y-1/2">
            <h1
              data-aos="fade-up"
              className="text-[80px] sm:text-[100px] md:text-[160px] lg:text-[220px] font-extrabold text-white tracking-widest whitespace-nowrap"
            >
              KICKS
            </h1>
          </div>
        </div>

        <div className="text-center text-sm text-gray-600 py-6">
          © All rights reserved
        </div>
      </div>
    </footer>
  );
}
