/* eslint-disable no-unused-vars */
import { MenuItem, MenuList, Tooltip } from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import ListAltIcon from '@material-ui/icons/ListAlt'
import { MuiStatus, MuiStatusChild, MuiStatusPanel, MuiStatusProvider } from 'mui-status'
import './App.css'

function App() {
  return <MuiStatusProvider debug position="bottom" tooltipComponent={(tooltip: any, component: any) => <Tooltip arrow title={tooltip}>{component}</Tooltip>}>
    <MuiStatus {...{ id: 'avatarStatus', style: { minWidth: '48px' }, tooltip: 'Avatar user' }}>
      <MuiStatusChild mask image='https://picsum.photos/32/32' />
    </MuiStatus>
    <MuiStatus id="leftWithArrow" tooltip="Sample non interactive Status element">
      <MuiStatusChild icon={<ArrowBackIosIcon />} text="Test Left" reverse />
    </MuiStatus>
    <MuiStatus id="leftText" >
      <MuiStatusChild text="Sample" />
    </MuiStatus>
    <MuiStatus id="rightText" secondary tooltip="Sample non interactive Status element">
      <MuiStatusChild icon={<KeyboardArrowRightIcon />} text="Test Right" />
    </MuiStatus>
    <MuiStatus id="rightTextReversed" secondary tooltip="Sample non interactive Status element">
      <MuiStatusChild icon={<KeyboardArrowRightIcon />} text="Test Right reversed" reverse />
    </MuiStatus>
    <MuiStatusPanel id="menu" popover={<MenuList id="menu-list-grow" onKeyDown={() => { }}>
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
