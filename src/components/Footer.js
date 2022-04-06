import React from "react";
import Logo from "../img/logo.png";

const Footer = () => {
  return (
    <div className="bg-black h-[530px] p-20 grid content-between">
      <div className="flex justify-between">
        <img
          src={Logo}
          className="w-32 h-fit"
          alt="Logo do Spotify na cor branca"
        />
        <ul className="text-white leading-10">
          <li className="uppercase text-[#919496] text-[12px] font-bold">
            Empresa
          </li>
          <li>Sobre</li>
          <li>Empregos</li>
          <li>For the Record</li>
        </ul>
        <ul className="text-white leading-10">
          <li className="uppercase text-[#919496] text-[12px] font-bold">
            Comunidade
          </li>
          <li>Para Artistas</li>
          <li>Desenvolvedores</li>
          <li>Publicidade</li>
          <li>Investidores</li>
          <li>Fornecedores</li>
        </ul>
        <ul className="text-white leading-10">
          <li className="uppercase text-[#919496] text-[12px] font-bold">
            Links Úteis
          </li>
          <li>Suporte</li>
          <li>Player da Web</li>
          <li>Aplicativo móvel grátis</li>
        </ul>
      </div>

      <div className="flex justify-between text-[12px] text-[#919496] items-end leading-7">
        <ul className="flex justify-between w-[500px]">
          <li>Legal</li>
          <li>Centro de Privacidade</li>
          <li>Política de privacidade</li>
          <li>Cookies</li>
          <li>Sobre anúncios</li>
        </ul>
        <ul className="text-right">
          <li>Brasil</li>
          <li>2022 Spotify AB</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
