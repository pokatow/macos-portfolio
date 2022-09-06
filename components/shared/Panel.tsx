import React from 'react'
import DraggableCore from 'react-draggable'
import { useRef, useState } from 'react'

const Panel: React.FunctionComponent<{
  title: string
  removePanel: Function
  selectPanel: Function
  minimizePanel: Function
  id: number
  isMinimize: boolean
  extraClass: string
}> = ({
  children,
  title,
  removePanel,
  selectPanel,
  id,
  isMinimize,
  minimizePanel,
  extraClass,
}) => {
  const close = () => {
    return removePanel(id)
  }
  const minimize = () => {
    minimizePanel(id)
  }
  const onStartHandler = () => {
    return selectPanel(id)
  }

  return (
    <>
      {!isMinimize && (
        <DraggableCore handle="span" onStart={onStartHandler}>
          <div
            className={`absolute top-1/4 left-1/3 z-40 mx-auto flex -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-xl shadow-xl ${extraClass}`}
          >
            <span className="">
              <div className="flex items-center justify-center px-3 py-2 border-b-2 bg-white/80 backdrop-blur-3xl">
                <div className="absolute inset-y-0 left-0 flex items-center px-3 space-x-2">
                  <div
                    className="w-3 h-3 bg-red-400 rounded-full cursor-pointer"
                    onClick={close}
                    title="Exit"
                  ></div>
                  <div
                    className="w-3 h-3 bg-yellow-400 rounded-full cursor-pointer "
                    onClick={minimize}
                    title="Minimize"
                  ></div>
                  <div
                    className="w-3 h-3 bg-green-400 rounded-full cursor-pointer"
                    onClick={minimize}
                    title="Minimize too xD"
                  ></div>
                </div>
                <div className="flex items-center justify-center flex-1">
                  {title}
                </div>
              </div>
            </span>
            <div className="flex flex-col flex-1 bg-white">{children}</div>
          </div>
        </DraggableCore>
      )}
    </>
  )
}

export default Panel
