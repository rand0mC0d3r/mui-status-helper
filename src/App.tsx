/* eslint-disable no-unused-vars */
import { IndustrialProvider } from 'mui-industrial'
import { PlacementPosition } from 'mui-industrial/lib/esm/index.types'
import { useState } from 'react'
import './App.css'
import ChatClient from './components/ChatClient'
import Commands from './components/Commands'
import ControlPanel from './components/ControlPanel'
import GithubPage from './components/GithubPage'
import GsmArena from './components/GsmArena'
import KeyboardShortcuts from './components/KeyboardShortcuts'
import MenuPanel from './components/MenuPanel'
import MUI5Console from './components/MUI5Console'
import NotificationsGenerator from './components/NotificationsGenerator'
import Preopen from './components/Preopen'
import Samples from './components/Samples'
import Search from './components/Search'
import SpeedMonitor from './components/SpeedMonitor'


function App() {
  const [width, setWidth] = useState('100%')
  const [margin, setMargin] = useState('0px%')
  const [wikiFrame, setWikiFrame] = useState(false)

  const [position, setPosition] = useState<PlacementPosition>(PlacementPosition.BOTTOM)
  const [variant, setVariant] = useState<'default' | 'outlined'>('default')
  const [hasBorder, setHasBorder] = useState(true)
  const [loggedIn, setLoggedIn] = useState(false)
  const [fullWidth, setFullWidth] = useState(false)

  return <>
    <IndustrialProvider
      // debug
      fullWidth={fullWidth}
      hasLock={true}
      hasBorder={hasBorder}
      style={{ width, margin }}
      position={position}
      size="medium"
      variant={variant}
    >
      <Samples />
      <Search />
      <GithubPage />
      <NotificationsGenerator />
      <MUI5Console />
      <MenuPanel />
      <GsmArena />
      <ChatClient />
      <KeyboardShortcuts />
      {!loggedIn && <Preopen />}
      <SpeedMonitor />
      <Commands {...{ wikiFrame, setWikiFrame }} />

      <ControlPanel {...{
        wikiFrame, setWikiFrame,
        variant, setVariant,
        loggedIn, setLoggedIn,
        fullWidth, setFullWidth,
        margin, setMargin,
        width, setWidth,
        hasBorder, setHasBorder,
        position, setPosition
      }} />
    </IndustrialProvider>
  </>
}

export default App
