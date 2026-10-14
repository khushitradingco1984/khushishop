import Link from "next/link";

type ProductCardProps = {
  title: string;
  image: string;
  slug: string;
  category: string;
};

export default function ProductCard({
  title,
  image,
  slug,
  category,
}: ProductCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-md border border-gray-100 transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <div className="relative overflow-hidden">

        <img
          src={image}
          alt={title}
          className="h-80 w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-black shadow">
          {category}
        </span>

      </div>

      <div className="p-6">

        <h3 className="text-2xl font-bold text-black">
          {title}
        </h3>

        <p className="mt-3 text-gray-600 leading-7">
          Premium quality products for luxury residential
          and commercial interior projects.
        </p>

        <div className="mt-8 flex gap-3">

          <Link
            href={`/products/${slug}`}
            className="flex-1 rounded-xl bg-black py-3 text-center font-semibold text-white transition hover:bg-yellow-500 hover:text-black"
          >
            View Details
          </Link>

          <button className="rounded-xl border border-black px-6 py-3 font-semibold transition hover:bg-black hover:text-white">
            PDF
          </button>

        </div>

      </div>

    </div>
  );
}