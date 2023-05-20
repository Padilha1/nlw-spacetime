import React from "react";

function EmptyMemories() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <p className="w-[360px] text-center leading-relaxed">
        {" "}
        Voce ainda nao registrou nenhuma lembranca, comece a{" "}
        <a href="" className="underline hover:text-gray-50">
          criar agora
        </a>
        !
      </p>
    </div>
  );
}

export default EmptyMemories;
