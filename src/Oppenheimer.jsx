import React from "react";
import SoloReview from "./SoloReview";
import Footer from "./Footer";

const Oppenheimer = () => {
  const cast = [
    { name: "Cillian Murphy", role: "J. Robert Oppenheimer", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3PN31TAWY_4XsA3dBKfjmZ4R1_cpKhNAZAPJeGJ691N8fOpxQigAqk64XDDur9cLoQ9-y_pKGOXkRI52uUr8DK-er3-qmmkVMuEETTaU" },
    { name: "Emily Blunt", role: "Katherine Oppenheimer", image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQa_yaC3-QEGyT9DWLMv_Gz7AcR216h-hQTPcqznABHlhs3sgDV0D77lhTCxOhdJ_XM40MW3w2-LwBBC7cD22LmmQ" },
    { name: "Matt Damon", role: "Leslie Groves", image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQjNKr8KIYL8Ereo7RO3Af6BD7lw5Pc7jliq9mDhOTZqQML1NS3v_po5VReWjSNwN98G45WSsJAxhOq-srdmKvdUQ" },
    { name: "Robert Downey Jr.", role: "Lewis Strauss", image: "https://m.media-amazon.com/images/M/MV5BNzg1MTUyNDYxOF5BMl5BanBnXkFtZTgwNTQ4MTE2MjE@._V1_.jpg" },
    { name: "Florence Pugh", role: "Jean Tatlock", image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTOc2kEnI8EmTt5fMCCZQKqk8Jxqf-_5aUmgyM0SgRvFPPQwfSn3v5PmPgaxuoX3JkW88aKnORWGzUyGadGpQWMxw" },
  ];

  const buttons = [
    { label: "Watch Trailer", link: "https://youtu.be/uYPbbksJxIg?si=N22jCMnWfotKdjmn" },
    { label: "Official Website", link: "https://es.wikipedia.org/wiki/Oppenheimer_(pel%C3%ADcula)" },
  ];

  return (
    <>
    <SoloReview
      backgroundImage="oppie.jpeg"
      posterImage="oppenheimer_poster.webp"
      title="Oppenheimer"
      description="Oppenheimer is a mind-bending exploration of the life of the 'father of the atomic bomb.' Directed by Christopher Nolan, it delves into the complexities of J. Robert Oppenheimer's life."
      rating={4.8} // Calificación en escala de 5
      buttons={buttons}
      cast={cast}
      trailerUrl="https://www.youtube.com/embed/uYPbbksJxIg?si=JBvei_LncQxrMi4T"
    />
    <Footer/>
    </>
  );
};

export default Oppenheimer;
