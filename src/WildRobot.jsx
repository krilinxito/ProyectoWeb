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
      image: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRLi5hgyZ24fl2J_pKX_KaHkZ_5LYgDeJhcxZO5GI9ipr8_uKQ3FwuTqCqWz1bqk0_WpPGUcSinX8bFg-Y",
    },
    {
      name: "Ewan McGregor",
      role: "Narrator",
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQW-YqwbmXBvPqwvj4l4Yu-ms4M3zAE8lFwcIEiEvNSfQWRWW5EWO3-rPr5DaMFRxBx7Ghl06datYe7g4vKGcvrvQ",
    },
    {
      name: "Viola Davis",
      role: "Mother Goose (Voice)",
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTatvqxSM7tYoBudS1YOptpSP2ZOVso8kaGoMnMp1BVHlkjHWqVJf84XXGwr_yVmTA4tHeRuzVDCxvDEqE5DQFzyA",
    },
    {
      name: "Hugh Jackman",
      role: "The Inventor (Voice)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMdrIOtNFvpRgXslgY3bwpVPWvbiboZF3gvA&s",
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
        posterImage="wildrobot.jpg"
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
