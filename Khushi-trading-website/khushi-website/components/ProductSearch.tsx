type ProductSearchProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function ProductSearch({
  value,
  onChange,
}: ProductSearchProps) {
  return (
    <div className="w-full max-w-xl mx-auto">

      <div className="relative">

        <input
          type="text"
          placeholder="Search Products..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-2xl border border-gray-300 bg-white py-4 pl-5 pr-14 text-black outline-none transition focus:border-black"
        />

        <div className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500">
          🔍
        </div>

      </div>

    </div>
  );
}