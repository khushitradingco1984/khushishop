export default function WhyChoose() {
  const features = [
    {
      icon: "⭐",
      title: "Premium Quality",
      description:
        "High-quality tiles and interior products with elegant finishing.",
    },
    {
      icon: "🚚",
      title: "Pan India Supply",
      description:
        "Reliable supply network for projects across India.",
    },
    {
      icon: "💰",
      title: "Competitive Pricing",
      description:
        "Best wholesale pricing for builders, architects and dealers.",
    },
    {
      icon: "🏢",
      title: "Bulk Orders",
      description:
        "Special support for commercial, residential and bulk projects.",
    },
    {
      icon: "🤝",
      title: "Trusted Service",
      description:
        "Professional guidance and dependable customer support.",
    },
    {
      icon: "⏱️",
      title: "On-Time Delivery",
      description:
        "Fast and reliable delivery to keep your projects on schedule.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Why Choose Khushi Trading Co.?
          </h2>

          <p className="text-gray-600 text-lg mt-5 max-w-3xl mx-auto">
            Your trusted partner for premium tiles and interior solutions,
            delivering quality products, competitive pricing and dependable
            service for every project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {features.map((item) => (
            <div
              key={item.title}
              className="bg-white border rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <div className="text-5xl mb-5">{item.icon}</div>

              <h3 className="text-2xl font-bold text-black">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}