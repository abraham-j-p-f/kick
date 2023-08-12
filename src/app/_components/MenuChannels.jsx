"use client";

import Image from "next/image";
import Menu from "./_lib/menu.svg";
import { useState, useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Streamers, { StreamersContext } from "../_contexts/Streamers";

export const streamers = [
  {
    streamer: "Ibai",
    category: "Eventos",
    time: "1:02:32",
    viewers: "47.402",
    image:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/574228be-01ef-4eab-bc0e-a4f6b68bedba-profile_image-150x150.png",
  },
  {
    streamer: "Illojuan",
    category: "Grand Theft Auto 3",
    time: "1:02:32",
    viewers: "47.402",
    image:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/a49448cc-2830-4fc3-adf1-3f9be4d3152a-profile_image-150x150.png",
  },
  {
    streamer: "Alexelcapo",
    category: "Just Chatting",
    time: "1:02:32",
    viewers: "47.402",
    image:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/78528288-6216-4e21-872b-7f415b602a9a-profile_image-150x150.png",
  },
  {
    streamer: "Luh",
    category: "Minecraft",
    time: "1:02:32",
    viewers: "47.402",
    image:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/22e69d04-996e-419b-a83d-412fb7abe9ed-profile_image-150x150.png",
  },
  {
    streamer: "jokkijokki",
    category: "Mario Double Dash",
    time: "1:02:32",
    viewers: "47.402",
    image:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/7fae7f10-2660-4947-9e75-4f8b33b6e525-profile_image-150x150.png",
  },
  {
    streamer: "auronplay",
    category: "Only Up",
    time: "1:02:32",
    viewers: "47.402",
    image:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/bf1d52e3-b46b-4c07-9b4f-a1ab8c4e40f8-profile_image-150x150.png",
  },
  {
    streamer: "TheGrefg",
    category: "Fortnite",
    time: "1:02:32",
    viewers: "47.402",
    image:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/96fef5c0-9ec8-4fd3-a360-90b589c3ff0d-profile_image-150x150.png",
  },
  {
    streamer: "JUJALAG",
    category: "Jump King",
    time: "1:02:32",
    viewers: "47.402",
    image:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/a845fcab-daac-4cf4-8d75-02352b69d704-profile_image-150x150.png",
  },
  {
    streamer: "AcreVersion",
    category: "Dark Souls 2",
    time: "1:02:32",
    viewers: "47.402",
    image:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/3f376d20-7f92-4a03-952a-8a5ead20268d-profile_image-150x150.png",
  },
];

function Channel({
  streamer,
  category,
  time,
  viewers,
  togle,
  image,
  isActive,
}) {
  return (
    <Link
      className={`overflow-hidden block relative w-[290px] h-[118px] transition-all duration-500 rounded-xl bg-kick-gray-75 hover:bg-kick-gray-75/70 border-2 ${
        togle ? "w-[294px] h-[122px]" : "w-[90px] h-[90px]"
      } ${isActive ? "border-kick-gray-25" : "border-kick-gray-75"}`}
      href={`/${streamer}`}
    >
      <div className="block overflow-hidden p-2 rounded-xl w-[290px] absolute top-0 left-0">
        <div className={`flex space-x-4 pb-4`}>
          <div className="w-[70px] h-[70px] rounded-[20px] bg-kick-gray-25 overflow-hidden">
            <img src={image} alt={streamer + "'s picture"} />
          </div>
          <div
            className={`bg-kick-gray-50 flex flex-1 flex-col rounded-[20px] justify-center w-52 px-6`}
          >
            <span>{streamer}</span>
            <span className="w-full truncate font-light" title="Just Chatting">
              {category}
            </span>
          </div>
        </div>
        <div className={`flex justify-between text-xs transition-all`}>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-kick-green rounded-full mr-1"></div>
            <span>{time}</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-kick-green rounded-full mr-1"></div>
            <span>{viewers}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function Channels({ togle }) {
  const chanels = streamers;
  const pathname = usePathname();
  return (
    <div className="h-full max-h-full overflow-y-auto no-scroll rounded-xl">
      <div className="flex flex-col gap-3 pb-5">
        {chanels.map((chanel, i) => {
          const isActive = pathname === `/${chanel.streamer}`;
          return (
            <Channel
              streamer={chanel.streamer}
              category={chanel.category}
              time={chanel.time}
              viewers={chanel.viewers}
              togle={togle}
              image={chanel.image}
              key={i}
              isActive={isActive}
            />
          );
        })}
      </div>
    </div>
  );
}

export default function MenuChannels({ menu }) {
  const { streamersState, setStreamersState } = useContext(StreamersContext);

  return (
    <menu className="h-full max-h-full hidden md:flex md:w-auto w-full flex-col transition-all">
      <div className="mb-3 flex justify-between h-7 over">
        <div className="flex flex-1 relative">
          <h1
            className={`text-xl font-bold transition-all absolute top-0 left-0 ${
              streamersState ? "" : "-translate-x-16 opacity-0"
            }`}
          >
            Canales que sigo
          </h1>
        </div>
        <button>
          <Image
            src={Menu}
            height={16}
            onClick={() => setStreamersState(!streamersState)}
            className={`transition-all ${streamersState ? "" : "rotate-180"}`}
          />
        </button>
      </div>
      <Channels togle={streamersState} />
    </menu>
  );
}
