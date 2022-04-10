import React from "react";
import Logo from "../img/logo.png";
import {Menu} from "@mui/icons-material";

const Header = () => {
  return (
    <div className="bg-black h-[80px] px-20 flex place-content-between items-center">
      <img src={Logo} className="w-32" alt="Logo do Spotify na cor branca" />
      <div className="text-white w-1/2 font-bold lg:block md:hidden">
        <ul className="flex place-content-around">
          <li className="hover:text-[#1ed760]">Premium</li>
          <li className="hover:text-[#1ed760]">Suporte</li>
          <li className="hover:text-[#1ed760]">Baixar</li>
          <li>|</li>
          <li className="hover:text-[#1ed760]">Inscrever-se</li>
          <li className="hover:text-[#1ed760]">Entrar</li>
        </ul>
      </div>
      <div className="lg:hidden md:block text-white">
        <Menu />
      </div>
    </div>
  );
};

export default Header;
