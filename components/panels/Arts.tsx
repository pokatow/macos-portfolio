import React, { useContext, useRef } from 'react'
import PanelContext from '../../context/PanelContext'
import data from '../../data/arts.json'
import ImagePanel from './ImagePanel'

interface ImageModalFunction {
  handleOpenModal: (image: string, data: object) => void
}

const Arts = () => {
  const { open } = useContext(PanelContext)

  return (
    <div className="flex flex-wrap gap-4 p-2 overflow-y-auto ">
      {data.map((art, index) => {
        return (
          <div
            className="flex flex-col w-1/6 p-1 space-y-1 rounded cursor-pointer hover:bg-blue-200"
            key={art.id}
            onClick={(e) => {
              if (e.detail == 2) {
                open(6, 'image', { image: art.link, name: art.name })
              }
            }}
          >
            <div className="relative h-0 w-[100%] overflow-hidden border-2 border-gray-300 pb-[100%]">
              <img
                className="absolute inset-0 object-cover w-full h-full"
                src={`${art.link}`}
                alt={art.name}
              />
            </div>
            <span className="text-xs text-center break-all">
              {art.name}.png
            </span>
          </div>
        )
      })}
    </div>
  )
}

export default Arts
