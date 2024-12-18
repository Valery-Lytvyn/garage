import React, { useEffect, useState } from "react";

const LocationMap: React.FC = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setMapLoaded(true);
    };
    if (document.readyState === "complete") {
      setMapLoaded(true);
    } else {
      window.addEventListener("load", handleLoad);
    }
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
      {mapLoaded ? (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2742.7424770100642!2d30.811661800000003!3d46.5725577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c6235717700bd1%3A0x7ee57770e47e834f!2sSto%207%20Mylya!5e0!3m2!1sen!2sua!4v1733997731459!5m2!1sen!2sua"
          style={{ border: "0", width: "100%", height: "100%" }}
          aria-hidden="false"
          loading="lazy"
          title="Location Map"
          aria-label="Interactive map showing the location of Sto 7 Mylya"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-slate-700">
          <p>Loading map...</p>
        </div>
      )}
    </>
  );
};

export default LocationMap;
