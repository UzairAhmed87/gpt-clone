import React from "react";

import gptLogo from "../assets/chatgpt.svg";
import plus from "../assets/add-30.png";
import message from "../assets/message.svg";
import home from "../assets/home.svg";
import saved from "../assets/bookmark.svg";
import rocket from "../assets/rocket.svg";
export function Side() {
  return (
    <>
      <div className="bg-blue-950 text-gray-200 min-h-screen h-full w-1/5 flex flex-col justify-between border-r  border-gray-600">
        <div className=" flex flex-col  justify-center items-start gap-5 ml-5">
          <div className="flex items-center justify-start gap-2 mt-5">
            <img src={gptLogo} alt="" />

            <span className="text-xl font-semibold">ChatGPT</span>
          </div>
          <button className="flex items-center  bg-blue-600 px-16 py-2 text-white rounded-md">
            <img src={plus} className="w-5" alt="" />
            New Chat
          </button>
          <div className="flex flex-col items-start gap-2 mt-3 text-sm">
            <button className="border p-3  border-gray-600 rounded-md flex gap-2 items-center pr-10">
              <img src={message} alt="" />
              What is Programming?
            </button>
            <button className="border p-3 border-gray-600 rounded-md flex gap-2 items-center pr-10">
              <img src={message} alt="" />
              How to use api?
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-5 mb-10 ml-5 border-t pt-7 border-gray-600 text-sm">
          <div className="flex gap-2">
            <img src={home} className="w-4"  alt="" />
            Home
          </div>
          <div className="flex gap-2">
            <img src={saved} className="w-4"  alt="" />
            Saved
          </div>
          <div className="flex gap-2">
            <img src={rocket} className="w-4"  alt="" /> 
            Upgrade to Pro
          </div>
        </div>
      </div>
    </>
  );
}
