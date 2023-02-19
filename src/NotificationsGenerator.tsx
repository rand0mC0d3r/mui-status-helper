/* eslint-disable no-unused-vars */
import CircleNotificationsOutlinedIcon from '@mui/icons-material/CircleNotificationsOutlined'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import SouthOutlinedIcon from '@mui/icons-material/SouthOutlined'
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined'
import { Box, Button, TextField, Typography } from '@mui/material'
import { Status, StatusHelper, StatusSnackbar, StatusType } from 'mui-industrial'
import { useEffect, useState } from 'react'
import './App.css'

export default function ({
  baseDomain,
} : {
	baseDomain?: string
}) {
  const [type, setType] = useState<string|undefined>()

  const generateInfoNotification = (message: string) => <>
    <StatusSnackbar
      {...{ message }}
      source="AutoFixer"
      onClick={() => { console.log('triggered')}}
      severity='info' />
    <StatusSnackbar {...{ message }} severity='info' />
  </>

  const generateSuccessNotification = (message: string) => <>
    <StatusSnackbar
      {...{ message }}
      code='lorem ipsum'
      source="AutoFixer"
      severity='success'
      actions={[
        <Button>Slack it</Button>,
        <Button color="inherit">Post to Jira</Button>,
      ]}/>
    <StatusSnackbar
      {...{ message }}
      severity='success'
      onClick={() => { console.log('triggered')}}
      actions={[
        <Button>Slack it</Button>,
        <Button color="inherit">Post to Jira</Button>,
      ]}/>
    <StatusSnackbar
      {...{ message }}
      severity='success'
      code="sample"
      onClick={() => { console.log('triggered')}}
    />
  </>

  const generateWarningNotification = (message: string) => <>
    <StatusSnackbar
      message={[
        'ncus ex, quis dictum nunc massa vitae risus.',
        'Mauris sed velit pulvinar, convallis lacus non, egestas',
        'orci. Mauris pellentesque at metus et pharetra.',
        'Nam imperdiet ipsum vitae massa vestibulum varius. Nu'].join('')}
      code="demo"
      severity='warning' />
  </>


  const generateErrorNotification = (message: string) => <>
    <StatusSnackbar
      message='Unfortunately the image cannot be saved'
      actions={[
        <Button>Create ticket</Button>,
      ]}
      severity='error'
      code={`react-jsx-runtime.development.js:117 Warning: Each child in a list should have a unique "key" prop.

Check the render method of. See https://reactjs.org/link/warning-keys for more information.
    at __WEBPACK_DEFAULT_EXPORT__ (http://localhost:3005/static/js/bundle.js:61233:21)
    at div
    at http://localhost:3005/static/js/bundle.js:1552:66
    at __WEBPACK_DEFAULT_EXPORT__ (http://localhost:3005/static/js/bundle.js:61723:67)
    at div
    at http://localhost:3005/static/js/bundle.js:1552:66
    at div
    at http://localhost:3005/static/js/bundle.js:1552:66
    at __WEBPACK_DEFAULT_EXPORT__ (http://localhost:3005/static/js/bundle.js:62011:21)
    at StatusProvider (http://localhost:3005/static/js/bundle.js:60670:19)
    at App (http://localhost:3005/static/js/bundle.js:54:90)`} />
    <StatusSnackbar
      message='Unfortunately the image cannot be saved'
      actions={[
        <Button>Create ticket</Button>,
        <Button>Create incident</Button>,
      ]}
      severity='error' />
  </>

  return <>
    {type && <>
      {type === 'info' && generateInfoNotification('Sample Info Notification')}
      {type === 'success' && generateSuccessNotification('Sample Success Notification')}
      {type === 'warning' && generateWarningNotification('Sample Warning Notification')}
      {type === 'error' && generateErrorNotification('Sample Error Notification')}
    </>}

    <Status
      id="notificationsGeneratorPanel"
      options={{
        as: StatusType.PANEL,
        title: 'Notifications Generator',
        content: <Box display='flex' flexDirection={'row'}>

          <Button variant="outlined" color="primary" onClick={() => setType('info')}>Info</Button>
          <Button variant="outlined" color="primary" onClick={() => setType('success')}>Success</Button>
          <Button variant="outlined" color="primary" onClick={() => setType('warning')}>Warning</Button>
          <Button variant="outlined" color="primary" onClick={() => setType('error')}>Error</Button>
        </Box>
      }}
      tooltip='Iframe'
    >
      <StatusHelper icon={<CircleNotificationsOutlinedIcon />} text="Notifications Generator" />
    </Status>
  </>

}
