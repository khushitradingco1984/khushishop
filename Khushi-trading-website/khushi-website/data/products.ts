export type Product = {
  slug: string;
  title: string;
  category: string;
  image: string; // Card Image
  images: string[]; // Gallery Images
  shortDescription: string;
  description: string;
  features: string[];
  pdf: string; // PDF Catalogue
};

export const categories = [
  "All",
  "Designer Tiles",
  "Imported Tiles",
  "Designer Highlighter",
  "Sandblasting Highlighter",
  "UV Digital Highlighter",
];

export const products: Product[] = [
  {
    slug: "designer-tiles",
    title: "Designer Tiles",
    category: "Designer Tiles",
    image: "/images/products/designer-tiles/1.jpg",
    images: [
      "/images/products/designer-tiles/1.jpg",
    ],
    shortDescription: "Premium designer tiles for luxury interiors.",
    description: "Luxury designer wall and floor tiles suitable for homes, villas, hotels and commercial projects.",
    features: [
      "Premium Finish",
      "Luxury Design",
      "Water Resistant",
      "Easy Maintenance",
      "Long Life",
    ],
    pdf: "/catalogues/designer-tiles.pdf",
  },
  {
    slug: "imported-tiles",
    title: "Imported Tiles",
    category: "Imported Tiles",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
    ],
    shortDescription: "Imported premium tiles.",
    description: "Imported tiles with elegant finishes for premium residential and commercial interiors.",
    features: [
      "Imported Collection",
      "Gloss Finish",
      "Luxury Look",
      "Premium Quality",
    ],
    pdf: "/catalogues/imported-tiles.pdf",
  },
  {
    slug: "designer-highlighter",
    title: "Designer Highlighter",
    category: "Designer Highlighter",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
    images: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    ],
    shortDescription: "Luxury decorative highlighter tiles.",
    description: "Designer highlighter tiles for premium bathrooms, kitchens and feature walls.",
    features: [
      "Premium Design",
      "Decorative Finish",
      "Modern Style",
    ],
    pdf: "/catalogues/designer-highlighter.pdf",
  },
  {
    slug: "sandblasting-highlighter",
    title: "Sandblasting Highlighter",
    category: "Sandblasting Highlighter",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    ],
    shortDescription: "Textured sandblasted tiles.",
    description: "Unique sandblasting textures designed to elevate feature walls and modern accent spaces.",
    features: [
      "Matt Texture",
      "Sandblast Finish",
      "High Durability",
    ],
    pdf: "/catalogues/sandblasting-highlighter.pdf",
  },
  {
    slug: "uv-digital-highlighter",
    title: "UV Digital Highlighter",
    category: "UV Digital Highlighter",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b",
    images: [
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
    ],
    shortDescription: "Vibrant UV printed tiles.",
    description: "High-definition UV digital prints for artistic and colorful interior wall designs.",
    features: [
      "UV Gloss Print",
      "Vibrant Colors",
      "Scratch Resistant",
    ],
    pdf: "/catalogues/uv-digital-highlighter.pdf",
  },
];