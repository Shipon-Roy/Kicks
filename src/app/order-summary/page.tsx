"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaHeart, FaTrash } from "react-icons/fa";

export default function OrderSummaryPage() {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, clearCart } =
    useCart();
  const router = useRouter();
  const [showSuccess, setShowSuccess] = useState(false);
  const [promoCode, setPromoCode] = useState("");

  const subtotal = getTotalPrice();
  const shipping = cart.length > 0 ? 6.99 : 0;
  const discount = promoCode === "SAVE10" ? subtotal * 0.1 : 0;
  const total = subtotal + shipping - discount;

  const handleCheckout = () => {
    if (cart.length === 0) return;

    setShowSuccess(true);
    setTimeout(() => {
      clearCart();
      router.push("/");
    }, 2000);
  };

  if (cart.length === 0 && !showSuccess) {
    return (
      <div className="bg-[#E7E7E3] min-h-screen py-10 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-gray-600 mb-8">
              Add items to your cart to proceed with checkout
            </p>
            <Link
              href="/"
              className="inline-block bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#E7E7E3] min-h-screen">
      {/* Banner */}
      <div className="bg-gray-200 py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Saving to celebrate
          </h2>
          <p className="text-gray-700 mt-2">
            Enjoy up to 60% off thousands of styles during the End of Year sale
            - while supplies last. No code needed.
          </p>
          <div className="mt-3">
            <Link
              href="/"
              className="text-blue-600 font-semibold hover:underline"
            >
              Join us
            </Link>
            <span className="text-gray-700 mx-2">or</span>
            <Link
              href="/"
              className="text-blue-600 font-semibold hover:underline"
            >
              Sign-in
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-10 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Your Bag Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Your Bag
              </h1>
              <p className="text-gray-600 mb-6">
                Items in your bag not reserved- check out now to make them
                yours.
              </p>

              <div className="space-y-6">
                {cart.map((item) => (
                  <div
                    key={`${item.id}-${item.size}`}
                    className="flex gap-6 pb-6 border-b border-gray-200"
                  >
                    <div className="relative w-40 h-40 bg-gray-100 rounded-lg overflow-hidden shrink-0">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain p-4"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 uppercase">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-1">
                        Men&apos;s Road Running Shoes
                      </p>
                      <p className="text-gray-600 mb-4">
                        Enamel Blue / University White
                      </p>

                      <div className="flex items-center gap-8">
                        <div>
                          <label className="text-sm font-semibold text-[#232321] block mb-2">
                            Size {item.size}
                          </label>
                          <select
                            value={item.size}
                            onChange={(e) =>
                              updateQuantity(
                                item.id,
                                parseInt(e.target.value),
                                item.quantity,
                              )
                            }
                            className="text-[#232321] border border-[#232321] rounded-lg px-3 py-2 text-sm"
                          >
                            {[38, 39, 40, 41, 42, 43, 44, 45, 46, 47].map(
                              (size) => (
                                <option key={size} value={size}>
                                  {size}
                                </option>
                              ),
                            )}
                          </select>
                        </div>

                        <div>
                          <label className="text-sm font-semibold text-[#232321] block mb-2">
                            Quantity {item.quantity}
                          </label>
                          <select
                            value={item.quantity}
                            onChange={(e) =>
                              updateQuantity(
                                item.id,
                                item.size,
                                parseInt(e.target.value),
                              )
                            }
                            className="text-[#232321] border border-[#232321] rounded-lg px-3 py-2 text-sm"
                          >
                            {[1, 2, 3, 4, 5].map((qty) => (
                              <option key={qty} value={qty}>
                                {qty}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="ml-auto text-right">
                          <p className="text-2xl font-bold text-blue-600 mb-4">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                          <div className="flex gap-4">
                            <button className="text-gray-600 hover:text-red-600 transition">
                              <FaHeart size={20} />
                            </button>
                            <button
                              onClick={() => removeFromCart(item.id, item.size)}
                              className="text-gray-600 hover:text-red-600 transition"
                            >
                              <FaTrash size={20} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary Card */}
          <div className="lg:col-span-1">
            <div className="bg-[#E7E7E3] rounded-lg p-8 sticky top-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Order Summary
              </h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span>
                    {cart.length} ITEM{cart.length !== 1 ? "S" : ""}
                  </span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Delivery</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                {promoCode === "SAVE10" && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-gray-700">
                  <span>Sales Tax</span>
                  <span>-</span>
                </div>
              </div>

              <div className="border-t border-b border-gray-200 py-4 mb-6">
                <div className="flex justify-between text-xl font-bold text-gray-900">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full bg-black text-white py-3 rounded-lg font-bold hover:bg-gray-800 transition mb-4"
              >
                CHECKOUT
              </button>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm font-semibold text-gray-900 mb-3">
                  User a promo code
                </p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                    placeholder="Enter code"
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  />
                  <button className="bg-gray-300 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-400 transition">
                    Apply
                  </button>
                </div>
                {promoCode === "SAVE10" && (
                  <p className="text-xs text-green-600 mt-2">
                    ✓ Promo code applied!
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-[#E7E7E3] bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-8 text-center max-w-md w-full shadow-xl">
            <div className="text-6xl mb-4">✓</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Order Placed!
            </h2>
            <p className="text-gray-600 mb-6">
              Your order has been successfully placed. Redirecting to home...
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
