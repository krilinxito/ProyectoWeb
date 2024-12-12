import React from "react";
import "./SoloReview.css";

const SoloReview = ({
  backgroundImage,
  posterImage,
  title,
  description,
  rating, // Calificación en escala de 5
  buttons = [],
  cast = [],
  trailerUrl, // URL del iframe
}) => {
  // Genera estrellas dinámicas basadas en la calificación
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`inline-block text-2xl ${
            i <= rating ? "text-yellow-400" : "text-gray-400"
          }`}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Encabezado con fondo */}
      <div
        className="solo-review-header"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
<h1 className="text-5xl font-bold text-center bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent px-6 py-2 rounded">
  {title}
</h1>

      </div>

      {/* Sección de Información */}
      <div className="solo-review-content container mx-auto max-w-5xl flex flex-col md:flex-row gap-8 py-10">
        {/* Poster de la película */}
        <div className="poster-container flex-shrink-0">
          <img
            src={posterImage}
            alt={`${title} poster`}
            className="rounded-lg shadow-lg w-full md:w-80"
          />
        </div>

        {/* Descripción y Calificación */}
        <div className="details-container flex-grow">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <div className="rating mb-4 flex items-center">
            {renderStars()}
            <span className="ml-4 text-lg font-bold text-grey bg-red-500 px-2 py-1 rounded">
  {rating}/5
</span>
          </div>
          <p className="text-lg leading-relaxed mb-8">{description}</p>

          {/* Botones */}
          <div className="solo-review-buttons flex gap-4">
            {buttons.map((button, index) => (
              <a
                key={index}
                href={button.link}
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded text-center transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                {button.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Trailer de YouTube */}
      {trailerUrl && (
        <div className="container mx-auto max-w-5xl py-10">
            <br />
          <h3 className="text-2xl font-bold mb-6">Trailer</h3>
          <div className="iframe-container">
            <iframe
              width="100%"
              height="315"
              src={trailerUrl}
              title={`${title} Trailer`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      )}

      {/* Sección del Reparto */}
      <div className="container mx-auto max-w-5xl py-10">
        <h3 className="text-2xl font-bold mb-6">Cast</h3>
        <div className="solo-review-cast grid grid-cols-2 md:grid-cols-3 gap-8">
          {cast.map((actor, index) => (
            <div
              key={index}
              className="text-center transition-transform duration-300"
            >
              <img
                src={actor.image}
                alt={actor.name}
                className="w-24 h-24 rounded-full mx-auto mb-3 object-cover hover:scale-110 hover:shadow-lg"
              />
              <h4 className="text-lg font-bold">{actor.name}</h4>
              <p className="text-sm text-gray-400">{actor.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SoloReview;
