import React from "react";
import SoloReview from "./SoloReview";
import Footer from "./Footer";

const Barbie = () => {
  const cast = [
    { name: "Margot Robbie", role: "Barbie", image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTNP8gPMRIvmRGVlQIx3oD48c97KXkb3M9t2-BydRG0CpqhNJvgcSpJC0K0lFtzYRMjra_6lGL-Dw3rEwXc66FRIQ" },
    { name: "Ryan Gosling", role: "Ken", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwSoHljJrUDnX2xVPebBW0DfcSIrb-ICbAEOYJ3MLKQQRYU_keVBcjViRFkvw7BYg05zYznOmnR7lf4M7mi_YiHA" },
    { name: "America Ferrera", role: "Gloria", image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQWtsU-e_rzsFE5sq45AylwNWneUOKMPzosYmUJB4C4Se-k_anm_Og1H_BF_M5_ikAW60crPK6RWhucT0fNiKe6Og" },
    { name: "Kate McKinnon", role: "Weird Barbie", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAGjTUCxExXFj4t36DprVE44XLWC1lnKq3Y1mvLKzfF7K7h6SZWv8dIRtek5SKp6djHBvY4SlzCJugKCG9yNyvnw" },
    { name: "Simu Liu", role: "Ken #2", image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRcvEB-EKELJr10GyRHGnXPEyf0QDFJDU-JGfm_huAqpPreDOBEyKG8cNsl26m2sBZROp56dhgeb_tryi8goD03fg" },
  ];

  const buttons = [
    { label: "Watch Trailer", link: "https://youtu.be/pBk4NYhWNMM" },
    { label: "Official Website", link: "https://www.barbie-themovie.com" },
  ];

  return (
    <>
      <SoloReview
        backgroundImage="/barbiewp.jpg"
        posterImage="/barbie.jpg"
        title="Barbie"
        description="Barbie is a visually stunning and witty tale of self-discovery, filled with humor, adventure, and heartfelt moments. Directed by Greta Gerwig, the movie reimagines the iconic doll for a modern audience."
        rating={4.5} // Calificación en escala de 5
        buttons={buttons}
        cast={cast}
        trailerUrl="https://www.youtube.com/embed/pBk4NYhWNMM"
      />
      <Footer />
    </>
  );
};

export default Barbie;
