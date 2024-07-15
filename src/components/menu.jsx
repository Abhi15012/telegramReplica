import React from 'react'
import { FaSun } from 'react-icons/fa'
import { HiOutlineSpeakerphone } from 'react-icons/hi'
import { IoMdContact } from 'react-icons/io'
import { IoCallSharp, IoSettingsOutline } from 'react-icons/io5'
import { MdOutlineGroup } from 'react-icons/md'

const Menu = () => {
  return (<>
    <div className='h-screen max-w-80 w-52 absolute bg-slate-100 '>

<div className="back h-28 bg-blue-500"> <button className='float-right mt-1 text-white mr-2'><FaSun /></button></div>
<img src="https://beyondchats.com/wp-content/uploads/2024/04/output-onlinepngtools.png"   width="60px"
            height="0px"
            className="rounded-xl bg-slate-200 ml-3 -mt-12 h-18"alt="" /> 
            <p className='font-medium text-gray-700 mt-2'>Beyond Chats</p>
            <hr />

            <div className='flex flex-col gap-3 mt-10'>
<div className='flex text-gray-700 gap-3 text-md'><MdOutlineGroup /> <p> New group</p></div>
<div className='flex text-gray-700 gap-3 text-md'><IoMdContact /> <p>new contacts</p></div>
<div className='flex text-gray-700 gap-3 text-md'><HiOutlineSpeakerphone /> <p>new channel</p></div>

<div className='flex text-gray-700 gap-3 text-md'><IoCallSharp/> <p>Calls</p></div>
<div className='flex text-gray-700 gap-3 text-md'><IoSettingsOutline/> <p>Settings</p></div>

            </div>
            
            </div>


    </>
  )
}

export default Menu
