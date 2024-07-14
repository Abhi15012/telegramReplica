import React, { useState } from 'react'
import '../index.css'
import Welmsg from './welmsg'
const Display = () => {
  const [themeDark, setDark]= useState()
  return (

    <div className='display h-screen  box-border overflow-hidden  '>
   
 {themeDark ===false? <>
        <div className='darkImage '>
        <Welmsg/>
        </div>
        </> : <>
        <div className='lightImage h-screen'>
        <Welmsg/>
        </div>
        </>
      
  }

    </div>
  ) 
}

export default Display
