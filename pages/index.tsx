import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useContext } from 'react'
import Layout from '../components/shared/Layout'
import Panel from '../components/shared/Panel'
import ActivePanelContext from '../context/ActivePanelContext'

interface IPanelInterface {
  id: number
  name: string
  content: string
  icon: string
  minimize: boolean
}

const Home: NextPage = () => {
  const PANELS = [
    {
      id: 1,
      name: 'Project',
      content: 'hello',
      icon: '/images/icons/folder.png',
      minimize: false,
    },
    {
      id: 2,
      name: 'Project2',
      content: 'hello',
      icon: '/images/icons/folder.png',
      minimize: false,
    },
  ]

  const DESKTOP = [
    {
      name: 'Project',
      icon: '/images/icons/folder.png',
      panel_id: 1,
    },
    {
      name: 'Project2',
      icon: '/images/icons/folder.png',
      panel_id: 2,
    },
  ]

  const { activePanel, updatePanel } = useContext(ActivePanelContext)

  // const [activePanel, setActivepanel] = useState<IPanelInterface[]>([])

  const removePanel = (id: Number) => {
    updatePanel(
      activePanel.filter((panel: IPanelInterface) => {
        return panel.id != id
      })
    )
  }

  const selectPanel = (id: number) => {
    const panels = activePanel.filter((panel) => {
      return panel.id != id
    })
    const newPanel = PANELS.find((panel) => {
      return panel.id == id
    })

    updatePanel([...panels, newPanel!])
  }

  const openPanel = (id: number) => {
    const panelExist = activePanel.some((panel) => {
      return panel.id == id
    })

    if (panelExist) return

    const newPanel = PANELS.find((panel) => {
      return panel.id == id
    })

    updatePanel([...activePanel, newPanel!])
  }

  const minimizePanel = (id: number) => {
    let panels = [...activePanel]
    let targetPanel = panels.find((panel) => panel.id == id)

    if (!targetPanel) return

    targetPanel.minimize = !targetPanel.minimize

    updatePanel(panels)
  }

  return (
    <>
      <Head>
        <title>Next JS Boilerplate</title>
      </Head>
      <main
        style={{ backgroundImage: `url("/images/wallpaper/1.jpg")` }}
        className="relative min-h-screen p-4 pt-10 bg-cover"
      >
        <div className="flex flex-col flex-wrap items-start space-y-4">
          {DESKTOP.map((app) => {
            return (
              <div
                key={app.panel_id}
                className="flex flex-col items-center justify-center px-3 py-1 rounded cursor-pointer hover:bg-blue-300"
                onClick={(e) => {
                  if (e.detail == 2) {
                    openPanel(app.panel_id)
                  }
                }}
              >
                <img src={app.icon} alt="Folder icon" className="w-16 pb-1" />
                <span className="text-white">{app.name}</span>
              </div>
            )
          })}
        </div>
        <div>
          {activePanel.map((panel) => {
            return (
              <Panel
                key={panel.id}
                id={panel.id}
                title={panel.name}
                removePanel={removePanel}
                selectPanel={selectPanel}
                isMinimize={panel.minimize}
                minimizePanel={minimizePanel}
              >
                {panel.content}
              </Panel>
            )
          })}
        </div>
      </main>
    </>
  )
}

export default Home
