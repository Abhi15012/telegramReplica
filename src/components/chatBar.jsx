import React, { useState } from "react";
import { FaArrowLeft, FaBars } from "react-icons/fa";
import { HiBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import Recents from "./recents";
import Chats from "./chats";
import FetchChats from "./fetching/fetchChats";
import { Outlet } from "react-router-dom";


const ChatBar = () => {
  const [Search, setSearch] = useState(false);
const[toggleBar, setbar]=useState(true)

  return (
    <div className="chatBar w-1/5 min-w-96 box-border overflow-hidden h-screen ">
    
      <div className="head bg-slate-50  w-full mt-5">
        <button
          className="bars   text-3xl z-10  text-slate-500 ml-4 cursor-pointer inline"
          onClick={() => {
         setbar(!toggleBar)
      
          }}
        >
          {!toggleBar?<FaArrowLeft />:<HiBars3 />}
        </button>
        <div className="searchbar">
          <input
            className="search bg-white flex sm:min-w-32 pl-3  min- w-5/6 rounded-xl border-slate-400  h-8 ml-14 text-slate-500 -mt-9 "
            placeholder="Search
            "
            onClick={() => {
              setSearch(true);
            }}
          />
        <Outlet/>
        </div>
      </div>
      {Search === true ? (
     <Recents/>
      ) : (
     <FetchChats/> 
      )}
    </div>
  );
};

export default ChatBar;
