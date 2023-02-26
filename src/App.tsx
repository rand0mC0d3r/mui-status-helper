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
  IndustrialProvider, Status, StatusHelper,
  StatusOptionsProps, StatusType
} from 'mui-industrial'
import { PlacementPosition } from 'mui-industrial/lib/esm/index.types'
import { ChangeEvent, createRef, MouseEvent, useState } from 'react'
import './App.css'
import ChatClient from './ChatClient'
import ControlPanel from './ControlPanel'
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
  const [width, setWidth] = useState('70%')
  const [margin, setMargin] = useState('0px%')

  const [position, setPosition] = useState<PlacementPosition>(PlacementPosition.TOP)
  const [variant, setVariant] = useState<'default' | 'outlined'>('default')
  const [hasBorder, setHasBorder] = useState(true)
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

      <MenuPanel />

      <Status  id="tooltipAndText4Status" >
        <StatusHelper childrenIndex={3} icon={<ListAltIcon />} badge="text"
          text="progress">
          <LinearProgress style={{ width: '60px', height: '12px' }} />
        </StatusHelper>
      </Status>

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

      {/* <NotificationsGenerator /> */}

      <Status
        tooltip="Material-UI Image List Component"
        options={{
          as: StatusType.CONSOLE,
          console: {
            title: 'Material-UI Image List Component'
          },
          content: <iframe style={{ width: '100%', height: '100%', border: '0px none' }}
            src="https://v4.mui.com/components/image-list/"
          />
        } as StatusOptionsProps}
        id="infoSectionConsole"
      >
        <StatusHelper icon={<ListAltIcon />} text="MUI4 Console" />
      </Status>

      <Status {...{
        id: 'infoSectionConsolev5',
        tooltip: 'Image List V5',
        options: {
          as: StatusType.CONSOLE,
          title: 'Image List V5',
          content: <iframe
            style={{ width: '100%', height: '100%', border: '0px none' }}
            src="https://mui.com/material-ui/customization/color/"
          />
        } as StatusOptionsProps
      }}>
        <StatusHelper {...{ icon: <ListAltIcon />, text: 'MUI5 Console' }}/>
      </Status>

      {/* <StatusPanel
        secondary
        onClick={() => {}}
        id="materialdV4"
        popoverTitle="Search Icons on Material UI v4"
        tooltip={'Search Icons on Material UI v4'}
        popover={<div style={{ width: '500px', height: '650px' }}
        >
          <iframe
            style={{ width: '100%', height: '100%', border: '0px none' }}
            src="https://v4.mui.com/components/material-icons/#material-icons"
          />
        </div>}>
        <StatusHelper badge='v4' icon={<MenuBookOutlinedIcon />} text="Material UI" />
      </StatusPanel> */}


      {/* <BlockNotifications /> */}



      <SpeedMonitor />

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

      <ControlPanel {...{ variant, setVariant, fullWidth, setFullWidth, margin, setMargin, width, setWidth, hasBorder, setHasBorder, position, setPosition }} />
    </IndustrialProvider>
  </>
}

export default App
