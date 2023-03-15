import Cloud from '@mui/icons-material/Cloud'
import ContentCopy from '@mui/icons-material/ContentCopy'
import ContentCut from '@mui/icons-material/ContentCut'
import ContentPaste from '@mui/icons-material/ContentPaste'
import GridViewIcon from '@mui/icons-material/GridView'
import { Divider, MenuItem, MenuList, Tooltip } from '@mui/material'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { Keyboard, KeyboardHelper, Status, StatusOptionsProps, StatusType } from 'mui-industrial'
import './App.css'

const items = [
  { id: 'cut', type: 'item', icon: <ContentCut fontSize="small" />, text: 'Cut', shortcut: '⌘X', char: 'X', altKey: true },
  { id: 'copy', type: 'item', icon: <ContentCopy fontSize="small" />, text: 'Copy', shortcut: '⌘C', char: 'C', altKey: false, shiftKey: true, metaKey: true },
  { id: 'paste', type: 'item', icon: <ContentPaste fontSize="small" />, text: 'Paste', shortcut: '⌘V', char: 'V', ctrlKey: true, shiftKey: true },
  { type: 'divider' },
  { id: 'webClipboard', type: 'item', icon: <Cloud fontSize="small" />, text: 'Web Clipboard', shortcut: '', char: 'W', ctrlKey: true, altKey: true },
]

export default function () {
  const content = <MenuList>
    {items.map((item, index) => item.type === 'divider'
      ? <Divider key={`${item.type}-${item.text || index}`} />
      : <Tooltip
        arrow
        key={`${item.type}-${item.text || index}`}
        title={item.shortcut}
        placement="right"
      >
        <MenuItem>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText style={{ width: '250px' }}>{item.text}</ListItemText>
          {item?.id && <KeyboardHelper shortcutId={item.id} />}
        </MenuItem>
      </Tooltip>)}
  </MenuList>

  return <>
    {items
      .filter(item => item.type !== 'divider')
      .filter(item => item.id)
      .map((item) => item.char && <Keyboard key={item.char} onTrigger={() => alert(`menu ${item.text} ${item.char}`)}
        altKey={item.altKey}
        metaKey={item.metaKey}
        ctrlKey={item.ctrlKey}
        shiftKey={item.shiftKey}
        label={item.text}
        char={item.char}
        id={item.id} />)}

    <Status
      order={5}
      options={{
        as: StatusType.POPPER,
        popper: {
          hasDecoration: false,
          hasToolbar: false,
        },
        content,
        separators: {
          end: true,
        }
      } as StatusOptionsProps}
      id="menu"
      tooltip="Menu / Options"
    >
      <Status.Body {...{ icon: <GridViewIcon />, text: 'Menu' }}/>
    </Status>
  </>
}
