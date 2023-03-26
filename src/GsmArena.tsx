import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import ScreenRotationIcon from '@mui/icons-material/ScreenRotation'
import { Status, StatusType } from 'mui-industrial'
import { PopperHeight, PopperWidth } from 'mui-industrial/lib/esm/index.types'
import { useState } from 'react'

const id = 'gsmArena'

export default function () {
  const [type, setType] = useState<StatusType>(StatusType.CONSOLE)

  return <>
    <Status {...{ id }}
      options={{
        as: type,
        popper: {
          width: PopperWidth.LG,
          height: PopperHeight.LG,
        } ,
        actions: [{
          icon: <ScreenRotationIcon />,
          onClick: () => setType(type === StatusType.POPPER ? StatusType.CONSOLE : StatusType.POPPER),
          title: 'Toggle type',
        }],
        title: 'GSM Arena homepage',
        content: <iframe style={{ border: '0px', width: '100%', height: '100%' }} src="https://www.gsmarena.com/"/>,
      }}
      tooltip="GSM Arena example">
      <Status.Template {...{ icon: <PhoneAndroidIcon />, text: 'GSM Arena' }}/>
    </Status>
  </>
}
