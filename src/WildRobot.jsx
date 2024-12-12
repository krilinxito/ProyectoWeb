import React from "react";
import SoloReview from "./SoloReview";
import Footer from "./Footer";

const WildRobot = () => {
  const cast = [
    {
      name: "Charlize Theron",
      role: "Roz (Voice)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNexWR8M1uGu8gjaRVtlxaxANUvML5lcqvKXZkCAq-GdIGwJ9XJE8pgYseZ-FAAIn_AZXkboFFulJhcGPr5g0TTQ",
    },
    {
      name: "Jacob Tremblay",
      role: "Brightbill (Voice)",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Jacob_Tremblay_by_Gage_Skidmore.jpg",
    },
    {
      name: "Ewan McGregor",
      role: "Narrator",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/74/Ewan_McGregor_by_Gage_Skidmore.jpg",
    },
    {
      name: "Viola Davis",
      role: "Mother Goose (Voice)",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Viola_Davis_by_Gage_Skidmore.jpg",
    },
    {
      name: "Hugh Jackman",
      role: "The Inventor (Voice)",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Hugh_Jackman_by_Gage_Skidmore.jpg",
    },
  ];

  const buttons = [
    { label: "Watch Trailer", link: "https://www.youtube.com/embed/67vbA5ZJdKQ" },
    { label: "Official Website", link: "https://www.imdb.com/title/tt1234567/" },
  ];

  return (
    <>
      <SoloReview
        backgroundImage="https://www.wallpapergap.com/cdn/24/345/the-wild-robot-book-wallpapers-1200x800.jpg"
        posterImage="/wildrobot.jpg"
        title="The Wild Robot"
        description="The Wild Robot is a heartwarming animated adventure that explores themes of survival, friendship, and the beauty of nature through the journey of Roz, a robot stranded in the wilderness."
        rating={4.8} // Calificación en escala de 5
        buttons={buttons}
        cast={cast}
        trailerUrl="https://www.youtube.com/embed/67vbA5ZJdKQ"
      />
      <Footer />
    </>
  );
};

export default WildRobot;
