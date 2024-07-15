import React, { useContext } from "react";
import "../index.css";
import Welmsg from "./welmsg";
import Fetchmessage from "./fetching/fetchmessage";
import { DataContext } from "../contextAPI/data";
import Headerdis from "./headerdis";
import Contentdis from "./contentdis";
import Footer from "./footer";

const Display = () => {
  const { msgArr } = useContext(DataContext);
const {arr}=useContext(DataContext)
  return (
    <div className="display h-screen w-4/5 box-border overflow-hidden">
      <Fetchmessage />

      <div className="lightImage h-screen">
        {msgArr && msgArr.length !== 0 ? (
         
              
              < > 
                <div className="header h-14 bg-white">
                  <Headerdis   arrid={arr}/>
                </div>
                <div className=" ml-1 h-5/6">
                  <Contentdis />
                </div>
                <div className="footer rounded-3xl bg-white h-12 mx-auto w-5/6 ">
                  <Footer />
                </div>
              </>
            
          
        ) : (
          <Welmsg />
        )}
      </div>
    </div>
  );
};

export default Display;
