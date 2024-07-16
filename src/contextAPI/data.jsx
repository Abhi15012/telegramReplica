import React, { createContext, useState } from 'react';

// Create a context with a default value
export const DataContext = createContext({
  arr:"",
  GetUid: () => {},
  getData:()=>{},
  msgArr:[],
  lmsg:()=>{},
  lastmsg:[],
  fetch:()=>{},
  fetch12:[],
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
  const [fetch12,setchat]=useState(null)

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

              const fetch=(ChatData)=>{

                setchat(ChatData)
                  }
  return (
    <DataContext.Provider value={{ arr: uid, GetUid ,getData,msgArr,chatsArr,getChats,lastmsg,lmsg, chatid, chatidd,fetch,fetch12}}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
