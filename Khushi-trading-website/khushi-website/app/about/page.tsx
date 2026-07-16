export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">

      {/* Hero */}
      <section className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <p className="text-yellow-500 uppercase tracking-[4px] font-bold">
            ABOUT US
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold mt-6">
            Khushi Trading Co.
          </h1>

          <p className="text-gray-200 text-xl mt-8 max-w-3xl mx-auto leading-9">
            Delivering premium tiles, sanitaryware, wash basins,
            LED mirrors and luxury interior products with trusted
            service, competitive pricing and reliable supply across India.
          </p>

        </div>
      </section>

      {/* Company */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80"
            alt="About"
            className="rounded-3xl shadow-2xl"
          />

          <div>

            <h2 className="text-4xl font-extrabold text-black">
              Your Trusted Interior Partner
            </h2>

            <p className="text-gray-800 text-lg leading-9 mt-8">
              Khushi Trading Co. is a trusted supplier of premium
              interior products including designer tiles,
              imported tiles, sanitaryware, LED mirrors,
              wash basins and decorative solutions.
            </p>

            <p className="text-gray-800 text-lg leading-9 mt-6">
              We proudly serve builders, architects,
              interior designers, tile showrooms,
              hardware dealers and commercial projects
              with quality products and dependable service.
            </p>

          </div>

        </div>

      </section>

      {/* Mission Section */}

      <section className="bg-gray-100 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition duration-300 p-8">

              <h3 className="text-3xl font-bold text-black">
                Our Mission
              </h3>

              <p className="text-gray-800 text-lg leading-8 mt-6">
                To deliver premium quality interior products
                with competitive pricing, trusted service
                and complete customer satisfaction.
              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition duration-300 p-8">

              <h3 className="text-3xl font-bold text-black">
                Our Vision
              </h3>

              <p className="text-gray-800 text-lg leading-8 mt-6">
                To become one of India's most trusted
                B2B suppliers for luxury tiles,
                sanitaryware and interior solutions.
              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition duration-300 p-8">

              <h3 className="text-3xl font-bold text-black">
                Our Strength
              </h3>

              <p className="text-gray-800 text-lg leading-8 mt-6">
                Strong dealer network,
                premium product range,
                timely delivery and
                long-term customer relationships.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-extrabold text-black">
            Let's Build Something Beautiful
          </h2>

          <p className="text-gray-800 text-xl mt-6">
            Contact us today for premium products,
            wholesale pricing and professional support.
          </p>

          <a
            href="/contact"
            className="inline-block mt-10 bg-yellow-500 hover:bg-yellow-600 text-black px-10 py-4 rounded-xl font-bold transition"
          >
            Contact Us
          </a>

        </div>

      </section>

    </main>
  );
}