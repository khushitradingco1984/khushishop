import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/hero-bg.jpg')", // Place a premium tile image in /public
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center text-white">
        <span className="inline-block rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm tracking-[3px] uppercase backdrop-blur">
          Premium Tiles & Interior Solutions
        </span>

        <h1 className="mt-6 text-5xl font-bold leading-tight md:text-7xl">
          Khushi Trading Co.
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-200 md:text-xl">
          Premium Designer Tiles, Highlighters, LED Mirrors, Wash Basins,
          Table Tops & Complete Interior Solutions with Pan India Supply.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
          <Link
            href="/products"
            className="rounded-lg bg-yellow-400 px-8 py-4 font-semibold text-black transition hover:bg-yellow-300"
          >
            Explore Products
          </Link>

          <Link
            href="/contact"
            className="rounded-lg border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-black"
          >
            Contact Us
          </Link>
        </div>

        {/* Trust Badges */}
        <div className="mt-14 grid grid-cols-2 gap-6 text-center md:grid-cols-4">
          <div>
            <h3 className="text-3xl font-bold">15+</h3>
            <p className="text-gray-300">Product Categories</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">200+</h3>
            <p className="text-gray-300">Premium Designs</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">Pan India</h3>
            <p className="text-gray-300">Supply Network</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">Quality</h3>
            <p className="text-gray-300">Trusted Products</p>
          </div>
        </div>
      </div>
    </section>
  );
}