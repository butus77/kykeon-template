"use client";

import Image from "next/image";

interface ImageModalProps {
  imageUrl: string | null;
  altText: string;
  onClose: () => void;
}

export function ImageModal({ imageUrl, altText, onClose }: ImageModalProps) {
  if (!imageUrl) {
    return null;
  }

  return (
    // Backdrop
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 transition-opacity duration-300"
    >
      {/* Modal Content */}
      <div
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking on the image
        className="relative h-auto max-h-[90vh] w-auto max-w-[90vw] animate-in fade-in-0 zoom-in-95"
      >
        <Image
          src={imageUrl}
          alt={altText}
          width={1200} // Set a large width for high quality
          height={1200} // Set a large height for high quality
          className="h-full w-full rounded-lg object-contain"
        />
        <button
          onClick={onClose}
          className="absolute -right-2 -top-2 rounded-full bg-white/20 p-1 text-white transition-colors hover:bg-white/40"
          aria-label="Close image viewer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  );
}
