import React from 'react'
import { BsApple, BsWifi2, BsBatteryFull, BsSearch } from 'react-icons/bs'
const Navbar = () => {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-4 py-1 overflow-hidden text-sm text-white bg-white/25 backdrop-blur-3xl">
      <div className="flex items-center space-x-6">
        <BsApple className="text-white " />
        <span className="font-semibold">Finder</span>
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Go</span>
        <span>Window</span>
        <span>Help</span>
      </div>
      <div className="flex items-center space-x-6">
        <BsWifi2 className="mb-1 text-xl text-white" />
        <BsSearch className="text-xs text-white" />
        <BsBatteryFull className="text-lg text-white" />
        <span>Mon Sep 5 9:15 PM</span>
      </div>
    </nav>
  )
}

export default Navbar
