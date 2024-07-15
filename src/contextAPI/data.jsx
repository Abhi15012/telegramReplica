import React, { createContext, useState } from 'react';

// Create a context with a default value
export const DataContext = createContext({
  arr:"",
  GetUid: () => {},
  getData:()=>{},
  msgArr:[],
  chatsArr:[],
  getChats:()=>{}
});

const DataProvider = ({ children }) => {
  const [uid, setUid] = useState(null);
  const [msgArr,setmsgArr]=useState(null)
  const [chatsArr,setchatArr]=useState(null)

  const GetUid = (id) => {
    setUid(id);
  };

  const getData=(arrayData)=>{

setmsgArr(arrayData)
  }
  
  const getChats=(ChatData)=>{

    setchatArr(ChatData)
      }

  return (
    <DataContext.Provider value={{ arr: uid, GetUid ,getData,msgArr,chatsArr,getChats}}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
