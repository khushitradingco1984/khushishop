export default function Presence() {
  const cities = [
    "Delhi",
    "Jaipur",
    "Surat",
    "Ahmedabad",
    "Mumbai",
    "Lucknow",
    "Indore",
    "Bhopal",
    "Chandigarh",
    "Nagpur",
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[4px] text-yellow-600">
            PAN INDIA SUPPLY
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Serving Across India
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            Supplying premium tiles and interior products across major cities.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {cities.map((city) => (
            <div
              key={city}
              className="rounded-2xl border border-gray-200 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {city}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}