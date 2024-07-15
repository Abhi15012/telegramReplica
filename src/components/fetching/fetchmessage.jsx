import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Display from "../display";
import { DataContext } from "../../contextAPI/data";
const Fetchmessage = () => {
  const { arr } = useContext(DataContext);
  const {getData}=useContext(DataContext)
  // console.log(arr);
  const [arrData, setArr] = useState([]);
  useEffect(() => {
    const messageFetch = async () => {
      try {
        const response = await axios.get(
          `https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${arr}`
        );
        const Data = response.data.data;
      // console.log(Data)
        setArr(Data);
      } catch (error) {
        console.log(error);
      }
    };
    messageFetch();
  },[arr]);

  getData(arrData)

  return (

<div></div>


  );
};

export default Fetchmessage;
