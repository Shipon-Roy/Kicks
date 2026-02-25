"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
}

export default function NewDrops() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

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

    fetchProducts();
  }, []);

  return (
    <section className="bg-gray-200 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex md:flex-row md:items-center md:justify-between mb-12 gap-6">
          <h2 className="text-lg text-black md:text-6xl font-extrabold leading-tight">
            DON’T MISS OUT <br /> NEW DROPS
          </h2>

          <button className="bg-[#4A69E2] hover:bg-blue-700 transition text-white px-3 py-2 md:px-6 md:py-3 rounded-lg font-medium">
            SHOP NEW DROPS
          </button>
        </div>

        {/* Loading */}
        {loading && (
          <p className="text-center text-gray-600">Loading products...</p>
        )}

        {!loading && (
          <div className="grid  grid-cols-2 lg:grid-cols-4 gap-8">
            {products.slice(0, 4).map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="bg-white rounded-2xl p-2 shadow-sm hover:shadow-lg transition"
              >
                <div className="relative bg-gray-100 rounded-xl h-64 overflow-hidden">
                  <span className="absolute top-0 left-0 bg-blue-600 text-white text-xs px-3 py-1 rounded-tl-3xl rounded-br-3xl z-10">
                    New
                  </span>

                  <Image
                    src={product.images?.[0]}
                    alt={product.title}
                    fill
                    className="object-contain p-6 rounded-2xl"
                  />
                </div>

                <h3 className="mt-6 text-[#232321] font-bold text-sm md:text-base uppercase leading-snug">
                  {product.title}
                </h3>

                <button className="mt-4 w-full bg-[#232321] text-white py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition">
                  VIEW PRODUCT –{" "}
                  <span className="text-[#FFA52F]">${product.price}</span>
                </button>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
