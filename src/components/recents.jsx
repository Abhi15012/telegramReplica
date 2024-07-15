import React, { useState } from 'react';
import Mediachats from './recents/Media';
import Channels from './recents/Channels';

import Links from './recents/Links';
import Fileschats from './recents/Files';
import Chats12 from './recents/chats';

const Recents = () => {
  const [activeTab, setActiveTab] = useState('Chats');

  return (
    <div className="chats dark:bg-gray-700 h-screen">
      <div className="appear h-20 bg-slate-500"> </div>
      <div className="recentchats flex gap-4 mt-1 text-gray-500 border-none">
        <button className='links hover:text-blue-500 cursor-pointer' onClick={() => setActiveTab('Chats')}>Chats</button>
        <button className='links hover:text-blue-500 cursor-pointer' onClick={() => setActiveTab('Channels')}>Channels</button>
        <button className='links hover:text-blue-500 cursor-pointer' onClick={() => setActiveTab('Media')}>Media</button>
        <button className='links hover:text-blue-500 cursor-pointer' onClick={() => setActiveTab('Links')}>Links</button>
        <button className='links hover:text-blue-500 cursor-pointer' onClick={() => setActiveTab('Files')}>Files</button>
      </div>
      
      <div className='h-full bg-white'>
        {activeTab === 'Chats' && <Chats12 />}
        {activeTab === 'Channels' && <Channels />}
        {activeTab === 'Media' && <Mediachats />}
        {activeTab === 'Links' && <Links />}
        {activeTab === 'Files' && <Fileschats />}
      </div>
    </div>
  );
}

export default Recents;
