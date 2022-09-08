import React from 'react'
import DraggableCore from 'react-draggable'
import { useRef, useState } from 'react'

const Panel: React.FunctionComponent<{
  title: string
  closePanel: Function
  selectPanel: Function
  minimizePanel: Function
  id: number
  isMinimize: boolean
  extraClass: string
}> = ({
  children,
  title,
  closePanel,
  selectPanel,
  id,
  isMinimize,
  minimizePanel,
  extraClass,
}) => {
  const close = () => {
    closePanel(id)
  }
  const minimize = () => {
    minimizePanel(id)
  }
  const onStartHandler = () => {
    selectPanel(id)
  }

  return (
    <>
      {!isMinimize && (
        <DraggableCore handle="span" onStart={onStartHandler}>
          <div
            className={` absolute top-1/3 right-1/3 z-40 flex flex-col overflow-hidden rounded-xl shadow-xl ${extraClass}`}
          >
            <div className="relative">
              <div className="absolute top-0 left-0 z-30 flex items-center pt-4 pl-4 space-x-2">
                <div
                  className="w-3 h-3 bg-red-400 rounded-full cursor-pointer"
                  onClick={close}
                  onTouchStart={close}
                  title="Exit"
                ></div>
                <div
                  className="w-3 h-3 bg-yellow-400 rounded-full cursor-pointer "
                  onClick={minimize}
                  onTouchStart={minimize}
                  title="Minimize"
                ></div>
                <div
                  className="w-3 h-3 bg-green-400 rounded-full cursor-pointer"
                  onClick={minimize}
                  onTouchStart={minimize}
                  title="Minimize too xD"
                ></div>
              </div>
              <span className="">
                <div className="relative flex items-center justify-center px-3 py-2 border-b-2 bg-white/80 backdrop-blur-3xl">
                  <div className="flex items-center justify-center flex-1">
                    {title}
                  </div>
                </div>
              </span>
              <div className="flex flex-col flex-1 bg-white">{children}</div>
            </div>
          </div>
        </DraggableCore>
      )}
    </>
  )
}

export default Panel
