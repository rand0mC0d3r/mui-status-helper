import { MenuItem, MenuList } from '@material-ui/core'
import ListAltIcon from '@material-ui/icons/ListAlt'
import { MuiStatus, MuiStatusChild, MuiStatusPanel, MuiStatusProvider } from 'mui-status'
import './App.css'

function App() {
  return <MuiStatusProvider position="bottom">
    <MuiStatus id="dsfdsfsd" >
      <MuiStatusChild text="ddd" />
    </MuiStatus>
    <MuiStatus id="eeewe" >
      <MuiStatusChild text="eee" />
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
