import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import { Status, StatusOptionsProps, StatusType } from 'mui-industrial'

export default function () {
  return <>
    <Status
      options={{
        as: StatusType.CONSOLE,
        content: <iframe
          style={{ border: '0px', width: '100%', height: '100%' }}
          src="https://www.gsmarena.com/"
        />,
      } as StatusOptionsProps}
      id="gsmArena"
      tooltip={<>GSM Arena example</>}>
      <Status.Template {...{ icon: <PhoneAndroidIcon />, text: 'GSM Arena' }}/>
    </Status>
  </>
}
