import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { CgSmartHomeBoiler } from 'react-icons/cg'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen py-2 font-serif text-gray-700 bg-gray-50">
      <Head>
        <title>Next JS Boilerplate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex items-center justify-center flex-1 w-full px-10 py-20 text-center">
        <CgSmartHomeBoiler className="w-8 h-8 p-2" />
        <span> Next JS Boilerplate by Sherwin</span>
        <CgSmartHomeBoiler className="w-8 h-8 p-2" />
      </main>
    </div>
  )
}

export default Home
