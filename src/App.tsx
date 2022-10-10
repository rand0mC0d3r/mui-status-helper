import { MenuItem, MenuList, Tooltip } from '@material-ui/core'
import ListAltIcon from '@material-ui/icons/ListAlt'
import { MuiStatus, MuiStatusChild, MuiStatusPanel, MuiStatusProvider } from 'mui-status'
import './App.css'

function App() {
  return <MuiStatusProvider position="bottom" tooltipComponent={(tooltip: any, component: any) => <Tooltip arrow title={tooltip}>{component}</Tooltip>}>
    <MuiStatus id="dsfdsfsd" tooltip={'test'} >
      <MuiStatusChild text="ddd" />
    </MuiStatus>
    <MuiStatus id="eeewe" >
      <MuiStatusChild text="eee" />
    </MuiStatus>
    <MuiStatus id="eeewesds" secondary >
      <MuiStatusChild text="a" />
    </MuiStatus>
    <MuiStatusPanel id="fdfdff" popover={<MenuList id="menu-list-grow" onKeyDown={() => { }}>
      <MenuItem onClick={() => { }}>Profile</MenuItem>
      <MenuItem onClick={() => { }}>My account</MenuItem>
      <MenuItem onClick={() => { }}>Logout</MenuItem>
    </MenuList>}>
      <MuiStatusChild icon={<ListAltIcon />} text="Menu" />
    </MuiStatusPanel>
    cxvcx
  </MuiStatusProvider>
}

export default App
