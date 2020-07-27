import React from 'react';
import { FooterBase } from './styles';

const Footer = () => {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
      <p>
        <a href="https://github.com/JeronimoHermano/">Github</a>
        <span> | </span>
        <a href="https://www.linkedin.com/in/jeronimohermano/">Linkedin</a>
      </p>
    </FooterBase>
  );
}

export default Footer;
