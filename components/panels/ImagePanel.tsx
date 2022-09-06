import React from 'react'

const ImagePanel: React.FunctionComponent<{ image: string }> = ({ image }) => {
  return (
    <div className="flex items-center justify-center flex-1 mx-auto ">
      <img
        src={image}
        alt="image"
        className="h-[32rem] w-full object-contain "
      />
    </div>
  )
}

export default ImagePanel
