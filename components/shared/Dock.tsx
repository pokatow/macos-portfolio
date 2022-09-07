import React, { useContext } from 'react'
import PanelContext from '../../context/PanelContext'

const icons = [
  {
    name: 'Visual Studio Code',
    image: '/images/icons/vscode.png',
  },
  {
    name: 'Figma',
    image: '/images/icons/figma.png',
  },
  {
    name: 'Notion',
    image: '/images/icons/notion.png',
  },
  {
    name: 'Spotify',
    image: '/images/icons/spotify.png',
  },
  // {
  //   name: 'Chrome',
  //   image: '/images/icons/chrome.png',
  // },
  {
    name: 'Safari',
    image: '/images/icons/safari.png',
  },
  {
    name: 'Bin',
    image: '/images/icons/bin.png',
  },
  {
    name: 'Launchpad',
    image: '/images/icons/launchpad.png',
  },
]

const Dock: React.FunctionComponent<{}> = ({}) => {
  const { dock, minimize } = useContext(PanelContext)

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex justify-center">
      <div className="flex flex-wrap justify-center pb-1 shadow-lg rounded-xl bg-white/25 backdrop-blur-3xl">
        {dock.length > 0 && (
          <div className="flex items-center ">
            {dock.map((panel) => {
              return (
                <img
                  onClick={() => minimize(panel.id)}
                  src={panel.icon}
                  alt={`${panel.name} icon`}
                  className="w-16 cursor-pointer"
                  key={panel.id}
                  title={panel.name}
                />
              )
            })}
          </div>
        )}
        {icons.map((icon) => {
          return (
            <img
              src={icon.image}
              alt={`${icon.name} icon`}
              className="w-16"
              key={icon.name}
              title={icon.name}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Dock
