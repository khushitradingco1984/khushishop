import Link from "next/link";

const products = [
  {
    title: "Designer Tiles",
    image: "/products/designer-tiles.jpg",
  },
  {
    title: "Imported Tiles",
    image: "/products/imported-tiles.jpg",
  },
  {
    title: "LED Mirror",
    image: "/products/led-mirror.jpg",
  },
  {
    title: "Wash Basin",
    image: "/products/wash-basin.jpg",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[4px] text-yellow-600">
            Our Collection
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Premium Products
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            Discover our premium range of tiles, mirrors, wash basins and
            interior products designed for modern spaces.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.title}
              className="overflow-hidden rounded-2xl border bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="h-64 bg-gray-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {product.title}
                </h3>

                <Link
                  href="/products"
                  className="mt-5 inline-block rounded-lg bg-black px-5 py-3 text-white transition hover:bg-yellow-500 hover:text-black"
                >
                  View Collection
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/products"
            className="rounded-xl bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:bg-yellow-400"
          >
            Explore All Products
          </Link>
        </div>
      </div>
    </section>
  );
}