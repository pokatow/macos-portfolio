import React, { useState } from 'react'
import dayjs from 'dayjs'
import {
  BsApple,
  BsWifi2,
  BsBatteryFull,
  BsSearch,
  BsMusicNoteList,
  BsTwitter,
  BsGithub,
} from 'react-icons/bs'

import AudioPlayer from '../shared/AudioPlayer'
const Navbar = () => {
  const [musicPlayer, setMusicPlayer] = useState(true)
  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-4 py-1 text-sm text-white bg-white/10 backdrop-blur-3xl">
      <div className="flex items-center space-x-6">
        <BsApple className="text-white " />
        <span className="font-semibold">Portfolio</span>
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Go</span>
        <span>Window</span>
        <span>Help</span>
      </div>
      <div className="flex items-center space-x-6">
        <a
          href="https://github.com/Pokatow"
          target={'_blank'}
          title="Pokatow's Github"
        >
          <BsGithub className="text-sm text-white " />
        </a>
        <a
          href="https://twitter.com/Pokatow"
          target={'_blank'}
          title="Pokatow's Twitter"
        >
          <BsTwitter className="text-sm text-white " />
        </a>
        <BsMusicNoteList
          className="text-white cursor-pointer"
          onClick={() => setMusicPlayer(!musicPlayer)}
        />
        <BsWifi2 className="mb-1 text-xl text-white" />
        <BsSearch className="text-xs text-white" />
        <BsBatteryFull className="text-lg text-white" />
        <span>{dayjs().format('ddd D MMM HH:mm A')}</span>
      </div>
      <div
        className={`absolute right-36 top-10 p-2 ${
          musicPlayer ? 'block' : 'hidden'
        }`}
      >
        <AudioPlayer />
      </div>
    </nav>
  )
}

export default Navbar
