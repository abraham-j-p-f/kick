"use client";
import Chat from "./Chat";
import Center from "./Center";
import { streamers } from "../_components/MenuChannels";
import User from "../_components/_lib/user";

function NotFound({ streamer }) {
  return (
    <div className="flex flex-col flex-1 h-full pb-5">
      <div className="rounded-[5px] no-scroll pl-0 pt-0 md:pl-3 md:pt-3 flex flex-col gap-3 justify-center items-center h-full">
        <div className="aspect-square w-64 bg-kick-gray-75 rounded-3xl border-8 border-kick-gray-50 flex justify-center items-center">
          <User className="fill-kick-gray-25 h-32" />
        </div>
        <span className="text-kick-gray-20 max-w-2xl text-xl text-center">
          Lo sentimos, el streamer{" "}
          <span className="font-bold text-kick-green">{streamer}</span> no ha
          sido encontrado
        </span>
      </div>
    </div>
  );
}

export default function Streamer({ params }) {
  const streamerData = streamers.find((s) => s.streamer == params.streamer);
  if (streamerData) {
    return (
      <div className="flex flex-1 h-full overflow-y-auto no-scroll rounded-t-[10px] gap-3">
        <Center streamer={streamerData} />
        <Chat />
      </div>
    );
  }
  return <NotFound streamer={params.streamer} />;
}
