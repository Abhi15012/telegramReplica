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
    <div className="display   dark:bg-black h-screen w-4/5 box-border overflow-hidden">
      <Fetchmessage />

      <div className="lightImage dark:bg-slate-900 h-screen">
        {msgArr && msgArr.length !== 0 ? (
         
              
              < > 
                <div className="header h-14 dark:bg-gray-800 bg-white dark:text-gray-300">
                  <Headerdis   arrid={arr}/>
                </div>
                <div className="  h-5/6 ">
                  <Contentdis />
                </div>
                <div className="footer   place-content-center dark:bg-black h-12 mx-auto w-full ">
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
