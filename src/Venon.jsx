import React from "react";
import SoloReview from "./SoloReview";
import Footer from "./Footer";

const VenomTheLastDance = () => {
  const cast = [
    {
      name: "Tom Hardy",
      role: "Eddie Brock / Venom",
      image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/269411_v9_bd.jpg",
    },
    {
      name: "Michelle Williams",
      role: "Anne Weying",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmsRn8AA67o21k6F83TTUb-kaaiegj0hc35A&s",
    },
    {
      name: "Woody Harrelson",
      role: "Cletus Kasady / Carnage",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Woody_Harrelson_191020-N-NU281-1028_%28cropped%29.jpg/640px-Woody_Harrelson_191020-N-NU281-1028_%28cropped%29.jpg",
    },
    {
      name: "Naomie Harris",
      role: "Frances Barrison / Shriek",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Naomie_Harris_2014.jpg/1200px-Naomie_Harris_2014.jpg",
    },
    {
      name: "Stephen Graham",
      role: "Detective Mulligan",
      image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/270846_v9_be.jpg",
    },
  ];

  const buttons = [
    { label: "Watch Trailer", link: "https://www.youtube.com/embed/HyIyd9joTTc" },
    { label: "Official Website", link: "https://www.imdb.com/title/tt7097896/" },
  ];

  return (
    <>
      <SoloReview
        backgroundImage="https://www.bollywoodhungama.com/wp-content/uploads/2024/10/Venom-The-Last-Dance-English-covr.jpeg"
        posterImage="/venom.jpg"
        title="Venom: The Last Dance"
        description="Venom: The Last Dance is the thrilling continuation of Eddie Brock's journey as Venom. This time, the symbiote faces a new and formidable adversary in a high-stakes battle for survival."
        rating={2.5} // Calificación en escala de 5
        buttons={buttons}
        cast={cast}
        trailerUrl="https://www.youtube.com/embed/HyIyd9joTTc"
      />
      <Footer />
    </>
  );
};

export default VenomTheLastDance;
