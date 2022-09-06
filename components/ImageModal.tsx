import React, { useImperativeHandle, useState } from 'react'
import ReactDOM from 'react-dom'
const ImageModal = React.forwardRef((props, ref) => {
  const [showModal, setShowModal] = useState(false)
  const [data, setData] = useState<null | {
    name: string
    description: string
  }>(null)
  const [image, setImage] = useState<string>()

  useImperativeHandle(ref, () => ({
    handleOpenModal(
      image: string,
      data: { name: string; description: string } | null
    ) {
      {
        if (data) {
          setData(data)
        }
        setImage(image)
        setShowModal(!showModal)
      }
    },
  }))

  const handleCloseModal = () => {
    setShowModal(!showModal)
  }
  return ReactDOM.createPortal(
    <>
      {showModal && (
        <div
          onClick={handleCloseModal}
          className="fixed inset-0 z-50 flex flex-col justify-center w-full bg-black bg-opacity-30 "
        >
          <div className="relative flex flex-col justify-center w-3/4 mx-auto overflow-y-auto bg-white border border-black h-5/6 dark:border-white dark:bg-neutral-900 md:flex-row">
            <img
              src={`/${image}`}
              alt=""
              className="flex-1 object-contain h-1/2 md:h-full"
            />
            {data && (
              <div className="flex flex-col justify-center w-full p-8 md:w-1/3 ">
                <h2 className="font-serif text-lg font-bold text-black dark:text-white">
                  {data.name}
                </h2>
                <p className="text-sm leading-loose">{data.description}</p>
              </div>
            )}
            <button
              onClick={handleCloseModal}
              className="absolute top-0 right-0 w-10 h-10 text-black bg-white border-b border-l border-black hover:bg-gray-100 focus:outline-none dark:border-white dark:bg-neutral-900 dark:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 m-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>,
    document.getElementById('panel')!
  )
})

export default ImageModal
