
import React from "react";
import SoloReview from "./SoloReview";
import Footer from "./Footer";

const PoorThings = () => {
  const cast = [
    {
      name: "Emma Stone",
      role: "Bella Baxter",
      image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQkCj6nQx450DCdZfMwo-TZXsJPtFaCXCh9sIp2TkqJmlcf7sMoi7_BCrj5XL4Sa5KI3MIYrNnnkMFi5ra9Hgq47w",
    },
    {
      name: "Mark Ruffalo",
      role: "Duncan Wedderburn",
      image: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSE6HV7vR_ZmFQiEUuZ1SCVNsejm5YuRFoLH-4Sos5pjf87J2XRFytqPjpr-aHI4V1LTs1SmQK4-cjeAZs",
    },
    {
      name: "Willem Dafoe",
      role: "Dr. Godwin Baxter",
      image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT4-hDm-aS_qUT593tvD0L2Zf_h1YFr2Bf60gmSgj4eCFs0h0fgX5GXLVHCXi0Fbt82W4xfJl6QL2GffGnQ8CaiRw",
    },
    {
      name: "Ramsey Nasr",
      role: "Harry Astley",
      image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS42KfMNH_4syU0CLOF2LciZ3GUlppnLRCxoLjgoGAw5gDbu6wzw7Z9ftmxgaDNJgzwyovqNRU8KubINEqC5cFFfg",
    },
    {
      name: "Jerrod Carmichael",
      role: "Max McCandless",
      image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTk3phP77MEFMhGERVsyVm-l-rE-sWJZm7rsNLworF98hZN0OuLqjpvbsKRvNPGfkrYa0y13s2fXnWhsipPgcH3rA",
    },
  ];

  const buttons = [
    { label: "Watch Trailer", link: "https://www.youtube.com/embed/RlbR5N6veqw" },
    { label: "Official Website", link: "https://en.wikipedia.org/wiki/Poor_Things_(film)" },
  ];

  return (
    <>
      <SoloReview
        backgroundImage="https://cdn.theasc.com/Poor-Things-Emma-Stone-Virtual-Feature.jpeg"
        posterImage="poorthings.webp"
        title="Poor Things"
        description="Poor Things is a surreal tale of identity, autonomy, and transformation. Directed by Yorgos Lanthimos, it brings a visually stunning narrative of reanimation and self-discovery to life."
        rating={4.7} // Calificación en escala de 5
        buttons={buttons}
        cast={cast}
        trailerUrl="https://www.youtube.com/embed/RlbR5N6veqw"
      />
      <Footer />
    </>
  );
};

export default PoorThings;
