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
import { Box, MenuItem, MenuList, Snackbar, Tooltip, Typography } from '@mui/material'
import { MuiStatus, MuiStatusChild, MuiStatusPanel, MuiStatusProvider } from 'mui-status'
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

  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(true)
  }

  return <>
    <MuiStatusProvider
      debug
      position="bottom"
      tooltipComponent={(tooltip: any, component: any) =>
        <Tooltip arrow title={<Typography variant='caption'>{tooltip}</Typography>}>
          {component}
        </Tooltip>}
    >
      <MuiStatus {...{ id: 'avatarStatus', style: { minWidth: '48px' }, tooltip: 'Avatar user' }}>
        <MuiStatusChild mask image='https://picsum.photos/32/32' />
      </MuiStatus>

      <MuiStatusPanel id="menu" tooltip={'test'} popover={<MenuList id="menu-list-grow" onKeyDown={() => { }}>
        <MenuItem onClick={() => { }}>Profile</MenuItem>
        <MenuItem onClick={() => { }}>My account</MenuItem>
        <MenuItem onClick={() => { }}>Logout</MenuItem>
      </MenuList>}>
        <MuiStatusChild icon={<ListAltIcon />} text="Menu" />
      </MuiStatusPanel>

      <MuiStatusPanel id="infoSection" tooltip={'Iframe'} popover={<div style={{ width: '500px', height: '650px' }}>
        <iframe
          style={{ width: '100%', height: '100%', border: '0px none' }}
          src="https://v4.mui.com/components/material-icons/#material-icons"
        />
      </div>}>
        <MuiStatusChild icon={<ListAltIcon />} text="Iframe" />
      </MuiStatusPanel>

      <MuiStatus id="selectedText" highlight={selectedText.length > 10 ? 'secondary' : 'primary'}  tooltip={selectedText}>
        {selectedText.length > 0 && <MuiStatusChild
          icon={<CodeIcon />}
          text={`${selectedText.length > 0 ? `${selectedText.substring(0, 10)}...` : selectedText} (${String(selectedText.length)})`} />}
      </MuiStatus>
      <MuiStatus id="selectionRange">
        {(selectedText.length > 0 && (selectionIndexes.start !== 0 || selectionIndexes.end !== 0)) &&
       <MuiStatusChild icon={<TextFieldsIcon />} text={`${selectionIndexes.start}:${selectionIndexes.end}`} />}
      </MuiStatus>


      <MuiStatus id="timeExpired" tooltip="WakaTime: Today's coding time. Click for dashboard">
        <MuiStatusChild icon={<AccessTimeFilledIcon />} text="2 hrs 32 min" />
      </MuiStatus>


      <MuiStatus id="gitBranch" onClick={handleClick} secondary
        tooltip={<Box display='flex' flexDirection="column" style={{ width: '300px', padding: '8px' }}>
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
        </Box>}>
        <MuiStatusChild icon={<LinearScaleIcon />} text="You, 7 seconds ago" />
      </MuiStatus>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        message="Note archived"
      />


      <MuiStatus id="lineColumn" secondary tooltip="GoTo Line:Column">
        <MuiStatusChild text="Ln 63, Col 38" />
      </MuiStatus>
      <MuiStatus id="spaces" secondary tooltip="Pagination spacing strategy">
        <MuiStatusChild text="Spaces: 2" />
      </MuiStatus>

      <MuiStatus id="errors" secondary highlight='secondary'
        tooltip="Show error log">
        <MuiStatusChild icon={<WarningIcon />} text="Errors: 24" />
      </MuiStatus>

      <MuiStatus id="copilot" secondary tooltip="Toggle copilot status">
        <MuiStatusChild icon={<SmartToyIcon />} />
      </MuiStatus>
      <MuiStatus id="notifications" secondary tooltip="Notifications">
        <MuiStatusChild icon={<NotificationsIcon />}  />
      </MuiStatus>

      <div style={{ display: 'flex', justifyContent: 'center', height: '100%', alignItems: 'center' }}>
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
    </MuiStatusProvider>
  </>
}

export default App
