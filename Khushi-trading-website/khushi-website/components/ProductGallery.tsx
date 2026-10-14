"use client";

import { useState } from "react";

type Props = {
  images: string[];
  title: string;
};

export default function ProductGallery({
  images,
  title,
}: Props) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div>

      {/* Main Image */}

      <div className="overflow-hidden rounded-3xl border bg-white">

        <img
          src={selectedImage}
          alt={title}
          className="h-[520px] w-full object-cover"
        />

      </div>

      {/* Thumbnail Images */}

      <div className="mt-5 flex gap-4 overflow-x-auto">

        {images.map((image, index) => (

          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`overflow-hidden rounded-xl border-2 transition ${
              selectedImage === image
                ? "border-black"
                : "border-gray-200"
            }`}
          >

            <img
              src={image}
              alt={`${title} ${index + 1}`}
              className="h-24 w-24 object-cover"
            />

          </button>

        ))}

      </div>

    </div>
  );
}