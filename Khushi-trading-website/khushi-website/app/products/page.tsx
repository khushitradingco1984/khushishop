"use client";

import { useMemo, useState } from "react";

import { categories, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import ProductSearch from "@/components/ProductSearch";
import ProductCategories from "@/components/ProductCategories";

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "All" ||
        product.category === activeCategory;

      const matchesSearch =
        product.title
          .toLowerCase()
          .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  return (
    <main className="min-h-screen bg-gray-50 pt-28 pb-20">
      <section className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h1 className="text-5xl font-bold">
            Our Products
          </h1>

          <p className="mt-4 text-gray-600">
            Explore our premium collection.
          </p>
        </div>

        <div className="mt-10">
          <ProductSearch
            value={search}
            onChange={setSearch}
          />
        </div>

        <div className="mt-8">
          <ProductCategories
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.slug}
              title={product.title}
              image={product.image}
              slug={product.slug}
              category={product.category}
            />
          ))}
        </div>

      </section>
    </main>
  );
}