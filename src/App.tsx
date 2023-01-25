/* eslint-disable no-unused-vars */
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import Cloud from '@mui/icons-material/Cloud'
import CloudSyncOutlinedIcon from '@mui/icons-material/CloudSyncOutlined'
import CodeIcon from '@mui/icons-material/Code'
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined'
import ContentCopy from '@mui/icons-material/ContentCopy'
import ContentCut from '@mui/icons-material/ContentCut'
import ContentPaste from '@mui/icons-material/ContentPaste'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard'
import FaceIcon from '@mui/icons-material/Face'
import FileCopyIcon from '@mui/icons-material/FileCopy'
import GridViewIcon from '@mui/icons-material/GridView'
import KeyboardIcon from '@mui/icons-material/Keyboard'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import LinearScaleIcon from '@mui/icons-material/LinearScale'
import ListAltIcon from '@mui/icons-material/ListAlt'
import MemoryIcon from '@mui/icons-material/Memory'
import NorthOutlinedIcon from '@mui/icons-material/NorthOutlined'
import NotificationsIcon from '@mui/icons-material/Notifications'
import PersonIcon from '@mui/icons-material/Person'
import PlusOneIcon from '@mui/icons-material/PlusOne'
import ReplayIcon from '@mui/icons-material/Replay'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import SmartToyIcon from '@mui/icons-material/SmartToy'
import SouthOutlinedIcon from '@mui/icons-material/SouthOutlined'
import StorageIcon from '@mui/icons-material/Storage'
import TextFieldsIcon from '@mui/icons-material/TextFields'
import WarningIcon from '@mui/icons-material/Warning'
import { Box, Button, IconButton, LinearProgress, Tooltip, Typography } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import Divider from '@mui/material/Divider'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import Paper from '@mui/material/Paper'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { Theme } from '@mui/system'
import { Status, StatusConsole, StatusHelper, StatusNotifications, StatusPanel, StatusProvider, StatusSnackbar } from 'mui-status'
import { ChangeEvent, createRef, MouseEvent, useState } from 'react'
import './App.css'
import ChatClient from './ChatClient'
import ControlPanel from './ControlPanel'
import NotificationsGenerator from './NotificationsGenerator'
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
  const [width, setWidth] = useState('100%')
  const [position, setPosition] = useState<'top' | 'bottom'>('top')
  const [variant, setVariant] = useState<'default' | 'primary' | 'secondary'>('default')
  const [hasBorder, setHasBorder] = useState(true)
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
    <StatusProvider
      debug
      hasLock={true}
      hasBorder={hasBorder}
      style={{ width }}
      position={position}
    >
      <StatusPanel
        variant={variant}
        hasToolbar={false}
        hasDecoration={false}
        endSeparator
        id="menu"
        tooltip="Menu/Options"
        popover={<MenuList>
          <MenuItem>
            <ListItemIcon>
              <ContentCut fontSize="small" />
            </ListItemIcon>
            <ListItemText>Cut</ListItemText>
            <Typography variant="body2" color="text.secondary">
            ⌘X
            </Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <ContentCopy fontSize="small" />
            </ListItemIcon>
            <ListItemText>Copy</ListItemText>
            <Typography variant="body2" color="text.secondary">
            ⌘C
            </Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <ContentPaste fontSize="small" />
            </ListItemIcon>
            <ListItemText>Paste</ListItemText>
            <Typography variant="body2" color="text.secondary">
            ⌘V
            </Typography>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <Cloud fontSize="small" />
            </ListItemIcon>
            <ListItemText>Web Clipboard</ListItemText>
          </MenuItem>
        </MenuList>}
      >
        <StatusHelper  icon={<GridViewIcon />} text="Menu" />
      </StatusPanel>

      <Status
        secondary
        id="tooltipAndText"
        tooltip={generateTooltip([
          { title: 'GeForce 4090 RTX', icon: <DeveloperBoardIcon/>, subtitle: '12 GB GDDR5, 493 Euro' },
          { title: 'AMD 7900X3D', icon: <DeveloperBoardIcon/>, subtitle: '36 cores, 943 Euro' },
          { title: 'Phoenix RAM DDR5', icon: <MemoryIcon/>, subtitle: '24GB (6 x 4GB), 236 Euro' },
          { title: 'Keyboard Corsair', icon: <KeyboardIcon/>, subtitle: 'Rainbow lights, 69 Euro' }
        ], <>
          {generateCta('Delete item', <DeleteOutlineIcon htmlColor='#FFF' />)}
          {generateCta('Increase quantity', <PlusOneIcon htmlColor='#FFF' />)}
        </>)} endSeparator>
        <StatusHelper
          icon={<ShoppingCartOutlinedIcon />}
          notifications="1000+ Euro"
          text="4 items"
          reverse />
      </Status>

      <SpeedMonitor />

      <Status id="tooltipAndText3Status">
        <StatusHelper icon={<ChatBubbleOutlineOutlinedIcon />}
          notifications="Sample"
          text="Foo/Bar" />
      </Status>

      {/* <Status id="tooltipAndText4Status" tooltip={generateTooltip()}>
        <StatusHelper childrenIndex={3} icon={<ListAltIcon />} notifications="text"
          text="progress">
          <LinearProgress style={{ width: '60px', height: '12px' }} />
        </StatusHelper>
      </Status> */}

      {/* <Status id="tooltipAndTextPrimary" tooltip="primary" highlight='primary'>
        <StatusHelper icon={<ListAltIcon />} notifications="0" text="p" />
      </Status>

      <Status id="tooltipAndTextSecondary" tooltip="secondary" highlight='secondary'>
        <StatusHelper icon={<ListAltIcon />} notifications="0" text="s" />
      </Status>

      <Status id="tooltipAndTextClick" tooltip={generateTooltip()} onClick={() => {}}>
        <StatusHelper icon={<ListAltIcon />} notifications="text" text="text Click" />
      </Status>

      <Status id="tooltipAndTextPrimaryClick" tooltip="primary Click" highlight='primary'
        onClick={() => {}}>
        <StatusHelper icon={<ListAltIcon />} notifications="pri" text="primary" />
      </Status>

      <Status secondary id="tooltipAndTextSecondaryClick" tooltip="secondary Click"
        highlight='secondary'
        onClick={() => {}}>
        <StatusHelper icon={<ListAltIcon />} notifications="sec" text="secondary" />
      </Status> */}

      <ChatClient />

      <NotificationsGenerator />

      <StatusConsole
        tooltip="Iframe Material UI"
        consoleTitle="Image List"
        id="infoSectionConsole"
        // popoverTitle="Iframe Material UI"
        console={<iframe
          style={{ width: '100%', height: '100%', border: '0px none' }}
          src="https://v4.mui.com/components/image-list/"
        />}>
        <StatusHelper icon={<ListAltIcon />} text="Console" />
      </StatusConsole>

      <StatusConsole
        tooltip="Iframe Material UI"
        consoleTitle="Image List V5"
        id="infoSectionConsolev5"
        // popoverTitle="Iframe Material UI"
        console={<iframe
          style={{ width: '100%', height: '100%', border: '0px none' }}
          src="https://mui.com/material-ui/customization/color/"
        />}>
        <StatusHelper icon={<ListAltIcon />} text="Console V5" />
      </StatusConsole>

      <StatusPanel
        variant={variant}
        secondary
        id="infoSection"
        popoverTitle="Iframe Material UI"
        tooltip={'Iframe'}
        popover={<div style={{ width: '500px', height: '650px' }}
        >
          <iframe
            style={{ width: '100%', height: '100%', border: '0px none' }}
            src="https://v4.mui.com/components/material-icons/#material-icons"
          />
        </div>}>
        <StatusHelper notifications={1} icon={<ListAltIcon />} text="Iframe" />
      </StatusPanel>


      <StatusNotifications variant={variant} />



      {/*
      <StatusSnackbar message='test' source="AutoFixer"
        severity='info' />
      <StatusSnackbar message='test' code='lorem ipsum' source="AutoFixer"
        severity='success'
        actions={[
          <Button>Slack it</Button>,
          <Button color="inherit">Post to Jira</Button>,
        ]

        }/>
      <StatusSnackbar message='test' source="AutoFixer"
        severity='info' />
      <StatusSnackbar message='test' code='lorem ipsum' source="AutoFixer"
        severity='success'
        actions={[
          <Button>Slack it</Button>,
          <Button color="inherit">Post to Jira</Button>,
        ]

        }/> */}
      {/* <StatusSnackbar message='test' source="AutoFixer"
        severity='info' />
      <StatusSnackbar message='test' code='lorem ipsum' source="AutoFixer"
        severity='success'
        actions={[
          <Button>Slack it</Button>,
          <Button color="inherit">Post to Jira</Button>,
        ]

        }/> */}
      <StatusSnackbar message='test' source="AutoFixer" onClick={() => { console.log('triggered')}}
        severity='info' />
      <StatusSnackbar message='test' code='lorem ipsum' source="AutoFixer"
        severity='success'
        actions={[
          <Button>Slack it</Button>,
          <Button color="inherit">Post to Jira</Button>,
        ]

        }/>
      <StatusSnackbar message={[
        'ncus ex, quis dictum nunc massa vitae risus.',
        'Mauris sed velit pulvinar, convallis lacus non, egestas',
        'orci. Mauris pellentesque at metus et pharetra.',
        'Nam imperdiet ipsum vitae massa vestibulum varius. Nu'].join('')} code="demo" severity='warning' />
      <StatusSnackbar message='Unfortunately the image cannot be saved' actions={[
        <Button>Create ticket</Button>,
      ]} severity='error'
      code={`react-jsx-runtime.development.js:117 Warning: Each child in a list should have a unique "key" prop.

Check the render method of. See https://reactjs.org/link/warning-keys for more information.
    at __WEBPACK_DEFAULT_EXPORT__ (http://localhost:3005/static/js/bundle.js:61233:21)
    at div
    at http://localhost:3005/static/js/bundle.js:1552:66
    at __WEBPACK_DEFAULT_EXPORT__ (http://localhost:3005/static/js/bundle.js:61723:67)
    at div
    at http://localhost:3005/static/js/bundle.js:1552:66
    at div
    at http://localhost:3005/static/js/bundle.js:1552:66
    at __WEBPACK_DEFAULT_EXPORT__ (http://localhost:3005/static/js/bundle.js:62011:21)
    at StatusProvider (http://localhost:3005/static/js/bundle.js:60670:19)
    at App (http://localhost:3005/static/js/bundle.js:54:90)`} />

      {/* // visual tests END */}



      {/*

      <Status id="tooltipAndText" secondary tooltip="GoTo Line:Column">
        <StatusHelper text="Ln 63, Col 38" />
      </Status>
      <Status id="tooltipAndText" secondary tooltip="GoTo Line:Column">
        <StatusHelper text="Ln 63, Col 38" />
      </Status> */}









      {/* <Status id="lineColumn" secondary tooltip="GoTo Line:Column">
        <StatusHelper text="Ln 63, Col 38" />
      </Status>

      <Status id="spaces" secondary tooltip="Pagination spacing strategy">
        <StatusHelper text="Spaces: 2" />
      </Status>

      <Status id="errors" secondary highlight='secondary'
        tooltip="Show error log">
        <StatusHelper icon={<WarningIcon />}  notifications={24}
          text="Errors" />
      </Status>
      <Status id="errors2" secondary highlight='secondary'
        tooltip="Show error log">
        <StatusHelper icon={<WarningIcon />}  notifications={'FOO'}
          text="Errors" />
      </Status>

      <Status id="copilot" secondary tooltip="Toggle copilot status">
        <StatusHelper icon={<SmartToyIcon />} />
      </Status>

      <Status id="notifications" secondary tooltip="Notifications">
        <StatusHelper icon={<NotificationsIcon />} text='Console' />
      </Status> */}

      <ControlPanel {...{ variant, setVariant, width, setWidth, hasBorder, setHasBorder, position, setPosition }} />
    </StatusProvider>
  </>
}

export default App
