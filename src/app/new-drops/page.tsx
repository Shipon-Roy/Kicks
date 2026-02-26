"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import AOS from "aos";
import "aos/dist/aos.css";

interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
}

const PRODUCTS_PER_PAGE = 12;

export default function NewDrops() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  console.log("data", products);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://api.escuelajs.co/api/v1/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      } finally {
        setLoading(false);
      }
    };

    AOS.init({ duration: 1000 });

    fetchProducts();
  }, []);

  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const selectedProducts = products.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE,
  );

  return (
    <section className="bg-gray-200 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex md:flex-row md:items-center md:justify-between mb-12 gap-6">
          <h2
            data-aos="fade-up"
            className="text-lg text-black md:text-6xl font-extrabold leading-tight"
          >
            DON’T MISS OUT <br /> NEW DROPS
          </h2>
        </div>

        {loading && (
          <p className="text-center text-gray-600">Loading products...</p>
        )}

        {!loading && (
          <>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {selectedProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  className="bg-white rounded-2xl p-2 shadow-sm hover:shadow-lg transition"
                >
                  <div className="relative bg-gray-100 rounded-xl h-40 md:min-h-64 overflow-hidden">
                    <span className="absolute top-0 left-0 bg-blue-600 text-white text-xs px-3 py-1 rounded-tl-3xl rounded-br-3xl z-10">
                      New
                    </span>

                    <Image
                      data-aos="zoom-in"
                      src={product.images?.[0]}
                      alt={product.title}
                      fill
                      className="object-contain p-4 rounded-2xl"
                    />
                  </div>

                  <h3 className="mt-6 text-[#232321] font-bold text-sm md:text-base uppercase leading-snug line-clamp-2">
                    {product.title}
                  </h3>

                  <button className="mt-4 w-full bg-[#232321] text-white py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition">
                    VIEW PRODUCT –
                    <span className="text-[#FFA52F]"> ${product.price}</span>
                  </button>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12 gap-2 flex-wrap">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    currentPage === index + 1
                      ? "bg-black text-white"
                      : "bg-white text-black hover:bg-gray-300"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
