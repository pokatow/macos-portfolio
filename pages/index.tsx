import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Letter from './components/Letter'
import Login from './components/Login'
import MusicPlayer from './components/MusicPlayer'
import Notification from './components/Notification'

const Home: NextPage = () => {
  const [auth, setAuth] = useState(false)
  const [loginError, setLoginError] = useState('')
  const loginHandler = (date: String) => {
    if (date === '18042000') {
      setAuth(true)
    } else {
      setLoginError('Masa lupa tanngal lahir diri sendiri 😒')
    }
  }
  return (
    <div className="flex flex-col items-center min-h-screen py-2 font-serif text-gray-700 bg-gray-50">
      <Head>
        <title>Dear Elaina - A Letter to You</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* {!auth && <Notification />} */}

      <main className="flex flex-col items-center justify-center flex-1 w-full px-10 py-20 text-center">
        {!auth && (
          <h1 className="mb-8 text-2xl font-bold">
            Dear Elaina - A Letter to You
          </h1>
        )}
        {!auth && <Login login={loginHandler} error={loginError} />}
        {auth && <Letter />}
      </main>

      {auth && <MusicPlayer />}
    </div>
  )
}

export default Home
