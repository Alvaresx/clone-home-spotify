import React from "react";

const Content = () => {
  return (
    <div className="bg-[#2941ab] lg:h-[846px] h-screen bg-content bg-cover bg-center">
      <h1 className="text-[#1ed760] font-bold lg:text-[150px] sm:text-[100px] text-[50px] tracking-tight lg:leading-[150px] sm:leading-[100px] leading-[50px] flex justify-center text-center pt-40 lg:pt-40 sm:pt-20">
        Escutar muda <br />
        tudo
      </h1>
      <h6 className="text-center mt-5 lg:mt-20 text-[#1ed760] font-semibold text-lg w-4/5 md:w-[400px] lg:w-auto m-auto">
        Milhões de músicas e podcasts para explorar. E nem precisa de cartão de
        crédito.
      </h6>
      <button className="flex mx-auto my-0 mt-10 text-[#2941ab] font-bold bg-[#1ed760] py-3 px-8 uppercase rounded-full">
        Baixe o Spotify Free
      </button>
    </div>
  );
};

export default Content;
