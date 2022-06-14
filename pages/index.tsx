import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen py-2 font-serif text-gray-700 bg-gray-50">
      <Head>
        <title>Next JS Boilerplate</title>
      </Head>

      <main className="relative flex items-center justify-center flex-1 w-full px-10 py-20 text-center">
        <img
          className="absolute z-0 h-auto m-auto w-36"
          src="/blueprint.png"
          alt="blueprint"
        />
        <span className="z-10 px-4 py-2 text-white bg-black">
          Next JS Boilerplate by Sherwin
        </span>
      </main>
    </div>
  )
}

export default Home
