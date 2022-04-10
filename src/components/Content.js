import React from "react";

const Content = () => {
  return (
    <div className="bg-[#2941ab] lg:h-[846px] md:h-screen bg-content lg:bg-cover md:bg-150%">
      <h1 className="text-[#1ed760] font-bold lg:text-[150px] tracking-tight lg:leading-[150px] flex justify-center text-center pt-40 md:text-[100px] md:leading-[100px]">
        Escutar muda <br />
        tudo
      </h1>
      <h6 className="text-center lg:mt-20 md:mt-5 text-[#1ed760] font-semibold text-lg lg:w-auto md:w-[400px] m-auto">
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
