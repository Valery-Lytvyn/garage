import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import useIsMobile from "../../hooks/useIsMobile";
import fallbackImage from "../../assets/images/desktop/fallback-image.webp";
import garagePhoto from "../../assets/images/desktop/garage_photo.webp";
import garagePhotoMobile from "../../assets/images/mobile/garage_photo_mobile.webp";

const GarageImage: React.FC = () => {
  const isMobile = useIsMobile();
  return (
    <LazyLoadImage
      src={`${isMobile ? garagePhotoMobile : garagePhoto}`}
      alt="Garage Photo"
      loading="lazy"
      className="min-h-full w-full object-cover"
      onError={(e) => {
        e.currentTarget.src = `${fallbackImage}`;
      }}
    />
  );
};

export default GarageImage;
