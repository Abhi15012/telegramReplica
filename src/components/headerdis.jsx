import React, { useContext } from 'react'
import { DataContext } from '../contextAPI/data';
import { BsReverseLayoutSidebarReverse, BsThreeDotsVertical } from 'react-icons/bs';
import { MdCall, MdOutlineSearch } from 'react-icons/md';

const Headerdis = () => {
  const { msgArr } = useContext(DataContext);
  const { chatsArr } = useContext(DataContext);
 
 const matchingSender = msgArr.find((item) => chatsArr === item.sender.id);
  return (
    <div>
 <img
            src="https://images.nightcafe.studio/jobs/a72eqa445UsQ8MFaJRGS/a72eqa445UsQ8MFaJRGS--1--0uihp_7.8125x.jpg?tr=w-1600,c-at_max"
            width="50px"
            height="100px"
            className="rounded-full ml-4 pt-1"
            alt="profilepic" 
            
          />
{matchingSender && <><div className='inline float-left -mt-12 ml-24 font-medium '>{matchingSender.sender.name}</div>
<div  className='inline float-left -mt-6 ml-24 font-normal text-sm  dark:text-pink-400 text-slate-500'>last seen recently</div>

</>}
<div className='flex float-right gap-7 mr-2 -mt-9 dark:text-purple-400'>
  <div className='font-medium text-xl  dark:text-purple-400 text-gray-600'><MdOutlineSearch /></div>
<div className='font-medium text-xl  dark:text-green-400 text-gray-600'><MdCall /></div>
<div className='font-medium text-xl  dark:text-slate-400 text-gray-600'><BsReverseLayoutSidebarReverse /></div>
<div className='font-medium text-xl  dark:text-blue-500 text-gray-600'><BsThreeDotsVertical /></div>
</div>

  </div>

  )
}

export default Headerdis
