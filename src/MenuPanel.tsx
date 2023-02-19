import Cloud from '@mui/icons-material/Cloud'
import ContentCopy from '@mui/icons-material/ContentCopy'
import ContentCut from '@mui/icons-material/ContentCut'
import ContentPaste from '@mui/icons-material/ContentPaste'
import GridViewIcon from '@mui/icons-material/GridView'
import { Divider, MenuItem, MenuList, Tooltip, Typography } from '@mui/material'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { Status, StatusHelper, StatusOptionsProps, StatusType } from 'mui-industrial'
import { Fragment } from 'react'
import './App.css'

const items = [
  { type: 'item', icon: <ContentCut fontSize="small" />, text: 'Cut', shortcut: '⌘X' },
  { type: 'item', icon: <ContentCopy fontSize="small" />, text: 'Copy', shortcut: '⌘C' },
  { type: 'item', icon: <ContentPaste fontSize="small" />, text: 'Paste', shortcut: '⌘V' },
  { type: 'divider' },
  { type: 'item', icon: <Cloud fontSize="small" />, text: 'Web Clipboard', shortcut: '' },
]

export default function () {
  const content = <MenuList>
    {items.map((item, index) => <Fragment key={`${item.type}-${item.text || index}`}>
      {item.type === 'divider' ? <Divider key={index} />: <Tooltip arrow key={index} title={item.shortcut}
        placement="right">
        <MenuItem>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText>{item.text}</ListItemText>
          {item.shortcut && <Typography variant="body2" color="text.secondary">{item.shortcut}</Typography>}
        </MenuItem></Tooltip>}
    </Fragment> )}
  </MenuList>

  return <>
    <Status
      options={{
        as: StatusType.PANEL,
        panel: {
          hasDecoration: false,
          hasToolbar: false,
        },
        content
      } as StatusOptionsProps}
      endSeparator
      id="menu"
      tooltip="Menu / Options"
    >
      <StatusHelper {...{ icon: <GridViewIcon />, text: 'Menu' }}/>
    </Status>
  </>
}
