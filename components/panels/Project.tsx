import React, { useContext } from 'react'
import { FaGithub, FaLink } from 'react-icons/fa'
import PanelContext from '../../context/PanelContext'
import ImagePanel from './ImagePanel'
interface IProject {
  id: string
  name: string
  client: string
  description: string
  website_url: string
  appstore_url: string
  playstore_url: string
  github_url: string
  youtube_url: string
  tags: string[]
  images: string[]
  type: string
}

const Project: React.FunctionComponent<{ data: IProject }> = ({ data }) => {
  const { activePanel, open } = useContext(PanelContext)

  return (
    <div className="flex flex-col p-4 overflow-y-auto text-neutral-800">
      <div className="flex items-center pt-6 space-x-2">
        <h1 className="text-xl font-bold">{data.name}</h1>
        {data.website_url && (
          <a href={data.website_url} target={'_blank'}>
            <FaLink className="" />
          </a>
        )}
        {data.github_url && (
          <a href={data.github_url} target={'_blank'}>
            <FaGithub className="" />
          </a>
        )}
      </div>
      <p className="pb-2 text-sm">{data.description}</p>
      {data.tags.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {data.tags.map((tag, index) => {
            return (
              <span
                key={index}
                className="px-2 py-1 text-xs border rounded-full border-neutral-500"
              >
                {tag}
              </span>
            )
          })}
        </div>
      )}

      <div className="pt-8">
        <h2 className="pb-2 font-bold ">Gallery</h2>
        <div className="masonry-1 md:masonry-2 xl:masonry-3 before:box-inherit after:box-inherit">
          {data.images.map((image, index) => {
            return (
              <img
                onClick={(e) => {
                  open(6, 'image', { image: image, name: data.name })
                }}
                key={index}
                className="mb-4 border cursor-pointer break-inside border-neutral-900 dark:border-neutral-100 md:mb-6"
                src={`/${image}`}
                alt="project-image"
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Project
