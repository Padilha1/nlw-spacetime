import React from 'react'
import nlwLogo from "../assets/nlw-spacetime-logo.svg";
import Image from "next/image";

function Hero() {
  return (
    <div className="space-y-5">
          <Image src={nlwLogo} alt="Nlw Spacetime logo" />
          <div className="max-w-[420px] space-y-1">
            <h1 className="text-4xl font-bold leading-tight text-gray-50">
              Sua Cápsula do Tempo
            </h1>
            <p className="text-lg leading-relaxed">
              Colecione momentos marcantes da sua jornada e compartilhe (se
              quiser) com o mundo!
            </p>
          </div>
          <a
            className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-800"
            href=""
          >
            {" "}
            CADASTRAR LEMBRANÇA{" "}
          </a>
    </div>
  )
}

export default Hero