/* eslint-disable no-unused-vars */
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard'
import FileCopyIcon from '@mui/icons-material/FileCopy'
import KeyboardIcon from '@mui/icons-material/Keyboard'
import ListAltIcon from '@mui/icons-material/ListAlt'
import MemoryIcon from '@mui/icons-material/Memory'
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined'
import PersonIcon from '@mui/icons-material/Person'
import PlusOneIcon from '@mui/icons-material/PlusOne'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { Box, Button, IconButton, LinearProgress, Tooltip, Typography } from '@mui/material'
import {
  IndustrialProvider, Status, StatusOptionsProps, StatusType
} from 'mui-industrial'
import { PlacementPosition } from 'mui-industrial/lib/esm/index.types'
import { ChangeEvent, createRef, MouseEvent, useState } from 'react'
import './App.css'
import ChatClient from './ChatClient'
import ControlPanel from './ControlPanel'
import KeyboardShortcuts from './KeyboardShortcuts'
import MenuPanel from './MenuPanel'
// import NotificationsGenerator from './NotificationsGenerator'
import SpeedMonitor from './SpeedMonitor'

const text = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Praesent hendrerit quam magna, nec commodo nisi consectetur commodo.',
  'Pellentesque maximus, quam at efficitur feugiat, leo sapien rhoncus ex, quis dictum nunc massa vitae risus.',
  'Mauris sed velit pulvinar, convallis lacus non, egestas orci.',
  'Mauris pellentesque at metus et pharetra.',
  'Nam imperdiet ipsum vitae massa vestibulum varius. Nulla facilisi. Duis imperdiet felis tortor.',
].join(' ')

function App() {
  const selectionRef = createRef<any>()
  const [selectedText, setSelectedText] = useState('')
  const [width, setWidth] = useState('90%')
  const [margin, setMargin] = useState('0px%')

  const [position, setPosition] = useState<PlacementPosition>(PlacementPosition.TOP)
  const [variant, setVariant] = useState<'default' | 'outlined'>('default')
  const [hasBorder, setHasBorder] = useState(true)
  const [showShortcuts, setShowShortcuts] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const [fullWidth, setFullWidth] = useState(false)
  const [selectionIndexes, setSelectionIndexes] = useState({ start: 0, end: 0 })
  const [progress, setProgress] = useState(0)

  const [open, setOpen] = useState(false)

  const handleBorder = (event: ChangeEvent<HTMLInputElement>) => {
    setHasBorder(event.target.checked)
  }

  const handleWidth = (
    event: MouseEvent<HTMLElement>,
    newWidth: string,
  ) => {
    setWidth(newWidth)
  }

  const handleClick = () => {
    setOpen(true)
  }

  const individualTooltip = (title = 'Anonymous User', icon = <PersonIcon/>, subtitle = 'Sample commit message (2 seconds ago)', cta: any) => <>
    <Box display='flex' alignItems="center" style={{ gap: '8px' }}>
      {icon}
      <Typography style={{ lineHeight: '1' }} variant='subtitle2'>{title}</Typography>
    </Box>
    <Box display='flex' alignItems="center" style={{ gap: '8px', padding: '8px 0px' }}>
      <Typography variant='caption'>{subtitle} |</Typography>
      <FileCopyIcon style={{ fontSize: 16 }} />
    </Box>
    {cta && <Box
      display='flex'
      alignItems="center"
      style={{
        gap: '8px',
        borderBottom: '1px solid #888',
        paddingBottom: '8px',
        marginBottom: '8px'
      }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla lectus non dui ultrices, ut
			condimentum nunc viverra. Donec mattis arcu vitae nibh auctor aliquam. In odio neque, faucibus ac
			lorem nec, commodo pulvinar purus
    </Box>}
  </>

  const generateTooltip = (content: any[], cta: any) => {
    return <Box display='flex' flexDirection="column" style={{ width: '300px', padding: '8px' }}>
      {content.map(({ title, icon, subtitle }) => <>{individualTooltip(title, icon, subtitle, cta)}</>)}
    </Box>
  }

  const generateCta = (title = 'Action button', icon = <DeleteOutlineIcon />) => {
    return <Tooltip title={title}>
      <IconButton size="small">
        {icon}
      </IconButton>
    </Tooltip>
  }

  return <>
    <IndustrialProvider
      debug
      fullWidth={fullWidth}
      hasLock={true}
      hasBorder={hasBorder}
      style={{ width, margin }}
      position={position}
      size="medium"
      variant={variant}
    >

      {/* <Status id="tooltipAndText4Status" >
        <Status.Template childrenOrder={3} icon={<ListAltIcon />} badge="text"
          text="progress">
          <LinearProgress style={{ width: '60px', height: '12px' }} />
        </Status.Template>
      </Status>

      <Status id="onlyText" order={99} onClick={() => {}}>
        <Status.Template text="last" />
      </Status>

      <Status id="onlyBadge" onClick={() => {}}>
        <Status.Template badge="text" />
      </Status>

      <MenuPanel />

      <Status id="onlyIcon" onClick={() => {}}>
        <Status.Template icon={<ListAltIcon />} />
      </Status>

      <ChatClient /> */}

      {showMenu && <MenuPanel/>}
      <KeyboardShortcuts />

      {/* <SpeedMonitor /> */}

      <ControlPanel {...{ variant, setVariant, showMenu, setShowMenu, fullWidth, setFullWidth, margin, setMargin, width,
        setWidth, hasBorder, setHasBorder, position, setPosition }} />
    </IndustrialProvider>
  </>
}

export default App
