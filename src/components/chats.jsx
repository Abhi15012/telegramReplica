import React, { useContext, useState } from 'react';
import Fetchmessage from './fetching/fetchmessage';
import { DataContext } from '../contextAPI/data';


const Chats = ({ arrdata }) => {

const {GetUid}=useContext(DataContext)
const {getChats,lastmsg,chatidd}=useContext(DataContext)


  return (
   
    <div className="chats bg-white h-screen grid row-auto grid-flow-row mt-3 gap-2 overflow-x-scroll">
      
      {arrdata.map((item, index) => (
       
        <div key={index} className="mes w-full h-16 overflow-hidden flex dark:bg-gray-800 cursor-pointer hover:bg-gray-200" onClick={()=>{
          GetUid(item.id)
          getChats(item.creator.id )
        }}>
          <img
            src="https://images.nightcafe.studio/jobs/a72eqa445UsQ8MFaJRGS/a72eqa445UsQ8MFaJRGS--1--0uihp_7.8125x.jpg?tr=w-1600,c-at_max"
            width="60px"
            height="0px"
            className="rounded-full ml-3 h-18"
            alt="profilepic" 
            
          />
 
          
          <div className="text">
            <p className="dark:text-white ml-5 mt-2 font-medium" >{item.creator.name }</p>
            <p className="dark:text-white ml-5 mt-1 h-5 overflow-hidden font-thin text-sm ">
             {chatidd && chatidd===item.id ?lastmsg: <><div>Lorem ipsum dolor sit amet.</div></> }
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
