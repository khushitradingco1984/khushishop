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

    <section className="py-24 bg-black">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">          {stats.map((item) => (

            <div
              key={item.title}
              className="bg-white/5 backdrop-blur-md border border-yellow-500/30 rounded-3xl p-10 text-center hover:border-yellow-400 hover:-translate-y-2 transition duration-300 shadow-xl"
            >

              <h2 className="text-5xl font-extrabold text-yellow-400">
                {item.number}
              </h2>

              <p className="text-white text-xl mt-4 font-semibold">
                {item.title}
              </p>

            </div>

          ))}        </div>

      </div>

    </section>

  );
}