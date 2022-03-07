import React, { useEffect, useRef } from 'react'

const MusicPlayer = () => {
  const audioPlayer = useRef<HTMLAudioElement>(null)
  const musicHandler = () => {
    audioPlayer.current!.play()
  }
  return (
    <>
      <div
        className="sticky p-2 border border-black bottom-10 bg-gray-50"
        onClick={musicHandler}
      >
        <p className="mb-2">Tulus | Hati-Hati di Jalan</p>
        <audio ref={audioPlayer} controls autoPlay loop>
          <source src="/backgroundmusic.mp3" type="audio/mp3" />
        </audio>
      </div>
    </>
  )
}

export default MusicPlayer
