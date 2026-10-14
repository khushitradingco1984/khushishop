export default function Stats() {
  const stats = [
    {
      number: "40+",
      title: "Years Experience",
    },
    {
      number: "2500+",
      title: "Projects Completed",
    },
    {
      number: "15000+",
      title: "Happy Customers",
    },
    {
      number: "500+",
      title: "Premium Products",
    },
  ];

  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <span className="text-sm uppercase tracking-[4px] text-yellow-400 font-semibold">
            Our Achievements
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Trusted Across India
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-400">
            Delivering premium tiles and interior solutions with quality,
            trust and professional service for more than four decades.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-yellow-500/20 bg-white/5 p-10 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:bg-white/10"
            >
              <h3 className="text-5xl font-extrabold text-yellow-400">
                {item.number}
              </h3>

              <p className="mt-4 text-lg font-semibold text-white">
                {item.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}