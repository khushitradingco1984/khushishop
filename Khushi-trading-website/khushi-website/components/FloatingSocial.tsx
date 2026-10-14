"use client";

import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

export default function FloatingSocial() {
  return (
    <div className="fixed right-5 bottom-24 z-50 flex flex-col gap-3">

      {/* WhatsApp */}
      <a
        href="https://wa.me/919354530349"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-green-600"
      >
        <FaWhatsapp size={28} />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/01shreejitraders/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-pink-500 text-white shadow-xl transition-all duration-300 hover:scale-110"
      >
        <FaInstagram size={24} />
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/profile.php?id=61587738657200"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl transition-all duration-300 hover:scale-110"
      >
        <FaFacebookF size={24} />
      </a>

      {/* YouTube */}
      <a
        href="https://www.youtube.com/@SHREEJITRADERS-c7y"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-xl transition-all duration-300 hover:scale-110"
      >
        <FaYoutube size={24} />
      </a>

    </div>
  );
}