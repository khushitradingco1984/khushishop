"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-yellow-500/20">

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}

        <Link href="/" className="flex items-center">

          <Image
            src="/logo.jpg"
            alt="Khushi Trading Co."
            width={220}
            height={70}
            className="h-14 w-auto object-contain"
            priority
          />

        </Link>

        {/* Navigation */}

        <nav className="hidden md:flex items-center gap-8">

          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-medium transition duration-300 ${
                pathname === item.href
                  ? "text-yellow-400"
                  : "text-white hover:text-yellow-400"
              }`}
            >
              {item.name}
            </Link>
          ))}

        </nav>

        {/* Get Quote Button */}

        <Link
          href="/contact"
          className="hidden md:inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-xl transition duration-300"
        >
          Get Quote
        </Link>

      </div>

    </header>
  );
}