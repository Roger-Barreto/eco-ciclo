import React from 'react';

export default function MainSection() {
  return (
    <section
      className="w-full h-screen bg-cover bg-center pt-nav"
      style={{ backgroundImage: 'url("main-section-bg.webp")' }}>
      <img src="star.svg" alt="star" className="absolute top-0 left-0 w-215 h-215 z-0" />
      <img src="star_2.svg" alt="star" className="absolute bottom-0 right-0 w-269 h-269 z-0" />
    </section>
  );
}
