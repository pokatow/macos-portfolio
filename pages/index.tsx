import type { NextPage } from 'next'
import Head from 'next/head'
import { useContext, useEffect } from 'react'
import Panel from '../components/shared/Panel'
import PanelContext from '../context/PanelContext'

const Home: NextPage = () => {
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

  const {
    activePanel,
    open: openPanel,
    close: closePanel,
    select: selectPanel,
    minimize: minimizePanel,
  } = useContext(PanelContext)

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
                closePanel={closePanel}
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
