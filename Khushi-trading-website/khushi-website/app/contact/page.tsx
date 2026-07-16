export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen">

      {/* Hero */}

      <section className="bg-black text-white py-24">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <p className="text-yellow-500 uppercase tracking-[4px] font-bold">
            CONTACT US
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold mt-5">
            Let's Build Your Next Project Together
          </h1>

          <p className="text-gray-300 text-xl mt-6 max-w-3xl mx-auto">
            Premium Tiles, Interior Products & Complete Building Solutions
            for Builders, Architects, Interior Designers and Dealers.
          </p>

        </div>

      </section>

      {/* Contact Section */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14">

          {/* Left */}

          <div>

            <h2 className="text-4xl font-bold text-black">
              Get In Touch
            </h2>

            <p className="text-gray-600 mt-5 leading-8">
              Contact us for product information,
              wholesale pricing and business enquiries.
            </p>

            <div className="space-y-6 mt-10">

              <div className="bg-gray-100 rounded-2xl p-5">
                <h3 className="font-bold text-black">
                  📍 Corporate Office
                </h3>

                <p className="text-gray-700 mt-2">
                  1122, Gram Sabha,
                  <br />
                  Pooth Kalan,
                  <br />
                  Rohini, Delhi - 110086
                </p>
              </div>

              <div className="bg-gray-100 rounded-2xl p-5">

                <h3 className="font-bold text-black">
                  📞 WhatsApp
                </h3>

                <a
                  href="https://wa.me/919354530349"
                  className="text-green-600 font-semibold"
                >
                  +91 93545 30349
                </a>

              </div>

              <div className="bg-gray-100 rounded-2xl p-5">

                <h3 className="font-bold text-black">
                  📧 Email
                </h3>

                <p className="text-gray-700">
                  khushitradinco1984@gmail.com
                </p>

              </div>

              <div className="bg-gray-100 rounded-2xl p-5">

                <h3 className="font-bold text-black">
                  🕒 Business Hours
                </h3>

                <p className="text-gray-700">
                  Monday - Saturday
                  <br />
                  09:00 AM - 08:00 PM
                </p>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="bg-gray-50 rounded-3xl shadow-xl p-8">

            <h2 className="text-3xl font-bold text-black">
              Request Quote
            </h2>

            <p className="text-gray-600 mt-3">
              Fill in your details and we'll get back to you shortly.
            </p>

            <form className="space-y-5 mt-8">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-xl p-4 outline-none focus:border-yellow-500"
              />

              <input
                type="tel"
                placeholder="WhatsApp Number"
                className="w-full border rounded-xl p-4 outline-none focus:border-yellow-500"
              />

              <textarea
                rows={5}
                placeholder="Your Requirement"
                className="w-full border rounded-xl p-4 outline-none focus:border-yellow-500"
              />

              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black py-4 rounded-xl font-bold transition"
              >
                Request Quote
              </button>

            </form>

          </div>

        </div>

      </section>

      {/* Google Map */}

      <section className="pb-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-black mb-10">
            Visit Our Corporate Office
          </h2>

          <div className="rounded-3xl overflow-hidden shadow-2xl border">

            <iframe
              src="https://www.google.com/maps?q=Pooth+Kalan+Rohini+Delhi+110086&output=embed"
              width="100%"
              height="450"
              loading="lazy"
            />

          </div>

        </div>

      </section>

    </main>
  );
}