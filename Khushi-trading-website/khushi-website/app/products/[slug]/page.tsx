import Link from "next/link";
import { notFound } from "next/navigation";

import { products } from "@/data/products";
import ProductGallery from "@/components/ProductGallery";

type Props = {
  params: {
    slug: string;
  };
};

export default async function ProductDetails({ params }: Props) {
const { slug } = await params;

const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="mx-auto max-w-7xl px-6 py-16">

        <Link
          href="/products"
          className="inline-flex items-center text-gray-600 hover:text-black"
        >
          ← Back to Products
        </Link>

        <div className="mt-10 grid gap-12 lg:grid-cols-2">

          {/* Product Gallery */}
          <ProductGallery
            images={product.images}
            title={product.title}
          />

          {/* Product Details */}
          <div>

            <span className="inline-block rounded-full bg-gray-100 px-4 py-2 text-sm font-medium">
              {product.category}
            </span>

            <h1 className="mt-5 text-5xl font-bold">
              {product.title}
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              {product.description}
            </p>

            {/* Features */}

            <div className="mt-10">
              <h3 className="mb-4 text-xl font-semibold">
                Product Features
              </h3>

              <ul className="space-y-3">

                {product.features.map((feature) => (

                  <li
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <span className="text-green-600">✔</span>

                    <span>{feature}</span>

                  </li>

                ))}

              </ul>
            </div>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href={product.pdf}
                target="_blank"
                className="rounded-xl bg-black px-8 py-4 font-medium text-white transition hover:bg-gray-800"
              >
                Download Catalogue
              </a>

              <a
                href={`https://wa.me/919354530349?text=Hello,%20I%20am%20interested%20in%20${product.title}.%20Please%20share%20details.`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-black px-8 py-4 font-medium transition hover:bg-black hover:text-white"
              >
                WhatsApp Enquiry
              </a>

            </div>

          </div>

        </div>

      </section>
    </main>
  );
}