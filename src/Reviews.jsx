import React from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard'; // Asegúrate de importar correctamente el MovieCard
import './Reviews.css';
import HeroSection from './HeroSection';
import Footer from './Footer';

const reviewsList = [
    { title: "Oppenheimer", path: "/reviews/oppenheimer", poster: "public/oppenheimer_poster.webp", synopsis: "Oppenheimer is a mind-bending exploration of the life of the 'father of the atomic bomb.' Christopher Nolan masterfully weaves a tale of scientific brilliance, moral turmoil, and political intrigue.", cardStyle: { background: 'linear-gradient(to right, #FF4500, #2C2C2C)', borderRadius: '10px' } },
    { title: "Barbie", path: "/reviews/barbie", poster: "public/barbie.jpg", synopsis: "Barbie’s perfect world is turned upside down in this witty, visually stunning tale of self-discovery. Dive into our review to see why this isn’t just a movie—it’s a cultural phenomenon!", cardStyle: { background: 'linear-gradient(to right, #FF99CC, #FF66B2)', borderRadius: '10px' } },
    { title: "Poor Things", path: "/reviews/poor-things", poster: "public/poorthings.webp", synopsis: "Poor Things is a surreal tale of science and self-discovery, exploring themes of identity, autonomy, and transformation in a visually stunning narrative directed by Yorgos Lanthimos.", cardStyle: { background: 'linear-gradient(to right, #1E90FF, #FFD700)', borderRadius: '10px' } },
    { title: "Goodfellas", path: "/reviews/goodfellas", poster: "public/goodfellas.jpg", synopsis: "Goodfellas is a timeless masterpiece by Martin Scorsese, chronicling the rise and fall of a mob associate through stunning performances, a gripping narrative, and iconic style.", cardStyle: { background: 'linear-gradient(to right, #000000, #FF0000)', borderRadius: '10px' } },
    { title: "Venom: The Last Dance", path: "/reviews/venom-the-last-dance", poster: "venom.jpg", synopsis: "Venom: The Last Dance takes us deeper into the chaotic world of Eddie Brock and his symbiote, with action-packed sequences and emotional twists.", cardStyle: { background: 'linear-gradient(to right, #0F0F0F, #1E1E1E)', borderRadius: '10px' } },
    { title: "The Substance", path: "/reviews/the-substance", poster: "public/substance.webp", synopsis: "The Substance explores the boundaries of human curiosity and fear, delivering a gripping narrative that challenges our understanding of the unknown.", cardStyle: { background: 'linear-gradient(to right, #6A0572, #1E1E2C)', borderRadius: '10px' } },
    { title: "Terrifier 3", path: "/reviews/terrifier-3", poster: "public/terrifier3.jpg", synopsis: "Terrifier 3 continues the gruesome tale of Art the Clown with shocking horror and unrelenting suspense that will haunt your dreams.", cardStyle: { background: 'linear-gradient(to right, #3D0000, #8B0000)', borderRadius: '10px' } },
    { title: "The Wild Robot", path: "/reviews/the-wild-robot", poster: "public/wildrobot.jpg", synopsis: "The Wild Robot is a heartwarming tale of survival, adaptation, and the beauty of nature through the eyes of a robot stranded on an island.", cardStyle: { background: 'linear-gradient(to right, #3BB143, #1E5631)', borderRadius: '10px' } }
  ];

const Reviews = () => {
  return (
    <>
      <HeroSection
        backgroundImage="/posters.jpg"
        title="Newest Reviews"
        subtitle="Dive into the latest takes on your favorite movies and shows."
        overlayColor="rgba(0, 0, 0, 0.7)"
        titleStyle={{ color: '#FFF', fontSize: '3rem' }}
        subtitleStyle={{ color: '#FFF', fontSize: '1.5rem' }}
      />
      <div className="app-container">
        <div className="reviews-grid">
          {reviewsList.map((review) => (
            <Link to={review.path} key={review.title} style={{ textDecoration: 'none' }}>
              <MovieCard
                poster={review.poster}
                title={review.title}
                synopsis={review.synopsis}
                titleStyle={{ fontSize: '3rem', fontWeight: 'bold', color: '#FFFFFF' }}
                cardStyle={review.cardStyle}
              />
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Reviews;