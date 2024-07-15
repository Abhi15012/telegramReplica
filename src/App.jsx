import React from 'react'
import ChatBar from './components/chatBar'
import Display from './components/display'
import FetchChats from './components/fetching/fetchChats'
import DataProvider from './contextAPI/data'
import Channels from './components/recents/Channels'
import Recents from './components/recents'
import { Outlet } from 'react-router-dom'
const App = () => {
  return (
  <div className="mainscreen h-screen dark:bg-black flex flex-row ">
<DataProvider>
<ChatBar/>
<Display/>


</DataProvider>


  </div>
  )
}

export default App
