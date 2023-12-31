"use client";

import Image from "next/image";
import { useState, useContext } from "react";

import Menu from "./_lib/menu.svg";
import plane from "./_lib/plane.svg";
import Verified from "./_lib/verifierd.svg";
import Mod from "./_lib/mod.svg";
import Diamond from "./_lib/diamond.svg";
import Profile from "./_lib/profile.png";

import { ChatContext } from "../_contexts/Chat";

function Message({ name, message, togle, image, medals }) {
  return (
    <div
      className={`p-2 flex flex-col hover:bg-kick-gray-50 rounded-[5px] transition-all ${
        togle ? "space-y-[5px]" : " space-y-0"
      }`}
    >
      <div
        className={`flex items-center ${
          togle ? "flex-row space-x-2" : "flex-col space-y-2"
        }`}
      >
        <div className="w-7 h-7 rounded-[5px] bg-kick-gray-20 overflow-hidden">
          <Image src={image} />
        </div>
        <div
          className={`flex ${
            togle ? "flex-row space-x-1" : "flex-col space-y-1"
          }`}
        >
          {medals.map((e, i) => (
            <Image src={e} key={i} />
          ))}
        </div>
        {togle && (
          <div className="flex flex-1 w-3">
            <span className="text-sm w-full truncate" title={name}>
              {name}
            </span>
          </div>
        )}
      </div>
      {togle && (
        <div
          className={`transition-all overflow-hidden ${
            togle ? "h-auto" : "h-1"
          }`}
        >
          <p className="text-sm">{message}</p>
        </div>
      )}
    </div>
  );
}

export default function Chat() {
  const { chatState, setChatState } = useContext(ChatContext);
  return (
    <div
      className={`2xl:h-full h-auto pb-5 transition-all duration-150 flex flex-col grow shrink 2xl:grow-0 2xl:shrink-0 ${
        chatState ? "w-full 2xl:w-[324px]" : "w-full 2xl:w-14"
      }`}
    >
      <div className="rounded-[10px] w-full h-full flex flex-col space-y-3">
        <div
          className={`p-4 bg-kick-gray-75 2xl:flex rounded-[10px] transition-all h-14 hidden ${
            chatState ? "justify-between" : "justify-center"
          }`}
        >
          <button>
            <Image
              src={Menu}
              height={16}
              onClick={() => setChatState(!chatState)}
              className={`transition-all ${
                chatState ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
          {chatState && (
            <div className={`transition-all ${chatState ? "" : ""}`}>
              <span
                className={`uppercase transition-all font-bold text-base ${
                  chatState ? "" : ""
                }`}
              >
                Chat
              </span>
            </div>
          )}
          <div></div>
        </div>
        <div className="p-2 bg-kick-gray-75 flex flex-col rounded-[10px] flex-1 h-1 justify-end transition-all">
          <div className="flex flex-col overflow-y-auto no-scroll transition-all">
            <Message
              name={"OngSiblU"}
              message={"asdasfasdasfasd asdasd asd asdjsadhflslkj asldjkfhlas"}
              togle={chatState}
              image={Profile}
              medals={[Verified, Mod, Diamond]}
            />
            <Message
              name={"OngSiblU"}
              message={"asdasfasdasfasd asdasd asd asdjsadhflslkj asldjkfhlas"}
              togle={chatState}
              image={Profile}
              medals={[Verified]}
            />
          </div>
        </div>
        <div
          className={`p-4 bg-kick-gray-75 rounded-[10px] space-x-3 items-center transition-all ${
            chatState ? "flex" : "hidden"
          }`}
        >
          <div className="w-full">
            <div className="w-full flex grow p-3 bg-kick-gray-50 rounded-[5px] outline-none transition-all resize-none no-scroll"></div>
          </div>
          <div className="flex justify-end">
            <button className="bg-kick-green inline-block text-kick-gray-100 p-2 rounded-[5px]">
              <Image src={plane} width={28} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
