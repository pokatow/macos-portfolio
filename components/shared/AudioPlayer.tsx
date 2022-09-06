import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import Music from '../../data/music.json'

const MusicPlayer = () => {
  const [play, setPlay] = useState(false)
  const [music, setMusic] = useState(0)
  const audioPlayer = useRef<HTMLAudioElement>(null)
  const musicList = Music

  useEffect(() => {
    audioPlayer.current!.volume = 0.3
  }, [])

  useEffect(() => {
    audioPlayer.current!.src = musicList[music].source
  }, [music])

  // audioPlayer.addEventListener('ended', function () {
  //   next()
  // })

  const togglePlay = () => {
    !play ? audioPlayer.current!.play() : audioPlayer.current!.pause()
    setPlay(!play)
  }

  const next = () => {
    if (music < musicList.length - 1) {
      setMusic(music + 1)
    } else {
      setMusic(0)
    }
  }
  const previous = () => {
    if (music == 0) {
      setMusic(musicList.length - 1)
    } else {
      setMusic(music - 1)
    }
  }

  let diskClass =
    'flex h-8 w-8 animate-spin items-center justify-center  rounded-full border-[1px]  z-20'

  if (!play)
    diskClass =
      'flex h-8 w-8 items-center justify-center  rounded-full border-[1px]  z-20'

  return (
    <>
      <div className="flex items-center w-64 p-2 rounded-xl bg-white/50 backdrop-blur-xl">
        <div className={diskClass}>
          <div className="flex items-center justify-center w-4 h-4 border border-dashed rounded-full border-1"></div>
        </div>
        <div className="flex flex-col pl-2 pr-4">
          <h3 className="text-sm font-semibold text-white">
            {musicList[music].title}
          </h3>
          <p className="text-xs text-white">{musicList[music].artist}</p>
        </div>

        <audio ref={audioPlayer} autoPlay loop>
          <source src={musicList[music].source} type="audio/mp3" />
        </audio>

        <div className="flex ml-auto ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white cursor-pointer"
            viewBox="0 0 20 20"
            fill="currentColor"
            onClick={previous}
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
              clipRule="evenodd"
            />
          </svg>

          {play ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white cursor-pointer"
              viewBox="0 0 20 20"
              fill="currentColor"
              onClick={togglePlay}
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white cursor-pointer"
              viewBox="0 0 20 20"
              fill="currentColor"
              onClick={togglePlay}
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
          )}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white cursor-pointer"
            viewBox="0 0 20 20"
            fill="currentColor"
            onClick={next}
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </>
  )
}

export default MusicPlayer
