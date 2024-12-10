import React from "react";
import "./QuoteCard.css";

const QuoteCard = ({ image, quote, author }) => {
  return (
    <div className="quote-card">
      <img src={image} alt={`${author}`} className="quote-image" />
      <p className="quote-text">"{quote}"</p>
      <h3 className="quote-author">{author}</h3>
    </div>
  );
};

export default QuoteCard;
