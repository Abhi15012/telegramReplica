import React, { useContext } from 'react';
import { DataContext } from '../../contextAPI/data';
import { DiVim } from 'react-icons/di';

const Chats12 = () => {

  return(
    <div className='flex gap-2'>
      <p className='ml-2 text-slate-500'>Recents</p>   
    <img
      src="https://images.nightcafe.studio/jobs/a72eqa445UsQ8MFaJRGS/a72eqa445UsQ8MFaJRGS--1--0uihp_7.8125x.jpg?tr=w-1600,c-at_max"
      width="50px"
      height="100px"
      className="rounded-full mt-6 -ml-6"
      alt="profilepic"
    />

    
    <img
      src="https://images.nightcafe.studio/jobs/a72eqa445UsQ8MFaJRGS/a72eqa445UsQ8MFaJRGS--1--0uihp_7.8125x.jpg?tr=w-1600,c-at_max"
      width="50px"
      height="100px"
      className="rounded-full  mt-6 "
      alt="profilepic"
    />
 

</div>
  )
};

export default Chats12;
