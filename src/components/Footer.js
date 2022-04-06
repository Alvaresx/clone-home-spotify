import React from "react";
import Logo from "../img/logo.png";

const Footer = () => {
  return (
    <div className="bg-black h-[530px]">
      <img src={Logo} className="w-32" alt="Logo do Spotify na cor branca" />
      <ul className="text-white">
        <li>Empresa</li>
        <li>Sobre</li>
        <li>Empregos</li>
        <li>For the Record</li>
      </ul>
      <ul className="text-white">
        <li>Comunidade</li>
        <li>Para Artistas</li>
        <li>Desenvolvedores</li>
        <li>Publicidade</li>
        <li>Investidores</li>
        <li>Fornecedores</li>
      </ul>
      <ul className="text-white">
        <li>Links Úteis</li>
        <li>Suporte</li>
        <li>Player da Web</li>
        <li>Aplicativo móvel grátis</li>
      </ul>
      <div>
        <ul className="text-white">
          <li>Legal</li>
          <li>Centro de Privacidade</li>
          <li>Política de privacidade</li>
          <li>Cookies</li>
          <li>Sobre anúncios</li>
        </ul>
        <ul className="text-white">
          <li>Brasil</li>
          <li>2022 Spotify AB</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
