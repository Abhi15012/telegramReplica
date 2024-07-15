import React, { useState } from 'react';
import Mediachats from './recents/Media';
import Channels from './recents/Channels';

import Links from './recents/Links';
import Fileschats from './recents/Files';
import Chats12 from './recents/chats';

const Recents = () => {
  const [activeTab, setActiveTab] = useState('Chats');

  return (
    <div className="chats dark:bg-gray-800 h-screen">
      <div className="appear h-20 dark:bg-slate-900 bg-slate-100"> <Chats12/> </div>
      <div className="recentchats flex gap-4 mt-1 h-10  dark:text-white text-gray-500  shadow-sm shadow-black">
      
        <button className='links hover:text-blue-500 cursor-pointer ' onClick={() => setActiveTab('Channels')}>Channels</button>
        <button className='links hover:text-blue-500 cursor-pointer' onClick={() => setActiveTab('Media')}>Media</button>
        <button className='links hover:text-blue-500 cursor-pointer' onClick={() => setActiveTab('Links')}>Links</button>
        <button className='links hover:text-blue-500 cursor-pointer' onClick={() => setActiveTab('Files')}>Files</button>
      </div>
      
      <div className=' dark:bg-gray-800 bg-white'>
     
        {activeTab === 'Channels' && <Channels />}
        {activeTab === 'Media' && <Mediachats />}
        {activeTab === 'Links' && <Links />}
        {activeTab === 'Files' && <Fileschats />}
      </div>
    </div>
  );
}

export default Recents;
