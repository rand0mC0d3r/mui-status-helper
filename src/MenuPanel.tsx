/* eslint-disable no-unused-vars */
import { Cloud, ContentCopy, ContentCut, ContentPaste, GridView } from '@mui/icons-material'
import { Divider, ListItemIcon, ListItemText, MenuItem, MenuList } from '@mui/material'
import { KeyboardHelper, Status, StatusOptionsProps, StatusType, useRegisterShortcut } from 'mui-industrial'
import { useEffect, useState } from 'react'
import './App.css'

const items = [
  { id: 'cut', type: 'item', icon: <ContentCut fontSize="small" />, text: 'Cut', char: 'X', altKey: true },
  { id: 'copy', type: 'item', icon: <ContentCopy fontSize="small" />, text: 'Copy', char: 'C', altKey: true, shiftKey: true },
  { id: 'paste', type: 'item', icon: <ContentPaste fontSize="small" />, text: 'Paste', char: 'V', ctrlKey: true, shiftKey: true,  metaKey: true },
  { type: 'divider' },
  { id: 'webClipboard', type: 'item', icon: <Cloud fontSize="small" />, text: 'Web Clipboard', char: 'W', ctrlKey: true, altKey: true },
  { id: 'showShortcuts', type: 'item', icon: <Cloud fontSize="small" />, text: 'Show Shortcuts', char: 'S', shiftKey: true, altKey: true },
]

export default function ({ showShortcuts, setShowShortcuts } : { showShortcuts: boolean, setShowShortcuts: (showShortcuts: boolean) => void }) {
  const { handleKeyboardAnnouncement, handleKeyboardsDestroy } =  useRegisterShortcut()
  const [open, setOpen] = useState(false)

  const triggers = (kbdId: string, kbdText: any) => {
    kbdId === 'showShortcuts' ? setShowShortcuts(!showShortcuts) : console.log(`menu ${kbdText}`)
    setOpen(false)
  }

  useEffect(() => {
    handleKeyboardAnnouncement({ id: 'menuShortcut', ctrlKey: true, altKey: true, char: 'M', onTrigger: () => setOpen((prev) => !prev), label: 'Open Menu' })
    items
      .filter(item => item.type !== 'divider')
      .filter(({ id, char }) => !!id && !!char)
      .map(({ id, char, altKey, metaKey, ctrlKey, shiftKey, text }) =>
        handleKeyboardAnnouncement({ id: `${id || text}`, altKey, metaKey, ctrlKey, shiftKey, char, onTrigger: () => triggers(`${id}`, text), label: text })
      )

    return () => {
      handleKeyboardsDestroy(['menuShortcut', ...items.filter(i => i.type !== 'divider').map(i => `${i.id}`)])
    }
  }, [])

  const content = <MenuList>
    {items.map((item, index) => item.type === 'divider'
    ? <Divider key={`${item.type}-${item.text || index}`} />
    : <MenuItem key={`${item.type}-${item.text || index}`} onClick={() => triggers(`${item.id}`, item.text)} >
      <ListItemIcon>{item.icon}</ListItemIcon>
      <ListItemText style={{ width: '250px' }}>{item.text}</ListItemText>
      {item?.id && <KeyboardHelper hasTooltip={true} shortcutId={item.id} />}
    </MenuItem>)}
  </MenuList>

  return <>
    <Status
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
      } as StatusOptionsProps}
      id="menu"
      order={-1}
      onClick={() => setOpen((prev) => !prev)}
      tooltip={<>Menu / Options <KeyboardHelper shortcutId={'menuShortcut'} /></>}>
      <Status.Template {...{ icon: <GridView />, text: 'Menu' }}/>
    </Status>
  </>
}
