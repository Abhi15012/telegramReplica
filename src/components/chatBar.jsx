import React from 'react'
import { FaBars } from 'react-icons/fa'
import { HiBars3 } from 'react-icons/hi2'
import { RxCross2 } from 'react-icons/rx'

const ChatBar = () => {
  return (
    <div className='chatBar h-screen '>
      <div className="head bg-slate-50 flex flex-grow-1 mt-4" >
     <div className="bars text-2xl z-10 mt-1 text-slate-500 ml-3  "><HiBars3 /></div>
     <div className="searchbar">
     <input className="search bg-white flex sm:min-w-32 pl-3  w-72 rounded-xl border-slate-400  h-8 ml-6 text-slate-500 " placeholder='Search' /><span className='cursor-pointer text-slate-500  z-40 absolute top-6 translate-x-72'><RxCross2/></span>
      </div>
      </div>
      <div className="chats bg-slate-200  ">


</div>
    </div>
  )
}

export default ChatBar
