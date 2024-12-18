import React from "react";
import { motion } from "motion/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import fallbackImage from "../../assets/images/desktop/fallback-image.webp";

interface ServiceTileProps {
  title: string;
  pic: string;
}

const ServiceTile: React.FC<ServiceTileProps> = React.memo(({ title, pic }) => {
  return (
    <div className="transition-standard group flex flex-col items-center gap-2 overflow-hidden rounded-b-2xl border border-white/10 bg-black text-center hover:shadow-sm hover:shadow-red-700">
      <div className="relative h-full w-full flex-1 overflow-hidden border-b border-red-700 opacity-75 group-hover:opacity-75 md:opacity-40">
        <LazyLoadImage
          src={pic}
          alt={title}
          className="transition-standard h-full w-full object-cover hover:scale-105"
          onError={(e) => {
            e.currentTarget.src = `${fallbackImage}`;
          }}
        />
      </div>
      <motion.h3
        className="transition-standard w-full bg-black py-4 text-2xl uppercase text-white group-hover:text-red-700"
        initial={{ translateY: "100%", opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 0.7 }}
        transition={{ duration: 0.1, ease: "backInOut" }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h3>
    </div>
  );
});

export default ServiceTile;
