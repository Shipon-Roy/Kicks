"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { FaHeart } from "react-icons/fa";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
}

export default function ProductDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [related, setRelated] = useState<Product[]>([]);
  const [selectedSize, setSelectedSize] = useState<number | null>(38);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const sizes = [38, 39, 40, 41, 42, 43, 44, 45, 46, 47];

  useEffect(() => {
    if (!params?.id) return;

    const fetchProduct = async () => {
      try {
        const res = await fetch(
          `https://api.escuelajs.co/api/v1/products/${params.id}`,
        );

        if (!res.ok) {
          throw new Error("Failed to fetch product");
        }

        const data: Product = await res.json();

        setProduct(data);

        const relatedRes = await fetch(
          "https://api.escuelajs.co/api/v1/products",
        );

        const relatedData: Product[] = await relatedRes.json();
        setRelated(relatedData);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchProduct();
  }, [params?.id]);

  const handleAddToCart = () => {
    if (!selectedSize || !product) {
      setToastMessage("Please select a size");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      return;
    }

    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      size: selectedSize,
      image: product.images[0] || "",
    });

    setToastMessage(`Added to cart! Size ${selectedSize}`);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleBuyNow = () => {
    if (!selectedSize) {
      setToastMessage("Please select a size");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      return;
    }

    addToCart({
      id: product?.id || 0,
      title: product?.title || "",
      price: product?.price || 0,
      size: selectedSize,
      image: product?.images[0] || "",
    });

    router.push("/order-summary");
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-[#E7E7E3] min-h-screen py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="grid grid-cols-2 gap-6">
            {product.images.slice(0, 4).map((img, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 flex items-center justify-center"
              >
                <Image
                  src={img}
                  alt={product.title}
                  width={400}
                  height={300}
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          <div>
            <span className="bg-indigo-500 text-white text-xs px-3 py-1 rounded-2xl">
              New Release
            </span>

            <h1 className="text-2xl text-[#232321] md:text-3xl font-bold mt-4 leading-snug">
              {product.title}
            </h1>

            <p className="text-indigo-600 text-xl font-semibold mt-3">
              ${product.price}
            </p>

            {/* Size */}
            <div className="mt-6">
              <div className="flex justify-between  items-center text-[#232321] mb-2">
                <h3 className="text-sm  font-semibold">SIZE</h3>
                <span className="text-xs underline cursor-pointer">
                  SIZE CHART
                </span>
              </div>

              <div className="grid grid-cols-5 sm:grid-cols-6 gap-3 mt-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 rounded-lg text-sm font-medium transition ${
                      selectedSize === size
                        ? "bg-[#232321] text-white"
                        : "bg-white text-[#232321]"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex justify-between items-center gap-3">
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-[#232321] text-white py-3 rounded-xl font-semibold hover:bg-neutral-800 transition"
                >
                  ADD TO CART
                </button>
                <button className="w-12 h-12 bg-[#232321] rounded-xl flex items-center justify-center shadow hover:bg-neutral-800 transition">
                  <FaHeart className="text-white" />
                </button>
              </div>

              <button
                onClick={handleBuyNow}
                className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
              >
                BUY IT NOW
              </button>
            </div>

            <div className="mt-10 text-sm text-gray-700 space-y-3">
              <h3 className="font-semibold">ABOUT THE PRODUCT</h3>
              <p>{product.description}</p>
            </div>
          </div>
        </div>

        {/* ===== Related Products ===== */}
        <div className="mt-20">
          <h2 className="text-2xl text-[#232321] md:text-3xl font-bold mb-8">
            You may also like
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {related.slice(0, 4).map((product) => (
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
                    src={product.images?.[0]}
                    alt={product.title}
                    fill
                    className="object-contain p-4 rounded-2xl"
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
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg animate-pulse">
          {toastMessage}
        </div>
      )}
    </div>
  );
}
