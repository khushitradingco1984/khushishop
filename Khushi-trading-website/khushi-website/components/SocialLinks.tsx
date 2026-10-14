import { socialLinks } from "@/data/socialLinks";

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-4">

      <a
        href={socialLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-green-500 px-4 py-2 text-white hover:bg-green-600 transition"
      >
        WhatsApp
      </a>

      <a
        href={socialLinks.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border px-4 py-2 hover:bg-pink-500 hover:text-white transition"
      >
        Instagram
      </a>

      <a
        href={socialLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border px-4 py-2 hover:bg-blue-600 hover:text-white transition"
      >
        Facebook
      </a>

    </div>
  );
}