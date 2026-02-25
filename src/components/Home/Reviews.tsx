import Image from "next/image";

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      title: "Good Quality",
      description: "I highly recommend shopping from kicks",
      rating: 5,
      userImage: "https://randomuser.me/api/portraits/men/32.jpg",
      productImage: "/assets/home/reviews/review1.png",
    },
    {
      id: 2,
      title: "Good Quality",
      description: "I highly recommend shopping from kicks",
      rating: 5,
      userImage: "https://randomuser.me/api/portraits/women/44.jpg",
      productImage: "/assets/home/reviews/review2.png",
    },
    {
      id: 3,
      title: "Good Quality",
      description: "I highly recommend shopping from kicks",
      rating: 5,
      userImage: "https://randomuser.me/api/portraits/men/85.jpg",
      productImage: "/assets/home/reviews/review3.png",
    },
  ];

  return (
    <section className="bg-[#E7E7E3] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-extrabold text-[#232321]">REVIEWS</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            SEE ALL
          </button>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
            >
              {/* Text & User */}
              <div className="p-6 flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-[#232321] text-lg mb-1">
                    {review.title}
                  </h3>
                  <p className="text-[#232321] text-sm">{review.description}</p>
                  <div className="flex items-center mt-2 space-x-1 text-orange-400">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        className="w-5 h-5"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.287 3.957a1 1 0 00.95.69h4.164c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.034 9.384c-.783-.57-.38-1.81.588-1.81h4.165a1 1 0 00.95-.69l1.287-3.957z" />
                      </svg>
                    ))}
                    <span className="text-gray-900 font-semibold ml-2">
                      {review.rating}.0
                    </span>
                  </div>
                </div>
                <Image
                  src={review.userImage}
                  alt="User"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>

              {/* Product Image */}
              <div className="flex-1 overflow-hidden">
                <Image
                  src={review.productImage}
                  alt="Product"
                  width={500}
                  height={224}
                  className="w-full h-56 object-cover rounded-b-2xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
