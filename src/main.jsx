import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './tailwind.css';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Recents from './components/recents.jsx';
import Display from './components/display.jsx';
import Channels from './components/recents/Channels.jsx';
import Links from './components/recents/Links.jsx';
import Chats from './components/chats.jsx';
import Mediachats from './components/recents/Media.jsx';
import Fileschats from './components/recents/Files.jsx';


const Router= createBrowserRouter([
  {path:'/',  element:<App/>},


])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
  <RouterProvider router={Router} />
  </React.StrictMode>,
)
