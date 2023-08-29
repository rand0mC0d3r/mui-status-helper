/* eslint-disable no-console */
import { Cloud, ContentCopy, ContentCut, ContentPaste, GridView } from '@mui/icons-material'
import { Divider, ListItemIcon, ListItemText, MenuItem, MenuList } from '@mui/material'
import { KeyboardHelper, Status, StatusType, useConfig } from 'mui-industrial'
import { useEffect, useState } from 'react'

export default function () {
  const { config, configUnmount } = useConfig()
  const [open, setOpen] = useState(false)

  const triggers = (kbdText: any) => {
    console.log(`menu ${kbdText}`)
    setOpen(false)
  }

  const items = [
    { type: 'item', id: 'cut', icon: <ContentCut fontSize="small" />, label: 'Cut',
      char: 'X', onTrigger: () => triggers('cut'), altKey: true },
    { type: 'item', id: 'copy', icon: <ContentCopy fontSize="small" />, label: 'Copy',
      char: 'C', onTrigger: () => triggers('copy'), altKey: true, shiftKey: true },
    { type: 'item', id: 'paste', icon: <ContentPaste fontSize="small" />, label: 'Paste',
      char: 'V', onTrigger: () => triggers('paste'), ctrlKey: true, shiftKey: true,  metaKey: true },
    { type: 'divider', label: 'divider', id: '--', char: '...' },
    { type: 'item', id: 'webClipboard', icon: <Cloud fontSize="small" />, label: 'Web Clipboard',
      char: 'W', onTrigger: () => triggers('wb'), ctrlKey: true, altKey: true },
    { type: 'command', id: 'menuShortcut', shortcutId: 'menuShortcut', icon: <Cloud fontSize="small" />, label: 'Open Menu',
      char: 'M', onTrigger: () => setOpen((prev) => !prev),
      ctrlKey: true, altKey: true },
  ]

  const content = <MenuList autoFocusItem variant="menu">
    {items
      .filter((item) => ['divider', 'item'].some(t => item.type === t))
      .map((item, index) =>
      item.type === 'divider'
        ? <Divider key={`${item.type}-${item.label || index}`} />
        : <MenuItem key={`${item.type}-${item.label || index}`} onClick={() => triggers(item.label)} >
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText style={{ width: '250px' }}>{item.label}</ListItemText>
          {item?.id && <KeyboardHelper asChip hasTooltip={true} shortcutId={item.id} />}
        </MenuItem>)}
  </MenuList>

  const keyboards = items.filter((item) => ['command', 'item'].some(t => item.type === t))
  const commands = items.filter((item) => ['command'].some(t => item.type === t))

  useEffect(() => {
    config({ keyboards, commands })

    return () => {
      configUnmount({ keyboards, commands })
    }
  }, [])

  return <Status
    options={ {
      as: StatusType.POPPER,
      popper: {
        hasToolbar: false,
        onClose: () => setOpen(false)
      },
      title: 'Sample Menu',
      content,
      open,
    }}
    id="menu"
    order={-2}
    onClick={() => setOpen((prev) => !prev)}
    tooltip={<>Menu / Options <KeyboardHelper shortcutId={'menuShortcut'} /></>}
  >
    <Status.Template {...{ icon: <GridView />, text: 'Sample Menu' }}/>
  </Status>
}
