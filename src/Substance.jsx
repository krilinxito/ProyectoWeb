import React from "react";
import SoloReview from "./SoloReview";
import Footer from "./Footer";

const TheSubstance = () => {
  const cast = [
    {
      name: "Demi Moore",
      role: "Lead Role",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF70vsACHsTql_4x1YnoC53c3d-7fu5VnNEM-KwwL_0K-OQ7fKlHt9TkCHv6mD_ZlTk3wFFROkkfaLLYSJpddx2A",
    },
    {
      name: "Margaret Qualley",
      role: "Supporting Role",
      image: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcR5naCMr0eFbDXTn1vfC224_J-eOWNUF2JKRsXJZzvL5AadKhnAQtriH_-NjT1fj2Z1lHNixbBqGQWeums",
    },
    {
      name: "Tom Felton",
      role: "Supporting Role",
      image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQTS4ooNI0fDIw5JLkqw87jSpS8K6x4kriRBoX08EIOiGBisHHB8tA9Re319ciSCQJxD-2tp-dRnvvlPzBfKAJ5HQ",
    },
    {
      name: "Paul Giamatti",
      role: "Supporting Role",
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRtvlAxYRZvLWsO9tuNL8CTzgfno2xdQJQGDtIYyOldlrKqWjVge3RfbCX5Cx2s51_ICbVqFultJ3kqG7eSJ-u2lQ",
    },
    {
      name: "Dennis Quaid",
      role: "Harvey",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNJvcH1iLj8hL4WzgxDMdRas-UodA37xxYvAH_CNL5o4jPa5YjmB12HL__cOvUTHH5_27tuIErynoDZ3wsH385Iw", // Imagen genérica para roles desconocidos
    },
  ];

  const buttons = [
    { label: "Watch Trailer", link: "https://www.youtube.com/embed/LNlrGhBpYjc" },
    { label: "Official Website", link: "https://www.imdb.com/title/tt23022712/" },
  ];

  return (
    <>
      <SoloReview
        backgroundImage="https://wallpapersbq.com/images/the-substance/the-substance-wallpaper-2.webp"
        posterImage="public/substance.webp"
        title="The Substance"
        description="The Substance is a gripping thriller that dives deep into the mysterious and unexplainable. A haunting tale of human ambition and its unforeseen consequences."
        rating={4.5} // Calificación en escala de 5
        buttons={buttons}
        cast={cast}
        trailerUrl="https://www.youtube.com/embed/LNlrGhBpYjc"
      />
      <Footer />
    </>
  );
};

export default TheSubstance;
