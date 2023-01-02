/* eslint-disable no-unused-vars */
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import CloudSyncOutlinedIcon from '@mui/icons-material/CloudSyncOutlined'
import CodeIcon from '@mui/icons-material/Code'
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined'
import FaceIcon from '@mui/icons-material/Face'
import FileCopyIcon from '@mui/icons-material/FileCopy'
import GridViewIcon from '@mui/icons-material/GridView'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import LinearScaleIcon from '@mui/icons-material/LinearScale'
import ListAltIcon from '@mui/icons-material/ListAlt'
import NotificationsIcon from '@mui/icons-material/Notifications'
import PersonIcon from '@mui/icons-material/Person'
import ReplayIcon from '@mui/icons-material/Replay'
import SmartToyIcon from '@mui/icons-material/SmartToy'
import StorageIcon from '@mui/icons-material/Storage'
import TextFieldsIcon from '@mui/icons-material/TextFields'
import WarningIcon from '@mui/icons-material/Warning'
import { Box, Button, LinearProgress, Typography } from '@mui/material'
import { Theme } from '@mui/system'
import { Status, StatusConsole, StatusHelper, StatusNotifications, StatusPanel, StatusProvider, StatusSnackbar } from 'mui-status'
import { createRef, SyntheticEvent, useState } from 'react'
import './App.css'

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
  const [selectionIndexes, setSelectionIndexes] = useState({ start: 0, end: 0 })
  const [progress, setProgress] = useState(0)

  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(true)
  }

  const generateTooltip = () => {

    return <Box display='flex' flexDirection="column" style={{ width: '300px', padding: '8px' }}>
      <Box display='flex' alignItems="center" style={{ gap: '8px' }}>
        <PersonIcon />
        <Typography style={{ lineHeight: '1' }} variant='subtitle2'>Anonymous User</Typography>
      </Box>
      <Box display='flex' alignItems="center" style={{ gap: '8px', padding: '8px 0px' }}>
        <Typography variant='caption'>Sample commit message (2 seconds ago) |</Typography>
        <FileCopyIcon style={{ fontSize: 16 }} />
      </Box>
      <Typography
        style={{
          borderTop: '1px solid #888',
          paddingTop: '8px',
          marginTop: '8px',
        }}
        color="action"
        variant='caption'
      >
              Click to show commit
      </Typography>
      <Box display='flex' alignItems="center" style={{ gap: '8px' }}>
        <PersonIcon />
        <Typography style={{ lineHeight: '1' }} variant='subtitle2'>Anonymous User</Typography>
      </Box>
      <Box display='flex' alignItems="center" style={{ gap: '8px', padding: '8px 0px' }}>
        <Typography variant='caption'>Sample commit message (2 seconds ago) |</Typography>
        <FileCopyIcon style={{ fontSize: 16 }} />
      </Box>
      <Typography
        style={{
          borderTop: '1px solid #888',
          paddingTop: '8px',
          marginTop: '8px',
        }}
        color="action"
        variant='caption'
      >
              Click to show commit
      </Typography>
      <Box display='flex' alignItems="center" style={{ gap: '8px' }}>
        <PersonIcon />
        <Typography style={{ lineHeight: '1' }} variant='subtitle2'>Anonymous User</Typography>
      </Box>
      <Box display='flex' alignItems="center" style={{ gap: '8px', padding: '8px 0px' }}>
        <Typography variant='caption'>Sample commit message (2 seconds ago) |</Typography>
        <FileCopyIcon style={{ fontSize: 16 }} />
      </Box>
      <Typography
        style={{
          borderTop: '1px solid #888',
          paddingTop: '8px',
          marginTop: '8px',
        }}
        color="action"
        variant='caption'
      >
              Click to show commit
      </Typography>
    </Box>



  }

  return <>
    <StatusProvider
      debug
      hasLock={true}
      position="bottom"
    >
      <Status endSeparator id="tooltipAndText" onClick={() => {}}>
        <StatusHelper  icon={<GridViewIcon />} text="Menu" />
      </Status>
      <Status id="tooltipAndText" onClick={() => {}}>
        <StatusHelper icon={<CompareArrowsOutlinedIcon />} notifications="ersE"
          text="Rev"
          reverse />
      </Status>

      <Status id="tooltipAndText2Status" onClick={() => {}} tooltip={generateTooltip()}>
        <StatusHelper icon={<StorageIcon />} notifications="ON" />
        <StatusHelper icon={<CloudSyncOutlinedIcon />} notifications="ON" />
        <StatusHelper text="Sync 28 files" />
      </Status>

      <Status id="tooltipAndText3Status" onClick={() => {}} tooltip={generateTooltip()}>
        <StatusHelper icon={<ChatBubbleOutlineOutlinedIcon />}
          notifications="BIG"
          text="Tooltip" />
      </Status>

      {/* <Status id="tooltipAndText4Status" tooltip={generateTooltip()}>
        <StatusHelper childrenIndex={3} icon={<ListAltIcon />} notifications="text"
          text="progress">
          <LinearProgress style={{ width: '60px', height: '12px' }} />
        </StatusHelper>
      </Status> */}

      <Status id="tooltipAndTextPrimary" tooltip="primary" highlight='primary'>
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
      </Status>

      <StatusConsole
        tooltip="Iframe Material UI"
        consoleTitle="Image List"
        id="infoSectionConsole"
        // popoverTitle="Iframe Material UI"
        console={<iframe
          style={{ width: '100%', height: '100%', border: '0px none' }}
          src="https://v4.mui.com/components/image-list/"
        />}>
        <StatusHelper icon={<ListAltIcon />} notifications="sec" text="secondary" />
      </StatusConsole>

      <StatusPanel
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


      <StatusNotifications />




      <StatusSnackbar message='test' source="AutoFixer"
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

      <div style={{
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '80%',
        height: '100%',
        gap: '16px',
        alignItems: 'center'
      }}>
        <Button onClick={() => window.location.reload()} variant='contained' color="primary"
          fullWidth>
          <ReplayIcon /> Reload
        </Button>
        <textarea onMouseUp={() => {
          let textVal = selectionRef.current
          let cursorStart = textVal.selectionStart
          let cursorEnd = textVal.selectionEnd
          let selectedText = text.substring(cursorStart,cursorEnd)
          setSelectionIndexes({ start: cursorStart, end: cursorEnd })
          setSelectedText(selectedText)
        }} ref={selectionRef} style={{ width: '100%', height: '400px' }}
        defaultValue={text.trim()} />
      </div>
    </StatusProvider>
  </>
}

export default App
