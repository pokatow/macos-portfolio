import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useContext, useEffect } from 'react'
import AboutMe from '../components/panels/AboutMe'
import Arts from '../components/panels/Arts'
import ImagePanel from '../components/panels/ImagePanel'
import Projects from '../components/panels/Projects'
import Layout from '../components/shared/Layout'
import Panel from '../components/shared/Panel'
import ActivePanelContext from '../context/ActivePanelContext'
import ProjectsData from '../data/projects.json'

interface IPanelInterface {
  id: number
  name: string
  content: string
  icon: string
  minimize: boolean
  extraClass: string
}

const Home: NextPage = () => {
  const codeProjects: any = ProjectsData.filter((project) => {
    return project.type == 'code'
  })

  const templateProjects: any = ProjectsData.filter((project) => {
    return project.type == 'template'
  })

  const PANELS = [
    {
      id: 1,
      name: 'Codes',
      content: <Projects projects={codeProjects} />,
      icon: '/images/icons/folder.png',
      minimize: false,
      extraClass: 'w-1/3',
    },
    {
      id: 3,
      name: 'Templates',
      content: <Projects projects={templateProjects} />,
      icon: '/images/icons/folder.png',
      minimize: false,
      extraClass: 'w-1/3',
    },
    {
      id: 4,
      name: 'Arts',
      content: <Arts />,
      icon: '/images/icons/folder.png',
      minimize: false,
      extraClass: 'w-1/3',
    },
    {
      id: 5,
      name: 'About Me',
      content: <AboutMe />,
      icon: '/images/icons/doc.png',
      minimize: false,
      extraClass: 'w-96',
    },
    {
      id: 6,
      name: 'Preview',
      content: <ImagePanel image="" />,
      icon: '/images/icons/preview.png',
      minimize: false,
      extraClass: 'w-3/5 h-4/5',
    },
  ]

  const DESKTOP = [
    {
      name: 'Codes',
      icon: '/images/icons/folder.png',
      panel_id: 1,
    },
    {
      name: 'Templates',
      icon: '/images/icons/folder.png',
      panel_id: 3,
    },
    {
      name: 'Arts',
      icon: '/images/icons/folder.png',
      panel_id: 4,
    },
    {
      name: 'About Me',
      icon: '/images/icons/doc.png',
      panel_id: 5,
    },
  ]

  useEffect(() => {
    openPanel(5)
  }, [])

  const { activePanel, updatePanel } = useContext(ActivePanelContext)

  const removePanel = (id: Number) => {
    updatePanel(
      activePanel.filter((panel: IPanelInterface) => {
        return panel.id != id
      })
    )
  }

  const selectPanel = (id: number) => {
    const selectedPanel: any = activePanel.find((panel) => {
      return panel.id == id
    })

    const panels: any = activePanel.filter((panel) => {
      return panel.id != id
    })

    updatePanel([...panels, selectedPanel!])
  }

  const openPanel = (id: number) => {
    const panelExist: any = activePanel.some((panel) => {
      return panel.id == id
    })

    if (panelExist) return selectPanel(id)

    const newPanel: any = PANELS.find((panel) => {
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
        <title>Pokatow</title>
      </Head>
      <main
        style={{ backgroundImage: `url("/images/wallpaper/1.jpg")` }}
        className="relative min-h-screen overflow-hidden bg-cover"
      >
        <div className="absolute inset-0 pt-10" id="panel">
          <div className="flex flex-col flex-wrap items-start p-1 space-y-4">
            {DESKTOP.map((app) => {
              return (
                <div
                  key={app.panel_id}
                  className="flex flex-col items-center justify-center w-24 px-3 py-1 rounded cursor-pointer hover:bg-blue-300"
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

          {activePanel.map((panel, index) => {
            return (
              <Panel
                key={panel.id}
                id={panel.id}
                title={panel.name}
                removePanel={removePanel}
                selectPanel={selectPanel}
                isMinimize={panel.minimize}
                minimizePanel={minimizePanel}
                extraClass={panel.extraClass}
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
