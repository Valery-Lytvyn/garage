import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface BackgroundImageProps {
  src: string;
  alt: string;
  blur: string;
  styles?: string;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({
  src,
  alt,
  blur,
  styles,
}) => {
  return (
    <div className="absolute inset-0 flex h-full w-full items-center justify-center overflow-hidden">
      <LazyLoadImage
        src={src}
        alt={alt}
        className={`w-full object-cover ${styles}`}
        loading="lazy"
      />
      <div className={`absolute inset-0 ${blur}`} />
    </div>
  );
};

export default BackgroundImage;
