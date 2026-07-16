import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-20">

      {/* Top Footer */}

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Company */}

        <div>

          <h2 className="text-3xl font-bold text-yellow-400">
            Khushi Trading Co.
          </h2>

          <p className="text-gray-400 mt-6 leading-8">
            Premium Designer Tiles, Imported Tiles,
            LED Mirrors, Wash Basins, CNC Stone Work
            and Complete Interior Solutions for
            Builders, Architects, Interior Designers
            and Dealers.
          </p>

        </div>

        {/* Quick Links */}

        <div>

          <h3 className="text-xl font-semibold mb-6">
            Quick Links
          </h3>

          <div className="flex flex-col gap-4">

            <Link href="/" className="hover:text-yellow-400 transition">
              Home
            </Link>

            <Link href="/about" className="hover:text-yellow-400 transition">
              About
            </Link>

            <Link href="/products" className="hover:text-yellow-400 transition">
              Products
            </Link>

            <Link href="/gallery" className="hover:text-yellow-400 transition">
              Gallery
            </Link>

            <Link href="/contact" className="hover:text-yellow-400 transition">
              Contact
            </Link>

          </div>

        </div>

        {/* Contact */}

        <div>

          <h3 className="text-xl font-semibold mb-6">
            Contact Us
          </h3>

          <div className="space-y-4 text-gray-400">

            <p>📞 +91 9354530349</p>

            <p>📧 khushitradingco1984@gmail.com</p>

            <p>
              📍 1122, Pooth Kalan,<br />
              Rohini, Delhi - 110086
            </p>

          </div>

        </div>

        {/* Business Hours */}

        <div>

          <h3 className="text-xl font-semibold mb-6">
            Business Hours
          </h3>

          <div className="space-y-4 text-gray-400">

            <p>Monday - Saturday</p>

            <p>09:00 AM - 08:00 PM</p>

            <a
              href="https://wa.me/919354530349"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition"
            >
              WhatsApp Now
            </a>

          </div>

        </div>

      </div>

      {/* Bottom Footer */}

      <div className="border-t border-gray-800">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm text-center">
            © 2026 KHISHISHOP.IN | All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm text-center">
            Premium Tiles • Interior Solutions • Pan India Supply
          </p>

        </div>

      </div>

    </footer>
  );
}