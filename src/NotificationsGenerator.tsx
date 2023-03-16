/* eslint-disable no-unused-vars */
import CircleNotificationsOutlinedIcon from '@mui/icons-material/CircleNotificationsOutlined'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import SouthOutlinedIcon from '@mui/icons-material/SouthOutlined'
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined'
import { Box, Button, TextField, Typography } from '@mui/material'
import { Status, StatusType } from 'mui-industrial'
import { PopperWidth, Severity } from 'mui-industrial/lib/esm/index.types'
import { useEffect, useState } from 'react'
import './App.css'

export default function ({
  baseDomain,
} : {
	baseDomain?: string
}) {
  const [type, setType] = useState<string|undefined>()

  // const generateInfoNotification = (message: string) => <>
  //   <StatusSnackbar
  //     {...{ message }}
  //     source="AutoFixer"
  //     onClick={() => { console.log('triggered')}}
  //     severity={Severity.INFO} />
  //   <StatusSnackbar {...{ message }} severity={Severity.INFO} />
  // </>

  // const generateSuccessNotification = (message: string) => <>
  //   <StatusSnackbar
  //     {...{ message }}
  //     code='lorem ipsum'
  //     source="AutoFixer"
  //     severity={Severity.SUCCESS}
  //     actions={[
  //       <Button>Slack it</Button>,
  //       <Button color="inherit">Post to Jira</Button>,
  //     ]}/>
  //   <StatusSnackbar
  //     {...{ message }}
  //     severity={Severity.SUCCESS}
  //     onClick={() => { console.log('triggered')}}
  //     actions={[
  //       <Button>Slack it</Button>,
  //       <Button color="inherit">Post to Jira</Button>,
  //     ]}/>
  //   <StatusSnackbar
  //     {...{ message }}
  //     severity={Severity.SUCCESS}
  //     code="sample"
  //     onClick={() => { console.log('triggered')}}
  //   />
  // </>

  // const generateWarningNotification = (message: string) => <>
  //   <StatusSnackbar
  //     message={[
  //       'ncus ex, quis dictum nunc massa vitae risus.',
  //       'Mauris sed velit pulvinar, convallis lacus non, egestas',
  //       'orci. Mauris pellentesque at metus et pharetra.',
  //       'Nam imperdiet ipsum vitae massa vestibulum varius. Nu'].join('')}
  //     code="demo"
  //     severity={Severity.WARNING} />
  // </>


  // const generateErrorNotification = (message: string) => <>
  //   <StatusSnackbar
  //     message='Unfortunately the image cannot be saved'
  //     actions={[
  //       <Button>Create ticket</Button>,
  //     ]}
  //     severity={Severity.ERROR}
  //     code={`react-jsx-runtime.development.js:117 Warning: Each child in a list should have a unique "key" prop.

  //         Check the render method of. See https://reactjs.org/link/warning-keys for more information.
  //             at __WEBPACK_DEFAULT_EXPORT__ (http://localhost:3005/static/js/bundle.js:61233:21)
  //             at div
  //             at http://localhost:3005/static/js/bundle.js:1552:66
  //             at __WEBPACK_DEFAULT_EXPORT__ (http://localhost:3005/static/js/bundle.js:61723:67)
  //             at div
  //             at http://localhost:3005/static/js/bundle.js:1552:66
  //             at div
  //             at http://localhost:3005/static/js/bundle.js:1552:66
  //             at __WEBPACK_DEFAULT_EXPORT__ (http://localhost:3005/static/js/bundle.js:62011:21)
  //             at StatusProvider (http://localhost:3005/static/js/bundle.js:60670:19)
  //             at App (http://localhost:3005/static/js/bundle.js:54:90)`}
  //   />
  //   <StatusSnackbar
  //     message='Unfortunately the image cannot be saved'
  //     actions={[
  //       <Button>Create ticket</Button>,
  //       <Button>Create incident</Button>,
  //     ]}
  //     severity={Severity.ERROR} />
  // </>

  return <>
    {type && <>
      {/* {type === 'info' && generateInfoNotification('Sample Info Notification')}
      {type === 'success' && generateSuccessNotification('Sample Success Notification')}
      {type === 'warning' && generateWarningNotification('Sample Warning Notification')}
      {type === 'error' && generateErrorNotification('Sample Error Notification')} */}
    </>}

    <Status
      id="notificationsGeneratorPanel"
      options={{
        as: StatusType.POPPER,
        title: 'Notifications Generator',
        popper: {
          width: PopperWidth.LG,
        },
        content: <Box display={'flex'}
          flexDirection={'column'}
          alignItems={'stretch'}
          justifyContent={'stretch'}>

          <Button variant="outlined" color="primary" onClick={() => setType('info')}>Info</Button>
          <Button variant="outlined" color="primary" onClick={() => setType('success')}>Success</Button>
          <Button variant="outlined" color="primary" onClick={() => setType('warning')}>Warning</Button>
          <Button variant="outlined" color="primary" onClick={() => setType('error')}>Error</Button>


          {/* <BlockNotifications /> */}
        </Box>
      }}
      tooltip='Iframe'
    >
      <Status.Template icon={<CircleNotificationsOutlinedIcon />} text="Notifications Generator" />
    </Status>
  </>

}
