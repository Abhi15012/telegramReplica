import React, { useContext, useEffect } from "react";
import { DataContext } from "../contextAPI/data";
import { TiTick } from "react-icons/ti";
import { RiCheckDoubleLine } from "react-icons/ri";

const Contentdis = () => {
  const { msgArr, chatsArr } = useContext(DataContext);



  return (
    <>
      <div className="overflow-y-scroll grid col-auto place-content-center  gap-3  h-full ">
        {msgArr.map((item, index) => {
          const timestamp = item.sender.updated_at;

        
          const [datepart, timePart] = timestamp.split("T");
          const [time, dottimePart] = timePart.split(".");

     const dates =[datepart]
     
   console.log(item.unanswered)
          if (chatsArr === item.sender.id) {
            return (
              <>
                <div className="">
               {dates.map(items=>{

                
               })}
                  <img
                    src="https://images.nightcafe.studio/jobs/a72eqa445UsQ8MFaJRGS/a72eqa445UsQ8MFaJRGS--1--0uihp_7.8125x.jpg?tr=w-1600,c-at_max"
                    width="30px"
                    height="0px"
                    className="rounded-full inline float-left -ml-20   h-18 "
                    alt="profilepic"
                  />
                  <div
                    className=" text-white bg-gradient-to-r from-slate-500 to-slate-300 max-h-24 pl-4 rounded-3xl  -ml-6 max-w-60  block "
                    key={index}
                  >
                    <div className="text-sm  font-bold mb-3 text-black">
                      {item.sender.name}
                    </div>
                    {item.message}
                    <div className="time">{time}</div>
                  </div>
                </div>
              </>
            );
          } else {
            return (
              <>
                <div className="flex justify-end">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-pink-500 max-w-96 p-2 ml-52 rounded-3xl right-10px"
                    key={index}
                  >
                    <div className="text-sm  font-bold mb-3 text-black">
                      {item.sender.name}
                    </div>

                    {item.message}
                    <div className="time">
                      {time}{" "}
                      <div className="read flex text-xl ml-2  text-blue-700">
                        <RiCheckDoubleLine />
                      </div>{" "}
                    </div>
                  </div>
                  <img
                    src="https://beyondchats.com/wp-content/uploads/2024/04/output-onlinepngtools.png"
                    width="35px"
                    height="0px"
                    className="rounded-full  ml-8 mt-2 h-10 "
                    alt="profilepic"
                  />
                </div>
              </>
            );
          }
        })}
      </div>
    </>
  );
};

export default Contentdis;
