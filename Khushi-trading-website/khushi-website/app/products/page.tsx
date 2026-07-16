export default function ProductDetails() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-black">
          Product Details
        </h1>

        <p className="mt-6 text-gray-600">
          This page is under development.
        </p>

        <a
          href="/products"
          className="inline-block mt-8 bg-black text-white px-6 py-3 rounded-xl"
        >
          Back to Products
        </a>
      </div>
    </main>
  );
}