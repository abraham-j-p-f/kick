import Image from "next/image";
import Link from "next/link";

import AlfaRomeo from "./alfaRomeo.svg";
import Icon from "./_components/_lib/White.svg";

import Car from "./car.png";

import Casino from "./_components/(home)/_lib/slotsCasino.webp";
import Apex from "./_components/(home)/_lib/apex.webp";
import Chatting from "./_components/(home)/_lib/chatting.webp";
import Fortnite from "./_components/(home)/_lib/fortnite.webp";
import Games from "./_components/(home)/_lib/games.webp";
import GtaV from "./_components/(home)/_lib/gtav.webp";
import HotTubs from "./_components/(home)/_lib/hotTubs.webp";
import LOL from "./_components/(home)/_lib/lol.webp";
import Music from "./_components/(home)/_lib/music.webp";
import RuneScape from "./_components/(home)/_lib/runeScape.webp";
import Tarkov from "./_components/(home)/_lib/tarkov.webp";
import Warzone from "./_components/(home)/_lib/warzone.webp";

const categories = [
  {
    name: "Slots & Casino",
    viewers: 123,
    tags: ["Juegos de Azar"],
    Image: Casino,
  },
  {
    name: "Conversando",
    viewers: 32174,
    tags: ["Vida real (IRL)"],
    Image: Chatting,
  },
  {
    name: "Games + Demos",
    viewers: 5889,
    tags: ["Juego de aventuras"],
    Image: Games,
  },
  {
    name: "Call of Duty: Warzone 2.0",
    viewers: 5830,
    tags: ["Shooter FPS"],
    Image: Warzone,
  },
  {
    name: "Grand Theft Auto V (GTA)",
    viewers: 5212,
    tags: ["Shooter", "Acción"],
    Image: GtaV,
  },
  {
    name: "Fortnite",
    viewers: 4986,
    tags: ["Shooter"],
    Image: Fortnite,
  },
  {
    name: "Old School RuneScape",
    viewers: 3821,
    tags: ["RPG", "MMO"],
    Image: RuneScape,
  },
  {
    name: "Apex Legends",
    viewers: 2233,
    tags: ["Shooter FPS"],
    Image: Apex,
  },
  {
    name: "Música",
    viewers: 3821,
    tags: ["Música"],
    Image: Music,
  },
  {
    name: "Escape From Tarkov",
    viewers: 2086,
    tags: ["Simulación"],
    Image: Tarkov,
  },
  {
    name: "League of Legends ",
    viewers: 1771,
    tags: ["MOBA", "Acción"],
    Image: LOL,
  },
];

function VideoRecomended() {
  return (
    <div className="aspect-video bg-kick-gray-50 rounded hover:scale-[1.01] transition-all"></div>
  );
}

function Category({
  category = "Default",
  viewers = "0",
  tags = ["Default"],
  image = Casino,
}) {
  return (
    <div className="flex flex-col gap-1 w-40 shrink-0">
      <Link
        href={"#"}
        className="w-full aspect-[3/4] bg-kick-gray-50 shrink-0 rounded transition-all border-2 border-transparent hover:border-kick-green"
      >
        <Image src={image} alt={`${category} image's`} className="rounded" />
      </Link>
      <div className="flex flex-col gap-1">
        <Link
          href={"#"}
          className="font-bold text-base truncate transition-all hover:text-kick-green"
          title={category}
        >
          {category}
        </Link>
        <span
          className="text-sm text-kick-gray-20"
          title={`${viewers} Espectadores`}
        >
          {viewers} Espectadores
        </span>
        <div className="flex gap-1 no-scroll overflow-x-auto">
          {tags.map((e, i) => {
            return (
              <Link
                href={"#"}
                className="shrink-0 px-2 py-1 bg-kick-gray-50 rounded-full flex items-center"
                key={i}
              >
                <span className="text-xs align-middle text-kick-gray-20 hover:text-white transition-all">
                  {e}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col flex-1 h-full w-2">
      <div className="rounded-[5px] overflow-y-auto no-scroll pl-0 pt-0 md:pl-2 md:pt-3 space-y-6 pb-5">
        <div className="space-y-3">
          <div>
            <h1 className="text-[26.66px] font-bold">
              Streams <span className="text-kick-green">destacados</span>
            </h1>
          </div>
          <div className="grid grid-cols-1 mpd:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            <VideoRecomended />
            <VideoRecomended />
            <VideoRecomended />
            <VideoRecomended />
            <VideoRecomended />
            <VideoRecomended />
            <VideoRecomended />
            <VideoRecomended />
          </div>
        </div>
        <div className="space-y-3 w-full overflow-auto">
          <div>
            <h1 className="text-[26.66px] font-bold">
              Categorías <span className="text-kick-green">destacadas</span>
            </h1>
          </div>
          <div className="flex w-full max-w-full">
            <div className="w-full overflow-x-auto overflow-y-visible scroll-smooth hover:scroll-auto pb-3 custom-scroll">
              <div className="flex gap-3">
                {categories.map(({ name, tags, viewers, Image }, i) => {
                  return (
                    <Category
                      category={name}
                      tags={tags}
                      viewers={viewers}
                      key={i}
                      image={Image}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="flex relative min-h-36 2xl:h-36 rounded overflow-hidden">
          <div className="font-bold p-4 sm:p-8 z-10 flex gap-4 flex-wrap justify-around items-center 2xl:w-[1000px] w-full from-kick-greenTones-100/80 to-kick-greenTones-80/80 2xl:from-kick-greenTones-100 2xl:to-kick-greenTones-80 bg-gradient-to-r ">
            <div className="text-center sm:text-left">
              <div className="text-base sm:text-xl italic">
                <h1>Patrocinador Oficial</h1>
              </div>
              <div>
                <h1 className="uppercase text-xl sm:text-[26.66px]">
                  Equipo Alfa Romeo F1
                </h1>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 justify-around items-center">
              <Image src={AlfaRomeo} height={56} />
              <Image src={Icon} height={30} />
            </div>
          </div>
          <div className="flex flex-1 bg-kick-green min-w-[500px] absolute 2xl:relative w-full h-full 2xl:w-auto 2xl:h-auto">
            <Image src={Car} className="object-cover w-full" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-kick-greenTones-80 to-30% to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
