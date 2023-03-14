import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Persiga O Novo Sabor" />
      <h1 className="app__header-h1">A Chave Para um Lanche Perfeito!</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Entre em um mundo de sabor e prazer com nossos hambúrgueres artesanais, preparados com paixão e dedicação para satisfazer o seu paladar mais exigente. Venha para a nossa hamburgueria e descubra a verdadeira essência do hambúrguer perfeito!</p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
