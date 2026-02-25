"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Category {
  id: number;
  name: string;
  image: string;
  slug: string;
}

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("https://api.escuelajs.co/api/v1/categories");
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error("Failed to fetch categories", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen bg-black text-white">
        Loading...
      </div>
    );

  const featured = categories.slice(0, 2);

  return (
    <section className="bg-[#121212] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-white text-4xl font-extrabold tracking-wide">
            CATEGORIES
          </h2>

          <div className="flex space-x-3">
            <button className="w-10 h-10 bg-gray-700 hover:bg-gray-600 text-white rounded-md flex items-center justify-center text-2xl">
              ‹
            </button>
            <button className="w-10 h-10 bg-white hover:bg-gray-200 text-black rounded-md flex items-center justify-center text-2xl">
              ›
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {featured.map((cat, index) => (
            <div
              key={cat.id}
              className={`relative w-full h-120 overflow-hidden cursor-pointer group ${
                index === 0 ? "rounded-tl-4xl " : ""
              }`}
            >
              <div className="absolute inset-0 grid grid-cols-2 justify-end ">
                <div className="bg-[#ECEEF0]" />
                <div className="bg-[#F6F6F6]" />
              </div>

              <div className="absolute inset-0 flex items-center justify-end pointer-events-none">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  width={500}
                  height={300}
                  className="object-contain w-[80%] transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute bottom-5 left-8 right-8 flex justify-between items-center z-10">
                  <h3 className="text-3xl font-extrabold text-[#1c1c1c] leading-tight">
                    {cat.name}
                  </h3>
                  <button className="w-10 h-10 bg-[#1c1c1c] text-white rounded-md flex items-center justify-center transition-colors hover:bg-gray-800">
                    ↗
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
