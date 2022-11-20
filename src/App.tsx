/* eslint-disable no-unused-vars */
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled'
import CodeIcon from '@mui/icons-material/Code'
import FileCopyIcon from '@mui/icons-material/FileCopy'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import LinearScaleIcon from '@mui/icons-material/LinearScale'
import ListAltIcon from '@mui/icons-material/ListAlt'
import NotificationsIcon from '@mui/icons-material/Notifications'
import PersonIcon from '@mui/icons-material/Person'
import SmartToyIcon from '@mui/icons-material/SmartToy'
import TextFieldsIcon from '@mui/icons-material/TextFields'
import WarningIcon from '@mui/icons-material/Warning'
import { Box, LinearProgress, Typography } from '@mui/material'
import { Theme } from '@mui/system'
import { Status, StatusConsole, StatusHelper, StatusPanel, StatusProvider } from 'mui-status'
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
      // chipComponent={(...props: ChipProps)  => <Chip {...props} />}
      // typographyComponent={(props: any, children: any) => <Typography {...props}>{children}</Typography>}
      hasLock={true}
      position="bottom"
    >

      {/* // visual tests */}

      <Status id="tooltipAndText" tooltip={generateTooltip()}>
        <StatusHelper icon={<ListAltIcon />} notifications="text" text="text" />
      </Status>

      <Status id="tooltipAndText2Status" tooltip={generateTooltip()}>
        <StatusHelper icon={<ListAltIcon />} notifications="3/2" text="text" />
        <StatusHelper icon={<ListAltIcon />} notifications="text" text="text" />
      </Status>

      <Status id="tooltipAndText3Status" tooltip={generateTooltip()}>
        <ListAltIcon />
        <StatusHelper icon={<ListAltIcon />} notifications="text" text="text" />
      </Status>

      <Status id="tooltipAndText4Status" tooltip={generateTooltip()}>
        <LinearProgress variant="determinate" value={44} />
        <StatusHelper icon={<ListAltIcon />} notifications="text" text="text" />
      </Status>

      <Status id="tooltipAndTextPrimary" tooltip="primary" highlight='primary'>
        <StatusHelper icon={<ListAltIcon />} notifications="pri" text="primary" />
      </Status>

      <Status id="tooltipAndTextSecondary" tooltip="secondary" highlight='secondary'>
        <StatusHelper icon={<ListAltIcon />} notifications="sec" text="secondary" />
      </Status>

      <Status id="tooltipAndTextClick" tooltip={generateTooltip()} onClick={() => {}}>
        <StatusHelper icon={<ListAltIcon />} notifications="text" text="text Click" />
      </Status>

      <Status id="tooltipAndTextPrimaryClick" tooltip="primary Click" highlight='primary'
        onClick={() => {}}>
        <StatusHelper icon={<ListAltIcon />} notifications="pri" text="primary" />
      </Status>

      <Status id="tooltipAndTextSecondaryClick" tooltip="secondary Click" highlight='secondary'
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
        display: 'flex',
        // background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
        justifyContent: 'center', height: '100%', alignItems: 'center' }}>
        <div style={{ flex: '0 0 50%' }}>
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
      </div>
    </StatusProvider>
  </>
}

export default App
