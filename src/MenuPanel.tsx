import Cloud from '@mui/icons-material/Cloud'
import ContentCopy from '@mui/icons-material/ContentCopy'
import ContentCut from '@mui/icons-material/ContentCut'
import ContentPaste from '@mui/icons-material/ContentPaste'
import GridViewIcon from '@mui/icons-material/GridView'
import { MenuItem, MenuList, Typography } from '@mui/material'
import Divider from '@mui/material/Divider'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { Status, StatusHelper, StatusOptionsProps, StatusType } from 'mui-industrial'
import './App.css'

export default function () {
  const content = <MenuList>
    <MenuItem>
      <ListItemIcon>
        <ContentCut fontSize="small" />
      </ListItemIcon>
      <ListItemText>Cut</ListItemText>
      <Typography variant="body2" color="text.secondary">
             ⌘X
      </Typography>
    </MenuItem>
    <MenuItem>
      <ListItemIcon>
        <ContentCopy fontSize="small" />
      </ListItemIcon>
      <ListItemText>Copy</ListItemText>
      <Typography variant="body2" color="text.secondary">
            ⌘C
      </Typography>
    </MenuItem>
    <MenuItem>
      <ListItemIcon>
        <ContentPaste fontSize="small" />
      </ListItemIcon>
      <ListItemText>Paste</ListItemText>
      <Typography variant="body2" color="text.secondary">
             ⌘V
      </Typography>
    </MenuItem>
    <Divider />
    <MenuItem>
      <ListItemIcon>
        <Cloud fontSize="small" />
      </ListItemIcon>
      <ListItemText>Web Clipboard</ListItemText>
    </MenuItem>
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
