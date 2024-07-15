import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Chats from '../chats';
import Fetchmessage from './fetchmessage';
import { DataContext } from '../../contextAPI/data';

const FetchChats = () => {
  const [getData, setGetData] = useState([]);
 

  useEffect(() => {
    const chatsFetch = async () => {
      try {
        let alldata = [];
        for (let index = 1; index < 12; index++) {
          const response = await axios.get(`https://devapi.beyondchats.com/api/get_all_chats?page=${index}`);
          const Data = response.data.data.data;
          alldata = [...alldata, ...Data];/// 
        }
        setGetData(alldata);
      } catch (error) {
        console.log(error);
      }
    };
    chatsFetch();
  }, []);

  return (
    <Chats arrdata={getData} />

  );
};

export default FetchChats;
