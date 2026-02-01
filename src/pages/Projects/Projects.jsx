import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div className="container">
      <div className="portfolio-grid">
        {/* Onlayn Do'kon - Elektronika */}
        <div className="portfolio-item">
          <img
            src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Elektronika mahsulotlari"
            className="portfolio-image"
          />
          <h3>Onlayn Do'kon</h3>
          <p>Elektronika mahsulotlariga ixtisoslashgan e-tijorat platformasi</p>
        </div>
        <p className="additional-info">
          Ushbu do'kon zamonaviy elektronika mahsulotlarini taklif qiladi, shu jumladan telefonlar, noutbuklar va aqlli soatlar.
        </p>

        {/* Onlayn Do'kon - Moda */}
        <div className="portfolio-item">
          <img
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Moda kiyimlari"
            className="portfolio-image"
          />
          <h3>Onlayn Do'kon</h3>
          <p>Eng so'nggi moda tendensiyalari va uslublarni taqdim etuvchi do'kon</p>
        </div>
        <p className="additional-info">
          Moda do'koni sifatida har mavsumda yangi kiyimlar va aksessuarlar taqdim etiladi.
        </p>

        {/* Onlayn Do'kon - Kitoblar */}
        <div className="portfolio-item">
          <img
            src="https://images.unsplash.com/photo-1524578271613-d550eacf6090?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Raqamli kutubxona"
            className="portfolio-image"
          />
          <h3>Onlayn Do'kon</h3>
          <p>Keng kitoblar to'plamini taklif qiluvchi raqamli kutubxona</p>
        </div>
        <p className="additional-info">
          Dunyo adabiyotidagi eng yaxshi kitoblar, shu jumladan klassika va zamonaviy asarlar.
        </p>

        {/* Onlayn Do'kon - Mebel */}
        <div className="portfolio-item">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Zamonaviy mebel"
            className="portfolio-image"
          />
          <h3>Onlayn Do'kon</h3>
          <p>Zamonaviy mebel kolleksiyalari uchun uy dekor do'koni</p>
        </div>
        <p className="additional-info">
          Minimalistik va zamonaviy uslubdagi mebellar, har qanday uy uchun mos.
        </p>

        {/* Onlayn Do'kon - Sport anjomlari */}
        <div className="portfolio-item">
          <img
            src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Sport anjomlari"
            className="portfolio-image"
          />
          <h3>Onlayn Do'kon</h3>
          <p>Sport anjomlari va jihozlari uchun maxsus do'kon</p>
        </div>
        <p className="additional-info">
          Sportchilar uchun barcha turdagi jihozlar, shu jumladan sport kiyimlari va aksessuarlar.
        </p>
      </div>
    </div>
  );
}

export default Projects;