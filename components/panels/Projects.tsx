import React, { useContext } from 'react'
import PanelContext from '../../context/PanelContext'

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

const Projects: React.FunctionComponent<{ projects: IProject[] }> = ({
  projects,
}) => {
  const { open } = useContext(PanelContext)
  return (
    <>
      <div className="flex flex-wrap gap-4 p-2 pb-6 overflow-y-auto">
        {projects.map((project, index) => {
          return (
            <div
              className="flex flex-col w-24 p-1 space-y-1 rounded cursor-pointer hover:bg-blue-200"
              key={project.id}
              onClick={(e) => {
                if (e.detail == 2) {
                  open(Date.now(), 'project', { project })
                }
              }}
            >
              <div className="relative h-0 w-[100%] overflow-hidden  pb-[100%]">
                <img
                  className="absolute inset-0 object-cover w-full h-full"
                  src="/images/icons/doc.png"
                  alt={project.name}
                />
              </div>
              <span className="text-xs text-center break-all">
                {project.name}
              </span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Projects
