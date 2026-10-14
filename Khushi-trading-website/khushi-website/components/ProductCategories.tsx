type ProductCategoriesProps = {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
};

export default function ProductCategories({
  categories,
  activeCategory,
  onCategoryChange,
}: ProductCategoriesProps) {
  return (
    <div className="overflow-x-auto pb-2">
      <div className="flex min-w-max gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`rounded-full px-5 py-3 text-sm font-medium transition ${
              activeCategory === category
                ? "bg-black text-white"
                : "border border-gray-300 bg-white text-black hover:bg-gray-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}