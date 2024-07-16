import React, { useContext, useEffect, useState } from 'react'
import { FaSun } from 'react-icons/fa'
import { FiMoon } from 'react-icons/fi'
import { HiOutlineSpeakerphone } from 'react-icons/hi'
import { IoMdContact } from 'react-icons/io'
import { IoCallSharp, IoSettingsOutline } from 'react-icons/io5'
import { MdOutlineGroup } from 'react-icons/md'

const Menu = () => {

const[theme, setTheme]=useState("light")
const[icon,seticon]=useState(false)
useEffect(()=>{
  if(theme==='dark'){
    document.documentElement.classList.add("dark")
  }
  else{
    document.documentElement.classList.remove('dark')
  }
},[theme])
// console.log(theme)
const handletheme=()=>{
seticon(!icon)
  setTheme(theme==="dark" ? 'light':'dark')
}


  return (<>
    <div className='h-screen max-w-80 w-52 absolute dark:bg-slate-900 bg-slate-100 '>

<div className="back h-28 dark:bg-slate-500 bg-blue-500"> <button className='float-right mt-1 text-white mr-2' 
onClick={handletheme}
>{icon===true ? <FaSun />:<FiMoon />}</button></div>
<img src="https://beyondchats.com/wp-content/uploads/2024/04/output-onlinepngtools.png"   width="60px"
            height="0px"
            className="rounded-xl dark:bg-black bg-slate-200 ml-3 -mt-12 h-18"alt="" /> 
            <p className='font-medium dark:text-white text-gray-700 mt-2'>Beyond Chats</p>
            <hr />

            <div className='flex flex-col gap-3 mt-10'>
<div className='flex dark:text-slate-300 text-gray-700 gap-3 text-md'><MdOutlineGroup /> <p> New group</p></div>
<div className='flex dark:text-slate-300 text-gray-700 gap-3 text-md'><IoMdContact /> <p>new contacts</p></div>
<div className='flex dark:text-slate-300 text-gray-700 gap-3 text-md'><HiOutlineSpeakerphone /> <p>new channel</p></div>

<div className='flex dark:text-slate-300 text-gray-700 gap-3 text-md'><IoCallSharp/> <p>Calls</p></div>
<div className='flex dark:text-slate-300 text-gray-700 gap-3 text-md'><IoSettingsOutline/> <p>Settings</p></div>

            </div>
            
            </div>


    </>
  )
}

export default Menu
