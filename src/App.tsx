/* eslint-disable no-unused-vars */
import CodeIcon from '@mui/icons-material/Code'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import ListAltIcon from '@mui/icons-material/ListAlt'
import TextFieldsIcon from '@mui/icons-material/TextFields'
import { MenuItem, MenuList, Tooltip, Typography } from '@mui/material'
import { MuiStatus, MuiStatusChild, MuiStatusPanel, MuiStatusProvider } from 'mui-status'
import { createRef, useState } from 'react'
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

  return <>
    <MuiStatusProvider
      debug
      position="bottom"
      tooltipComponent={(tooltip: any, component: any) =>
        <Tooltip arrow title={<Typography variant='subtitle2'>{tooltip}</Typography>}>
          {component}
        </Tooltip>}
    >
      <MuiStatus {...{ id: 'avatarStatus', style: { minWidth: '48px' }, tooltip: 'Avatar user' }}>
        <MuiStatusChild mask image='https://picsum.photos/32/32' />
      </MuiStatus>
      <MuiStatusPanel id="menu" popover={<MenuList id="menu-list-grow" onKeyDown={() => { }}>
        <MenuItem onClick={() => { }}>Profile</MenuItem>
        <MenuItem onClick={() => { }}>My account</MenuItem>
        <MenuItem onClick={() => { }}>Logout</MenuItem>
      </MenuList>}>
        <MuiStatusChild icon={<ListAltIcon />} text="Menu" />
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
      <MuiStatus id="rightText" secondary tooltip="Sample non interactive Status element">
        <MuiStatusChild icon={<KeyboardArrowRightIcon />} text="Test Right" />
      </MuiStatus>
      <MuiStatus id="rightTextReversed" secondary tooltip="Sample non interactive Status element">
        <MuiStatusChild icon={<KeyboardArrowRightIcon />} text="Test Right reversed" reverse />
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
