export default function WhoWeServe() {
  const clients = [
    {
      icon: "🏗️",
      title: "Builders",
      text: "Reliable bulk supply for residential, commercial and large-scale construction projects.",
    },
    {
      icon: "📐",
      title: "Architects",
      text: "Premium tiles and interior finishes for modern architectural designs.",
    },
    {
      icon: "🎨",
      title: "Interior Designers",
      text: "Luxury surface solutions to create elegant interior spaces.",
    },
    {
      icon: "🏪",
      title: "Tile Showrooms",
      text: "Wide range of premium products with wholesale supply support.",
    },
    {
      icon: "🔩",
      title: "Hardware Dealers",
      text: "Trusted business partner with quality products and competitive pricing.",
    },
    {
      icon: "🤝",
      title: "Contractors & Dealers",
      text: "Fast delivery, dependable stock availability and dedicated B2B support.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-yellow-600 font-semibold tracking-widest uppercase">
            Our Clients
          </span>

          <h2 className="text-5xl font-bold text-black mt-4">
            Who We Serve
          </h2>

          <p className="text-gray-600 text-lg mt-5 max-w-3xl mx-auto">
            Khushi Trading Co. proudly supplies premium interior products to
            professionals and businesses across India.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {clients.map((item) => (

            <div
              key={item.title}
              className="bg-white rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-8"
            >

              <div className="w-16 h-16 rounded-2xl bg-yellow-100 flex items-center justify-center text-4xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-black">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                {item.text}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}