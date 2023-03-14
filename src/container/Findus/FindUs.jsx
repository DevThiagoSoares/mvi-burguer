import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Ache-nos</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Rua Nicolau Coelho, N 123, Próximo a Avenida das Torres</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Seg - Sex: 19:00 - 23:00</p>
        <p className="p__opensans">Sáb - Dom: 19:00 - 00:30</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visite-nos</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
