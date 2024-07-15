import React, { createContext, useState } from 'react';

// Create a context with a default value
export const DataContext = createContext({
  arr:"",
  GetUid: () => {},
  getData:()=>{},
  msgArr:[],
  lmsg:()=>{},
  lastmsg:[],
  chatid:()=>{},
  chatidd:[],
  chatsArr:[],
  getChats:()=>{}
});

const DataProvider = ({ children }) => {
  const [uid, setUid] = useState(null);
  const [msgArr,setmsgArr]=useState(null)
  const [chatsArr,setchatArr]=useState(null)
  const [lastmsg,setchatmsg]=useState(null)
  const [chatidd,setchatid]=useState(null)

  const GetUid = (id) => {
    setUid(id);
  };

  const getData=(arrayData)=>{

setmsgArr(arrayData)
  }
  
  const getChats=(ChatData)=>{

    setchatArr(ChatData)
      }
      const lmsg=(ChatData)=>{

        setchatmsg(ChatData)
          }

          const chatid=(ChatData)=>{

            setchatid(ChatData)
              }
  return (
    <DataContext.Provider value={{ arr: uid, GetUid ,getData,msgArr,chatsArr,getChats,lastmsg,lmsg, chatid, chatidd}}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
