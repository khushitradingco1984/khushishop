export default function HomePage() {
  const categories = [
    {
      title: "Designer Tiles",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Imported Tiles",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "LED Mirrors",
      image:
        "https://images.unsplash.com/photo-1616594039964-3b1efb4b8b2d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Wash Basins",
      image:
        "https://images.unsplash.com/photo-1622372738946-62e02505feb3?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Designer Highlighter",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Home Decoration",
      image:
        "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <main className="bg-white">

      {/* Categories */}

      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-bold text-center text-gray-900">
            Explore Our Categories
          </h2>

          <p className="text-center text-gray-500 mt-5 text-lg">
            Premium Interior Products For Luxury Living
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

            {categories.map((item) => (

              <div
                key={item.title}
                className="rounded-3xl overflow-hidden bg-white shadow-xl hover:-translate-y-2 hover:shadow-2xl duration-300"
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-72 object-cover"
                />

                <div className="p-7">

                  <h3 className="text-2xl font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mt-3 leading-7">
                    Premium quality products crafted with modern
                    design and luxury finishing.
                  </p>

                  <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-lg font-semibold text-black">
                    View Collection
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* About */}

      <section className="py-24 bg-gray-50">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold text-gray-900">
            About Khushi Trading Co.
          </h2>

          <p className="text-gray-600 text-lg leading-9 mt-10">

            Khushi Trading Co. is one of the trusted suppliers of
            premium designer tiles, imported tiles,
            LED mirrors, wash basins,
            designer highlighters,
            CNC stone work,
            aluminium profiles,
            SS profiles and complete
            interior finishing solutions.

            We proudly serve architects,
            builders,
            interior designers,
            dealers and homeowners across India.

          </p>

        </div>

      </section>
            {/* Why Choose Us */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center text-gray-900">
            Why Choose Us
          </h2>

          <p className="text-center text-gray-500 mt-5 text-lg">
            We deliver quality, trust and premium interior solutions.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

            {[
              {
                title: "Premium Quality",
                desc: "Top quality products with premium finishing.",
              },
              {
                title: "Latest Designs",
                desc: "Modern collections for luxury interiors.",
              },
              {
                title: "Pan India Supply",
                desc: "Reliable supply across major cities in India.",
              },
              {
                title: "Trusted Partner",
                desc: "Preferred choice of builders and designers.",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="bg-white rounded-3xl shadow-xl p-8 text-center hover:-translate-y-2 hover:shadow-2xl duration-300"
              >

                <div className="w-16 h-16 rounded-full bg-yellow-500 text-black flex items-center justify-center text-3xl mx-auto">
                  ★
                </div>

                <h3 className="text-2xl font-bold mt-6">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-7">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Featured Collection */}

      <section className="py-24 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center text-gray-900">
            Featured Collection
          </h2>

          <p className="text-center text-gray-500 mt-5 text-lg">
            Explore our premium collection for modern interiors.
          </p>

          <div className="grid lg:grid-cols-3 gap-8 mt-16">

            {[
              {
                title: "Luxury Designer Tiles",
                image:
                  "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=80",
              },
              {
                title: "Premium LED Mirrors",
                image:
                  "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80",
              },
              {
                title: "Modern Wash Basins",
                image:
                  "https://images.unsplash.com/photo-1622372738946-62e02505feb3?auto=format&fit=crop&w=1200&q=80",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="overflow-hidden rounded-3xl bg-white shadow-xl hover:-translate-y-2 hover:shadow-2xl duration-300"
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover"
                />

                <div className="p-8">

                  <h3 className="text-2xl font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mt-4 leading-7">
                    Elegant products crafted for luxury homes,
                    villas, hotels and commercial spaces.
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>
            {/* Our Projects */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center text-gray-900">
            Our Projects
          </h2>

          <p className="text-center text-gray-500 mt-5 text-lg">
            Premium products trusted by architects, builders and homeowners.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

            {[
              "Luxury Villas",
              "Modern Apartments",
              "Commercial Spaces",
            ].map((project) => (

              <div
                key={project}
                className="overflow-hidden rounded-3xl bg-white shadow-xl hover:-translate-y-2 hover:shadow-2xl duration-300"
              >

                <img
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
                  alt={project}
                  className="w-full h-72 object-cover"
                />

                <div className="p-8">

                  <h3 className="text-2xl font-bold">
                    {project}
                  </h3>

                  <p className="text-gray-600 mt-4 leading-7">
                    Premium tiles and interior products used in high-quality residential and commercial projects.
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Serving Across India */}

      <section className="py-24 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center">
            Serving Across India
          </h2>

          <p className="text-center text-gray-500 mt-5 mb-14">
            Supplying premium products across major cities.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">

            {[
              "Delhi",
              "Jaipur",
              "Ahmedabad",
              "Surat",
              "Mumbai",
              "Pune",
              "Lucknow",
              "Indore",
              "Hyderabad",
              "Bengaluru",
              "Ludhiana",
              "Chandigarh",
            ].map((city) => (

              <div
                key={city}
                className="bg-white rounded-xl shadow-md p-5 text-center font-semibold hover:bg-yellow-500 hover:text-white duration-300"
              >
                {city}
              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Contact CTA */}

      <section className="py-24 bg-black text-white">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold">
            Let's Build Something Beautiful Together
          </h2>

          <p className="text-gray-300 text-lg leading-8 mt-8">
            Looking for premium tiles, designer highlighters,
            LED mirrors, wash basins or complete interior solutions?
            Our team is ready to help you.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-12">

            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-xl font-semibold">
              Contact Us
            </button>

            <button className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-black duration-300">
              View Products
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}