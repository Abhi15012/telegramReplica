import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { HiBars3 } from "react-icons/hi2";
import Recents from "./recents";
import FetchChats from "./fetching/fetchChats";
import { Outlet } from "react-router-dom";
import Menu from "./menu";

const ChatBar = () => {
  const [search, setSearch] = useState(false);
  const [toggleBar, setBar] = useState(true);
  const [menu, setMenu] = useState(false);

  const handleButtonClick = () => {
    setBar(!toggleBar);
    setSearch(false);
{!search &&   setMenu(!menu);}
  };


  return (
    <div className="chatBar w-1/5 min-w-96 box-border overflow-hidden h-screen ">
      <div className="head bg-slate-50 w-full mt-5">
       
        <button
          className="bars text-2xl z-10 text-slate-600 ml-4 cursor-pointer inline border-none"
          onClick={handleButtonClick}
        >
          {!toggleBar ? <FaArrowLeft /> : <HiBars3 />}
        </button>
        <div className={`menu ${menu ? 'scale-100' : 'scale-0'}`}>
          <Menu />
        </div>
        <div className="searchbar">
          <input
            className="search bg-white flex sm:min-w-32 pl-3 w-5/6 rounded-xl border-slate-400 h-8 ml-14 text-slate-500 -mt-8 "
            placeholder="Search"
            onClick={() => {
              setSearch(true);
              setBar(!toggleBar);
            }}
          />
      
        </div>
      </div>
      {search ? <Recents /> : <FetchChats  />}
    </div>
  );
};

export default ChatBar;
