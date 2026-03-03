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

        // ✅ filter invalid images
        const validProducts = data.filter((p: Product) => p.images?.[0]);

        setProducts(validProducts);
      } catch (error) {
        console.error("Failed to fetch products", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="bg-[#E7E7E3] overflow-hidden py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 md:mb-12 gap-6">
            <h2
              data-aos="fade-up"
              className="text-2xl md:text-4xl font-extrabold leading-tight text-black"
            >
              DON’T MISS OUT <br /> NEW DROPS
            </h2>

            <Link
              href="/new-drops"
              data-aos="fade-left"
              className="w-fit bg-[#4A69E2] hover:bg-blue-700 transition text-white px-5 py-2 md:px-6 md:py-3 rounded-lg font-medium"
            >
              SHOP NEW DROPS
            </Link>
          </div>

          {loading && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-white rounded-2xl p-3 animate-pulse">
                  <div className="h-44 md:h-64 bg-gray-300 rounded-xl"></div>
                  <div className="h-4 bg-gray-300 mt-4 rounded"></div>
                  <div className="h-10 bg-gray-300 mt-4 rounded"></div>
                </div>
              ))}
            </div>
          )}

          {!loading && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-8">
              {products.slice(0, 4).map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  className="bg-white rounded-2xl p-3 shadow-sm hover:shadow-lg transition duration-300"
                >
                  {/* Image */}
                  <div className="relative bg-gray-100 rounded-xl h-44 md:h-64 overflow-hidden">
                    <span className="absolute top-0 left-0 bg-blue-600 text-white text-xs px-3 py-1 rounded-tl-3xl rounded-br-3xl z-10">
                      New
                    </span>

                    <Image
                      data-aos="zoom-in"
                      src={product.images[0]}
                      alt={product.title}
                      fill
                      sizes="(max-width:768px) 50vw, (max-width:1200px) 33vw, 25vw"
                      className="object-contain p-4"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 text-[#232321] font-bold text-xs sm:text-sm md:text-base uppercase leading-snug line-clamp-2 min-h-10">
                    {product.title}
                  </h3>

                  {/* Button */}
                  <button className="mt-4 w-full bg-[#232321] text-white py-2 md:py-3 rounded-lg text-xs sm:text-sm font-medium hover:bg-gray-800 transition cursor-pointer">
                    VIEW PRODUCT –
                    <span className="text-[#FFA52F] ml-1">
                      ${product.price}
                    </span>
                  </button>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
