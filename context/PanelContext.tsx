import React, { useState, useContext } from 'react'
import AboutMe from '../components/panels/AboutMe'
import Arts from '../components/panels/Arts'
import ImagePanel from '../components/panels/ImagePanel'
import Project from '../components/panels/Project'
import Projects from '../components/panels/Projects'
import ProjectsData from '../data/projects.json'

type GenericObject = { [key: string]: any }

interface IPanelInterface {
  id: number
  name: string
  content: string
  icon: string
  minimize: boolean
  extraClass: string
}

interface IPanelContext {
  activePanel: IPanelInterface[]
  dock: IPanelInterface[]
  open: (id: number, type?: string, data?: any) => void
  close: (id: number) => void
  select: (id: number) => void
  minimize: (id: number) => void
}

const PanelContext = React.createContext<IPanelContext>({
  activePanel: [],
  dock: [],
  open: () => {},
  close: () => {},
  select: () => {},
  minimize: () => {},
})

export const PanelProvider: React.FunctionComponent = ({ children }) => {
  const [activePanel, setActivePanel] = useState<IPanelInterface[]>([])
  const [dock, setDock] = useState<IPanelInterface[]>([])
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

  const open = (id: number, type?: string, data?: any) => {
    const panelExist: any = activePanel.some((panel) => {
      return panel.id == id
    })

    if (panelExist && type != 'image') {
      return select(id)
    } else {
      select(id)
    }

    let newPanel: any
    switch (type) {
      case 'project':
        newPanel = {
          id: id,
          name: data.project.name,
          content: <Project data={data.project} />,
          icon: '/images/icons/doc.png',
          minimize: false,
          extraClass: 'w-2/5',
        }

        setActivePanel([...activePanel, newPanel])
        setDock([...dock, newPanel])

        break
      case 'image':
        console.log('SWITCH CASE = IMAGE')
        if (panelExist) {
          //update current panel image source
          const updatedPanels: any = activePanel.map((panel) => {
            if (panel.id === 6) {
              return {
                ...panel,
                name: data.name,
                content: <ImagePanel image={data.image} />,
              }
            }
            return panel
          })
          setActivePanel([...updatedPanels])
        } else {
          newPanel = {
            id: 6,
            name: data.name,
            content: <ImagePanel image={data.image} />,
            icon: '/images/icons/preview.png',
            minimize: false,
            extraClass: 'w-3/5 h-4/5',
          }
          setActivePanel([...activePanel, newPanel!])
          setDock([...dock, newPanel!])
        }
        break

      default:
        newPanel = PANELS.find((panel) => {
          return panel.id == id
        })

        setActivePanel([...activePanel, newPanel!])
        setDock([...dock, newPanel!])
        break
    }
  }

  const close = (id: number) => {
    setActivePanel(
      activePanel.filter((panel: IPanelInterface) => {
        return panel.id != id
      })
    )
    setDock(
      dock.filter((panel: IPanelInterface) => {
        return panel.id != id
      })
    )
  }

  const select = (id: number) => {
    if (activePanel.length > 0 && activePanel[activePanel.length - 1].id == id)
      return

    const selectedPanel: any = activePanel.find((panel) => {
      return panel.id == id
    })

    const panels: any = activePanel.filter((panel) => {
      return panel.id != id
    })

    setActivePanel([...panels, selectedPanel!])
  }

  const minimize = (id: number) => {
    let panels = [...activePanel]
    let targetPanel = activePanel.find((panel) => panel.id == id)

    if (!targetPanel) return

    targetPanel.minimize = !targetPanel.minimize

    setActivePanel(panels)
  }

  return (
    <PanelContext.Provider
      value={{ activePanel, dock, open, close, select, minimize }}
    >
      {children}
    </PanelContext.Provider>
  )
}

export default PanelContext
