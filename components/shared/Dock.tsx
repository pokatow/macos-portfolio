import React, { useContext } from 'react'
import ActivePanelContext from '../../context/ActivePanelContext'

interface PanelInterface {
  id: number
  name: string
  content: string
}

const icons = [
  {
    name: 'vscode',
    image: '/images/icons/vscode.png',
  },
  {
    name: 'chrome',
    image: '/images/icons/chrome.png',
  },
  {
    name: 'safari',
    image: '/images/icons/safari.png',
  },
  {
    name: 'finder',
    image: '/images/icons/finder.png',
  },
  {
    name: 'mail',
    image: '/images/icons/mail.png',
  },
  {
    name: 'notes',
    image: '/images/icons/notes.png',
  },
  {
    name: 'notion',
    image: '/images/icons/notion.png',
  },
  {
    name: 'photos',
    image: '/images/icons/photos.png',
  },
  {
    name: 'spotify',
    image: '/images/icons/spotify.png',
  },
  {
    name: 'setting',
    image: '/images/icons/setting.png',
  },
  {
    name: 'bin',
    image: '/images/icons/bin.png',
  },
  {
    name: 'launchpad',
    image: '/images/icons/launchpad.png',
  },
]

const Dock: React.FunctionComponent<{}> = ({}) => {
  const { activePanel, updatePanel } = useContext(ActivePanelContext)

  const unminimizePanel = (id: number) => {
    let panels = [...activePanel]
    let targetPanel = panels.find((panel) => panel.id == id)

    if (!targetPanel) return

    targetPanel.minimize = !targetPanel.minimize

    updatePanel(panels)
  }

  return (
    <div className="fixed bottom-0 flex flex-wrap justify-center pb-1 translate-x-1/2 shadow-lg right-1/2 rounded-xl bg-white/25 backdrop-blur-3xl">
      {activePanel.length > 0 && (
        <div className="flex items-center px-2 space-x-2">
          {activePanel.map((panel) => {
            return (
              <img
                onClick={() => unminimizePanel(panel.id)}
                src={panel.icon}
                alt={`${panel.name} icon`}
                className="w-14"
                key={panel.id}
                title={panel.name}
              />
            )
          })}
          <div className="">|</div>
        </div>
      )}
      {icons.map((icon) => {
        return (
          <img
            src={icon.image}
            alt={`${icon.name} icon`}
            className="w-16"
            key={icon.name}
          />
        )
      })}
    </div>
  )
}

export default Dock
