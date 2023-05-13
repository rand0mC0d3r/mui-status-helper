import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined'
import AdbIcon from '@mui/icons-material/Adb'
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined'
import AddRoadOutlinedIcon from '@mui/icons-material/AddRoadOutlined'
import { Sidebar } from 'mui-industrial'

export default () => {
  return <>
    <Sidebar {...{  icon: <AdbIcon />, id: 'sample1', title: 'sampleTitle', tooltip: 'sampleTooltip'  }}>
      ff
    </Sidebar>
    <Sidebar {...{  icon: <AccountBalanceWalletOutlinedIcon />, id: 'sample2'  }}>
      ffsd
    </Sidebar>
    <Sidebar {...{  icon: <AddAPhotoOutlinedIcon />, id: 'sample3'  }}>
      fffd
    </Sidebar>

    <Sidebar {...{  icon: <AddRoadOutlinedIcon />, id: 'sample4_secondary' }} secondary>
      fffd
    </Sidebar>
  </>
}
