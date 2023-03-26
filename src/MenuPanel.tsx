/* eslint-disable no-console */
import { Cloud, ContentCopy, ContentCut, ContentPaste, GridView } from '@mui/icons-material'
import { Divider, ListItemIcon, ListItemText, MenuItem, MenuList } from '@mui/material'
import { KeyboardHelper, Status, StatusType, useRegisterShortcut } from 'mui-industrial'
import { useEffect, useState } from 'react'
import './App.css'

const items = [
  { id: 'cut', type: 'item', icon: <ContentCut fontSize="small" />, label: 'Cut', char: 'X', altKey: true },
  { id: 'copy', type: 'item', icon: <ContentCopy fontSize="small" />, label: 'Copy', char: 'C', altKey: true, shiftKey: true },
  { id: 'paste', type: 'item', icon: <ContentPaste fontSize="small" />, label: 'Paste', char: 'V', ctrlKey: true, shiftKey: true,  metaKey: true },
  { type: 'divider', label: 'divider', char: '...' },
  { id: 'webClipboard', type: 'item', icon: <Cloud fontSize="small" />, label: 'Web Clipboard', char: 'W', ctrlKey: true, altKey: true },
]

export default function () {
  const { handleKeyboardsRegister, handleKeyboardsDeRegister } =  useRegisterShortcut()
  const [open, setOpen] = useState(false)

  const triggers = (kbdText: any) => {
    console.log(`menu ${kbdText}`)
    setOpen(false)
  }

  const content = <MenuList>
    {items.map((item, index) => item.type === 'divider'
    ? <Divider key={`${item.type}-${item.label || index}`} />
    : <MenuItem key={`${item.type}-${item.label || index}`} onClick={() => triggers(item.label)} >
      <ListItemIcon>{item.icon}</ListItemIcon>
      <ListItemText style={{ width: '250px' }}>{item.label}</ListItemText>
      {item?.id && <KeyboardHelper hasTooltip={true} shortcutId={item.id} />}
    </MenuItem>)}
  </MenuList>

  useEffect(() => {
    handleKeyboardsRegister([
      {
        id: 'menuShortcut',
        ctrlKey: true,
        altKey: true,
        char: 'M',
        onTrigger: () => setOpen((prev) => !prev),
        label: 'Open Menu'
      },
      ...items
        .filter(({ id }) => !!id)
        .map(({ id, char, altKey, metaKey, ctrlKey, shiftKey, label }) => {
          return { id: `${id}`, altKey, metaKey, ctrlKey, shiftKey, char, onTrigger: () => triggers(label), label }
        })
    ])

    return () => {
      handleKeyboardsDeRegister(['menuShortcut', ...items.filter(({ id }) => !!id).map(({ id }) => `${id}`)])
    }
  }, [])

  return <Status
    options={ {
      as: StatusType.POPPER,
      popper: {
        hasDecoration: false,
        hasToolbar: false,
        onClose: () => setOpen(false)
      },
      separators: {
        end: true,
      },
      content,
      open,
    }}
    id="menu"
    order={-2}
    onClick={() => setOpen((prev) => !prev)}
    tooltip={<>Menu / Options <KeyboardHelper shortcutId={'menuShortcut'} /></>}>
    <Status.Template {...{ icon: <GridView />, text: 'Menu' }}/>
  </Status>
}
