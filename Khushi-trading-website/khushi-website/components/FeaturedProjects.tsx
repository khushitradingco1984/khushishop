export default function FeaturedProducts() {
  const products = [
    {
      icon: "🧱",
      title: "Designer Tiles",
      desc: "Luxury wall & floor tiles with modern designs.",
    },
    {
      icon: "🌍",
      title: "Imported Tiles",
      desc: "Premium imported collections for elegant interiors.",
    },
    {
      icon: "🪞",
      title: "LED Mirrors",
      desc: "Smart mirrors with stylish lighting and premium finish.",
    },
    {
      icon: "🚿",
      title: "Wash Basins",
      desc: "Designer wash basins for bathrooms and luxury spaces.",
    },
    {
      icon: "🪨",
      title: "CNC Stone Work",
      desc: "Custom stone cutting and decorative wall solutions.",
    },
    {
      icon: "✨",
      title: "Designer Highlighters",
      desc: "Decorative highlighter tiles for premium interiors.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-yellow-600 font-semibold uppercase tracking-widest">
            Our Collection
          </span>

          <h2 className="text-5xl font-bold text-black mt-4">
            Featured Products
          </h2>

          <p className="text-gray-600 text-lg mt-5">
            Premium Interior Products for Builders, Architects & Interior Designers
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {products.map((item) => (

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
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}