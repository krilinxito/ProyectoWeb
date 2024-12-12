import React from "react";
import QuoteCard from "./QuoteCard"; // Adjust the path if necessary
import "./Cards.css";

const Cards = () => {
  return (
    <div className="quote-container">
    <QuoteCard
      image="public/scorsese.jpg"
      quote="Cinema is a matter of what's in the frame and what's out."
      author="Martin Scorsese"
    />
    <QuoteCard
      image="public/kubrick.jpeg"
      quote="A film is—or should be—more like music than like fiction. It should be a progression of moods and feelings."
      author="Stanley Kubrick"
    />
  </div>
  );
};

export default Cards;
