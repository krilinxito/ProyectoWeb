import React from "react";
import SoloReview from "./SoloReview";
import Footer from "./Footer";

const Terrifier = () => {
  const cast = [
    {
      name: "David Howard Thornton",
      role: "Art the Clown",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/David_Howard_Thornton_by_Gage_Skidmore.jpg/1200px-David_Howard_Thornton_by_Gage_Skidmore.jpg",
    },
    {
      name: "Lauren LaVera",
      role: "Sienna",
      image: "https://m.media-amazon.com/images/M/MV5BNGI0ZTZkYjItZWNhMi00YThmLThkNTgtZTEzZmVhZGVjYWJlXkEyXkFqcGc@._V1_.jpg",
    },
    {
      name: "Elliott Fullam",
      role: "Jonathan",
      image: "https://i0.wp.com/littlepunkpeople.net/wp-content/uploads/2022/10/ELLIOTT-FULLAM-headshot1-lr.jpg?ssl=1", // Imagen genérica para roles adicionales
    },
    {
      name: "Samantha Scaffidi",
      role: "Victoria Heyes",
      image: "https://images.mubicdn.net/images/cast_member/730372/cache-917886-1698796378/image-w856.jpg",
    },
    {
      name: "Amelie McLain",
      role: "The Little Pale Girl",
      image: "https://m.media-amazon.com/images/M/MV5BNmZmZGRjMzEtNDRjOS00NWIzLTliYzEtOTQwZjM3YmVkZTQxXkEyXkFqcGc@._V1_.jpg",
    },
  ];

  const buttons = [
    { label: "Watch Trailer", link: "https://www.youtube.com/embed/zaPcin5knJk" },
    { label: "Official Website", link: "https://www.imdb.com/title/tt20898138/" },
  ];

  return (
    <>
      <SoloReview
        backgroundImage="https://images.alphacoders.com/129/thumb-1920-1294021.jpg"
        posterImage="/terrifier3.jpg"
        title="Terrifier 3"
        description="Terrifier 3 continues the horrifying saga of Art the Clown. Directed by Damien Leone, this installment promises more gore, scares, and an even darker story."
        rating={3.7} // Calificación en escala de 5
        buttons={buttons}
        cast={cast}
        trailerUrl="https://www.youtube.com/embed/zaPcin5knJk"
      />
      <Footer />
    </>
  );
};

export default Terrifier;
