import Image from "next/image";

import Heart from "./_lib/heart.svg";
import Gift from "./_lib/gift.svg";
import Spark from "./_lib/spark.svg";
import People from "./_lib/people.svg";
import Share from "./_lib/share.svg";

export default function Center({ streamer }) {
  return (
    <div className="flex flex-col grow-0 shrink-0 2xl:grow 2xl:shrink 2xl:h-full overflow-y-auto no-scroll rounded-t-[10px] pb-0 2xl:pb-5">
      <div className="space-y-4">
        <div className="w-full aspect-video max-h-[700px] rounded-[10px] bg-kick-gray-25"></div>
        <div className="w-full flex space-x-3">
          <div className="relative sm:w-20 sm:h-20 w-16 h-16 flex shrink-0">
            <a href="#">
              <div className="rounded-[20px] w-full h-full bg-kick-gray-25 border-kick-green border-2 overflow-hidden">
                <img src={streamer.image} className="w-full" alt="" />
              </div>
              <span className="absolute w-16 text-center -bottom-1/4 sm:-bottom-1/4 sm:-translate-y-1/4 left-2/4 -translate-x-2/4 bg-kick-green p-[5px] text-xs text-kick-gray-100 font-bold rounded-[5px]">
                EN VIVO
              </span>
            </a>
          </div>
          <div className="flex flex-col flex-1 space-y-3">
            <div className="flex justify-between flex-wrap gap-3">
              <div className="gap-3 flex items-end">
                <a href="" className="text-xl">
                  {streamer.streamer}
                </a>
                <span className="text-sm italic text-kick-gray-20">
                  13,2 M de seguidores
                </span>
              </div>
              <div className="gap-3 flex">
                <button className="py-[5px] px-2 bg-kick-green rounded-[5px] text-kick-gray-100 font-medium flex items-center space-x-2 transition-all hover:bg-kick-green/90">
                  <Image src={Heart} height={16} />
                  <span className="xl:block hidden">Seguir</span>
                </button>
                <button className="py-[5px] px-2 bg-kick-gray-25 rounded-[5px] text-white flex items-center space-x-2 transition-all hover:bg-kick-gray-25/70">
                  <Image src={Gift} height={16} />
                  <span className="xl:block hidden">
                    Regala una Suscripción
                  </span>
                </button>
                <button className="py-[5px] px-2 bg-kick-gray-25 rounded-[5px] text-white flex items-center space-x-2 transition-all hover:bg-kick-gray-25/70">
                  <Image src={Spark} height={16} />
                  <span className="xl:block hidden">Suscribete</span>
                </button>
              </div>
            </div>
            <div className="flex justify-between content-center gap-4">
              <div>
                <span className="text-sm">
                  CARA A CARA ENTRE LOS BOXEADORES DE LA VELADA DEL AÑO III |
                  SOLO QUEDAN 10 DÍAS
                </span>
              </div>
              <div className="gap-4 hidden xl:flex items-center shrink-0">
                <div>
                  <Image src={People} height={16} />
                </div>
                <div className="text-sm space-x-2 text-center">
                  <span className="text-kick-green">153.000</span>
                  <span className="text-kick-gray-20">Espectadores</span>
                </div>
                <div>
                  <a href="#">
                    <Image src={Share} height={16} />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex justify-between content-center">
              <div className="gap-3 flex flex-wrap">
                <a className="text-kick-green" href="#">
                  {streamer.category}
                </a>
                <a
                  className="py-[5px] px-[10px] bg-kick-gray-50 rounded-[5px] text-kick-gray-20 flex text-sm"
                  href="#"
                >
                  <span>Español</span>
                </a>
                <a
                  className="py-[5px] px-[10px] bg-kick-gray-50 rounded-[5px] text-kick-gray-20 flex text-sm"
                  href="#"
                >
                  <span>IRL</span>
                </a>
                <a
                  className="py-[5px] px-[10px] bg-kick-gray-50 rounded-[5px] text-kick-gray-20 flex text-sm"
                  href="#"
                >
                  <span>España</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full aspect-video max-h-[700px] rounded-[10px] bg-kick-gray-25 hidden 2xl:block"></div>
        <div className="w-full aspect-video max-h-[700px] rounded-[10px] bg-kick-gray-25 hidden 2xl:block"></div>
      </div>
    </div>
  );
}
