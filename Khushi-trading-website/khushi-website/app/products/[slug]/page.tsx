export default function ProductDetails() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold text-black">
          Product Details
        </h1>

        <p className="mt-6 text-gray-600 text-lg leading-8">
          This page is under development.
          <br />
          Detailed product information, catalogue download
          and WhatsApp enquiry will be available soon.
        </p>

        <a
          href="/products"
          className="inline-block mt-10 bg-black text-white px-8 py-4 rounded-xl hover:bg-yellow-500 hover:text-black transition"
        >
          Back to Products
        </a>
      </div>
    </main>
  );
}