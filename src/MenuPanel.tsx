/* eslint-disable no-unused-vars */
import Cloud from '@mui/icons-material/Cloud'
import ContentCopy from '@mui/icons-material/ContentCopy'
import ContentCut from '@mui/icons-material/ContentCut'
import ContentPaste from '@mui/icons-material/ContentPaste'
import GridViewIcon from '@mui/icons-material/GridView'
import { Divider, MenuItem, MenuList } from '@mui/material'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { Keyboard, KeyboardHelper, Status, StatusOptionsProps, StatusType } from 'mui-industrial'
import { useState } from 'react'
import './App.css'

// const items = [
//   { id: 'cut', type: 'item', icon: <ContentCut fontSize="small" />, text: 'Cut', char: 'X', altKey: true },
//   { id: 'copy', type: 'item', icon: <ContentCopy fontSize="small" />, text: 'Copy', char: 'C', altKey: false, shiftKey: true, metaKey: true },
//   { id: 'paste', type: 'item', icon: <ContentPaste fontSize="small" />, text: 'Paste', char: 'V', ctrlKey: true, shiftKey: true },
//   { type: 'divider' },
//   { id: 'webClipboard', type: 'item', icon: <Cloud fontSize="small" />, text: 'Web Clipboard', char: 'W', ctrlKey: true, altKey: true },
// ]

// const content = <MenuList>
//   {items.map((item, index) => item.type === 'divider'
//     ? <Divider key={`${item.type}-${item.text || index}`} />
//     : <MenuItem key={`${item.type}-${item.text || index}`}>
//       <ListItemIcon>{item.icon}</ListItemIcon>
//       <ListItemText style={{ width: '250px' }}>{item.text}</ListItemText>
//       {item?.id && <KeyboardHelper hasTooltip={true} shortcutId={item.id} />}
//     </MenuItem>)}
// </MenuList>

export default function ({ showShortcuts, setShowShortcuts } : { showShortcuts: boolean, setShowShortcuts: (showShortcuts: boolean) => void }) {
  const [open, setOpen] = useState(false)

  const items = [
    { id: 'cut', type: 'item', icon: <ContentCut fontSize="small" />, text: 'Cut', char: 'X', altKey: true },
    { id: 'copy', type: 'item', icon: <ContentCopy fontSize="small" />, text: 'Copy', char: 'C', altKey: false, shiftKey: true, metaKey: true },
    { id: 'paste', type: 'item', icon: <ContentPaste fontSize="small" />, text: 'Paste', char: 'V', ctrlKey: true, shiftKey: true },
    { type: 'divider' },
    { id: 'webClipboard', type: 'item', icon: <Cloud fontSize="small" />, text: 'Web Clipboard', char: 'W', ctrlKey: true, altKey: true },
    { id: 'showShortcuts', type: 'item', icon: <Cloud fontSize="small" />, text: 'Show Shortcuts', char: 'S', shiftKey: true, altKey: true },
  ]

  const content = <MenuList>
    {items.map((item, index) => item.type === 'divider'
    ? <Divider key={`${item.type}-${item.text || index}`} />
    : <MenuItem key={`${item.type}-${item.text || index}`}>
      <ListItemIcon>{item.icon}</ListItemIcon>
      <ListItemText style={{ width: '250px' }}>{item.text}</ListItemText>
      {item?.id && <KeyboardHelper hasTooltip={true} shortcutId={item.id} />}
    </MenuItem>)}
  </MenuList>

  const options = {
    as: StatusType.POPPER,
    popper: {
      hasDecoration: false,
      hasToolbar: false,
    },
    separators: {
      end: true,
    },
    content,
    open,
  } as StatusOptionsProps

  return <>
    <Keyboard
      {...{ id: 'menuShortcut', ctrlKey: true, altKey: true, char: 'M' }}
      onTrigger={() => setOpen(!open)}
      label='Open Menu'
    />

    {items
      .filter(item => item.type !== 'divider')
      .filter(({ id, char }) => !!id && !!char)
      .map(({ id, char, altKey, metaKey, ctrlKey, shiftKey, text }) => <Keyboard
        {...{ id: `${id || text}`, altKey, metaKey, ctrlKey, shiftKey, char }}
        key={char}
        onTrigger={() => {
          if(id === 'showShortcuts') {
            setShowShortcuts(!showShortcuts)
          } else {
            alert(`menu ${text} ${char}`)
          }
        }}
        label={text}
      />)}

    <Status {...{ options }}
      id="menu"
      order={-1}
      tooltip={<>Menu / Options <KeyboardHelper shortcutId={'menuShortcut'} /></>}>
      <Status.Template {...{ icon: <GridViewIcon />, text: 'Menu' }}/>
    </Status>
  </>
}
