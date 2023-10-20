import Head from 'next/head'
import { useEffect, useState } from 'react'
import Dock from './Dock'
import Footer from './Footer'
import Navbar from './Navbar'
import { FaApple } from 'react-icons/fa'

let timer: any
const Layout: React.FunctionComponent = ({ children }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    timer = setInterval(() => {
      if (progress === 100) {
        clearInterval(timer)
        return
      }
      setProgress((prev) => prev + 1)
    }, 20)

    return () => clearInterval(timer)
  }, [progress])
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
        {/* <link rel="manifest" href="/manifest.json" /> */}
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/favicon/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
        />
        <meta name="description" content="MacOS Portfolio " />
        <meta name="robots" content="noodp" />
        <link rel="canonical" href="" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="MacOS Portfolio" />
        <meta property="og:description" content="MacOS Portfolio" />
        <meta property="og:url" content="" />
        <meta property="og:site_name" content="MacOS Portfolio" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:description" content="MacOS Portfolio" />
        <meta name="twitter:title" content="MacOS Portfolio" />
        <meta name="twitter:site" content="" />
        <meta name="twitter:creator" content="" />
        <link rel="preload" as="image" href="images/wallpaper/1.jpg"></link>
      </Head>

      <div className={progress == 100 ? 'block' : 'hidden'}>
        <div className="flex-col justify-between hidden min-h-screen select-none md:flex">
          <Navbar />

          {children}
          <Dock />
        </div>
        <div
          className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-cover md:hidden"
          style={{ backgroundImage: `url("/images/wallpaper/1.jpg")` }}
        >
          <span className="px-3 py-2 text-lg font-semibold text-white shadow-lg rounded-xl bg-white/25 backdrop-blur-3xl">
            Please use desktop 🙏
          </span>
        </div>
      </div>

      <div
        className={` min-h-screen select-none flex-col items-center justify-center space-y-12 bg-black  ${
          progress == 100 ? 'hidden' : 'flex'
        }`}
      >
        <FaApple className="text-white text-8xl" />

        <div className="mb-4 flex h-1.5 w-1/3 items-center rounded-full bg-neutral-700 ">
          <div
            className="h-1 bg-white rounded-full"
            style={{
              width: progress + '%',
              transition: 'width 0s',
            }}
          ></div>
        </div>
      </div>
    </>
  )
}

export default Layout
