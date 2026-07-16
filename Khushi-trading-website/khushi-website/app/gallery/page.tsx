export default function GalleryPage() {
  const gallery = [
    {
      title: "Designer Tiles",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "LED Mirror",
      image:
        "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Wash Basin",
      image:
        "https://images.unsplash.com/photo-1622372738946-62e02505feb3?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Imported Tiles",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Luxury Bathroom",
      image:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Modern Living Space",
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <main className="bg-white min-h-screen">

      <section className="bg-black text-white py-24">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold">
            Our Gallery
          </h1>

          <p className="mt-6 text-gray-300 text-xl">
            Premium Interior Products & Luxury Installations
          </p>

        </div>

      </section>

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {gallery.map((item) => (

              <div
                key={item.title}
                className="group overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              >

                <div className="overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
                  />

                </div>

                <div className="p-6">

                  <h3 className="text-2xl font-bold text-black">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mt-3 leading-7">
                    Premium quality interior products with elegant
                    finishing for luxury homes, hotels and commercial
                    spaces.
                  </p>

                  <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-xl font-semibold transition">
                    View Image
                  </button>

                </div>

              </div>

            ))}
                      </div>

        </div>

      </section>

    </main>
  );
}