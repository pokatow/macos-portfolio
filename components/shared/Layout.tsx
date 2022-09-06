import Head from 'next/head'
import Dock from './Dock'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/favicon/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/favicon/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/favicon/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favicon/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/favicon/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicon/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/favicon/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicon/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/android-icon-192x192.png"
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
          sizes="96x96"
          href="/favicon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
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
        <meta name="description" content="Pokatow Portfolio " />
        <meta name="robots" content="noodp" />
        <link rel="canonical" href="" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Pokatow Portfolio" />
        <meta property="og:description" content="Pokatow Portfolio" />
        <meta property="og:url" content="" />
        <meta property="og:site_name" content="Pokatow Portfolio" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:description" content="Pokatow Portfolio" />
        <meta name="twitter:title" content="Pokatow Portfolio" />
        <meta name="twitter:site" content="" />
        <meta name="twitter:creator" content="" />
      </Head>
      <div className="flex-col justify-between hidden min-h-screen select-none md:flex">
        <Navbar />
        {children}
        <Dock />
        {/* <Footer /> */}
      </div>
      <div
        className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-cover md:hidden"
        style={{ backgroundImage: `url("/images/wallpaper/2.jpg")` }}
      >
        <span className="px-3 py-2 text-lg font-semibold text-white shadow-lg rounded-xl bg-white/25 backdrop-blur-3xl">
          Please Use Desktop
        </span>
      </div>
    </>
  )
}

export default Layout
