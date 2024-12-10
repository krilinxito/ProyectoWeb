import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="socials">
        {/* Replace '#' with actual links */}
        <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon youtube-icon"
          >
            <path d="M22.54 6.42a2.78 2.78 0 00-1.95-2c-1.7-.42-8.59-.42-8.59-.42s-6.88 0-8.59.42a2.78 2.78 0 00-1.95 2A29.94 29.94 0 002 12a29.94 29.94 0 00.46 5.58 2.78 2.78 0 001.95 2c1.7.42 8.59.42 8.59.42s6.88 0 8.59-.42a2.78 2.78 0 001.95-2A29.94 29.94 0 0024 12a29.94 29.94 0 00-.46-5.58z"></path>
            <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>
          </svg>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon instagram-icon"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37a4 4 0 11-4.73-4.73 4 4 0 014.73 4.73z"></path>
            <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
          </svg>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon linkedin-icon"
          >
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
      </div>
      <p>Hecho por Maximiliano Gómez Mallo</p>
    </footer>
  );
};

export default Footer;
