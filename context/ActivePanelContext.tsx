import React, { useState, useContext } from 'react'

interface IPanelInterface {
  id: number
  name: string
  content: string
  icon: string
  minimize: boolean
  extraClass: string
}

interface IActivePaneleContext {
  activePanel: IPanelInterface[]
  updatePanel: (panel: IPanelInterface[]) => void
}

const ActivePanelContext = React.createContext<IActivePaneleContext>({
  activePanel: [],
  updatePanel: () => {},
})

export const ActivePanelProvider: React.FunctionComponent = ({ children }) => {
  const [activePanel, setActivePanel] = useState<IPanelInterface[]>([])

  const updatePanel = (panel: IPanelInterface[]) => {
    setActivePanel(panel)
  }
  return (
    <ActivePanelContext.Provider
      value={{ activePanel: activePanel, updatePanel: updatePanel }}
    >
      {children}
    </ActivePanelContext.Provider>
  )
}

export default ActivePanelContext
