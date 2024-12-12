import React from "react";
import SoloReview from "./SoloReview";
import Footer from "./Footer";

const GoodFellas = () => {
  const cast = [
    {
      name: "Robert De Niro",
      role: "James Conway",
      image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRqpJ0XJCe2F30UX3OMoxmm9a70hWmQsx0TAFUt2ZF-9gzo13z9hyoVAd91b37yrnvs3I351UFDacqzJgLE5Iez0Q",
    },
    {
      name: "Ray Liotta",
      role: "Henry Hill",
      image: "https://dims.apnews.com/dims4/default/54bb994/2147483647/strip/true/crop/3000x2062+0+0/resize/599x412!/quality/90/?url=https%3A%2F%2Fstorage.googleapis.com%2Fafs-prod%2Fmedia%2Ffe401776bca34430b2eafea1625cba48%2F3000.jpeg",
    },
    {
      name: "Joe Pesci",
      role: "Tommy DeVito",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR8kwAHCgzYrh2vVgv1PW1TSArQrNrl8TpTuDnQt95lqz2afRalFOxjXV8UJLHvJuWhoTjPVMBq4DP51cm49N2gA",
    },
    {
      name: "Lorraine Bracco",
      role: "Karen Hill",
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR0EMeGANhAECcUxG65jFxm_DlPTir24qEjwVDWd4RJeXtGhHjOacyaB77Nkgwt2aNbvgxH3eSxLOj1h9ku_v8bVw",
    },
    {
      name: "Paul Sorvino",
      role: "Paul Cicero",
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ59U_nf-x1gUNT4YCqxtM2GU-oe9NJ7SdBGJVa7CtTBvoTs_UGK5iPwzIz_qhnb2k1FWsLhp0ZL8Wb8CFYcdrORw",
    },
  ];

  const buttons = [
    { label: "Watch Trailer", link: "https://www.youtube.com/embed/qo5jJpHtI1Y" },
    { label: "Official Website", link: "https://www.imdb.com/title/tt0099685/" },
  ];

  return (
    <>
      <SoloReview
        backgroundImage="https://wallpaperaccess.com/full/1337553.jpg"
        posterImage="/goodfellas.jpg"
        title="Goodfellas"
        description="Goodfellas, directed by Martin Scorsese, is a timeless masterpiece chronicling the rise and fall of a mob associate. With gripping performances and iconic style, it remains one of the greatest gangster films of all time."
        rating={4.9} // Calificación en escala de 5
        buttons={buttons}
        cast={cast}
        trailerUrl="https://www.youtube.com/embed/qo5jJpHtI1Y"
      />
      <Footer />
    </>
  );
};

export default GoodFellas;
