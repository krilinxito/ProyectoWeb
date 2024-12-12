import React from 'react';
import PropTypes from 'prop-types';
import './HeroSection.css'; // Archivo CSS para estilos personalizados

const HeroSection = ({ backgroundImage, title, subtitle, overlayColor, titleStyle, subtitleStyle }) => {
  return (
    <div className="hero-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-overlay" style={{ backgroundColor: overlayColor }}></div>
      <div className="hero-content">
        <h1 className="hero-title" style={{ ...titleStyle }}>{title}</h1>
        {subtitle && <h2 className="hero-subtitle" style={{ ...subtitleStyle }}>{subtitle}</h2>}
      </div>
    </div>
  );
};

HeroSection.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  overlayColor: PropTypes.string,
  titleStyle: PropTypes.object,
  subtitleStyle: PropTypes.object,
};

HeroSection.defaultProps = {
  subtitle: '',
  overlayColor: 'rgba(0, 0, 0, 0.5)',
  titleStyle: {},
  subtitleStyle: {},
};

export default HeroSection;
