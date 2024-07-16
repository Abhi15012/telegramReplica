import React, { useContext, useRef } from 'react'
import { DataContext } from '../contextAPI/data'

const Footer = () => {
  const text=useRef()
  const{fetch}=useContext(DataContext)

  const setchat=(event)=>{
   
   if(event.key==='Enter'){
const ref=text.current.value
console.log(ref)
fetch(ref)
   }
  }
  return (
    <div>
     <input type="text " className=' h-12 w-4/6 ml-32  dark:bg-gradient-to-r from-slate-300 to-gray-400 rounded-3xl border:none max-w-5/6 pl-4 ' placeholder='text here' onKeyDown={(event)=>{setchat(event)}} ref={text}/>
    </div>
  )
}

export default Footer
