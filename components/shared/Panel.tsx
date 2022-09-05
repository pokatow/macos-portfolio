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
}> = ({
  children,
  title,
  removePanel,
  selectPanel,
  id,
  isMinimize,
  minimizePanel,
}) => {
  const close = () => {
    return removePanel(id)
  }
  const minimize = () => minimizePanel(id)
  const resize = () => {}
  const onStartHandler = () => {
    return selectPanel(id)
  }

  return (
    <>
      {!isMinimize && (
        <DraggableCore handle="span" onStart={onStartHandler}>
          <div className="absolute mx-auto bg-white left-1/2 right-1/2 w-96 rounded-xl">
            <span>
              <div className="flex items-center justify-between p-3 border-b-2">
                <div className="flex items-center space-x-2">
                  <div
                    className="w-3 h-3 bg-red-400 rounded-full cursor-pointer"
                    onClick={close}
                  ></div>
                  <div
                    className="w-3 h-3 bg-yellow-400 rounded-full cursor-pointer"
                    onClick={minimize}
                  ></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full cursor-pointer"></div>
                </div>
                <div className="flex items-center justify-center flex-1">
                  {title}
                </div>
              </div>
            </span>
            <div className="p-2">{children}</div>
          </div>
        </DraggableCore>
      )}
    </>
  )
}

export default Panel
