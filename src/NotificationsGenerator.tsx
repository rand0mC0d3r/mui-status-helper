/* eslint-disable no-unused-vars */
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined'
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined'
import CircleNotificationsOutlinedIcon from '@mui/icons-material/CircleNotificationsOutlined'
import ClearAllOutlinedIcon from '@mui/icons-material/ClearAllOutlined'
import { Box, Button } from '@mui/material'
import { SnackbarHelper, Status, StatusType, useRegisterSnackbar, useSnackbars } from 'mui-industrial'
import { PopoverActions, PopperWidth, Severity } from 'mui-industrial/lib/esm/index.types'
import { useState } from 'react'
import './App.css'

const id = 'notificationsGenerator'

export default function ({
  baseDomain,
} : {
	baseDomain?: string
}) {
  const { handleSnackbarRegister, handleSnackbarCleaning } =  useRegisterSnackbar()
  const snackbars =  useSnackbars()
  const [open, setOpen] = useState<boolean>(false)

  const generateInfoNotification = (message = 'Sample Info Notification') => {
    handleSnackbarRegister({
      message,
      source: 'AutoFixer',
      severity: Severity.INFO,
    })
    handleSnackbarRegister({
      message,
      severity: Severity.INFO,
    })
  }

  const generateSuccessNotification = (message = 'Sample success message') => {
    handleSnackbarRegister({
      message,
      code:'lorem ipsum',
      source:'AutoFixer',
      severity: Severity.SUCCESS,
      actions:[
        <Button>Slack it</Button>,
        <Button color="inherit">Post to Jira</Button>,
      ] })

    handleSnackbarRegister({
      message,
      severity: Severity.SUCCESS,
      // onClick:() => { console.log('triggered')},
      actions:[
        <Button>Slack it</Button>,
        <Button color="inherit">Post to Jira</Button>,
      ] })


    handleSnackbarRegister({
      message,
      severity: Severity.SUCCESS,
      code:'sample',
      // onClick:() => { console.log('triggered')},
    })
  }

  const generateWarningNotification = () => {
    handleSnackbarRegister({
      message:[
        'ncus ex, quis dictum nunc massa vitae risus.',
        'Mauris sed velit pulvinar, convallis lacus non, egestas',
        'orci. Mauris pellentesque at metus et pharetra.',
        'Nam imperdiet ipsum vitae massa vestibulum varius. Nu'].join(''),
      code:'demo',
      severity: Severity.WARNING,
    })
  }

  const generateErrorNotification = (message = 'Sample error message') => {
    handleSnackbarRegister({
      message: 'Unfortunately the image cannot be saved',
      actions:[
        <Button>Create ticket</Button>,
      ],
      severity:Severity.ERROR,
      code:`react-jsx-runtime.development.js:117 Warning: Each child in a list should have a unique "key" prop.

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
              at App (http://localhost:3005/static/js/bundle.js:54:90)`
    })
    handleSnackbarRegister({
      message:'Unfortunately the image cannot be saved',
      actions:[
        <Button>Create ticket</Button>,
        <Button>Create incident</Button>,
      ],
      severity: Severity.ERROR
    })
  }

  const content = <Box display={'flex'}
    flexDirection={'column'}
    alignItems={'stretch'}
    style={{ gap: '8px', padding: '16px' }}
    justifyContent={'stretch'}
  >
    {snackbars.map(snackbar => <SnackbarHelper snackbarId={snackbar.id} />)}
  </Box>

  return <Status {...{ id }}
    order={-1}
    onClick={() => setOpen(p => !p)}
    options={{
      actions: [{
        icon: <AddAlertOutlinedIcon />,
        tooltip: 'Generate positive notifications',
        onClick: () => {
          generateInfoNotification()
          generateSuccessNotification()
        },
      }, {
        icon: <CampaignOutlinedIcon />,
        tooltip: 'Generate negative notifications',
        onClick: () => {
          generateWarningNotification()
          generateErrorNotification()
        },
      }, {
        disabled: snackbars.length === 0,
        icon: <ClearAllOutlinedIcon />,
        tooltip: 'Remove all notifications',
        onClick: () => handleSnackbarCleaning(),
      }],
      open,
      content,
      separators: {
        end: true,
      },
      as: StatusType.POPPER,
      title: 'Notifications Generator',
      popper: {
        onClose: () => setOpen(false),
        width: PopperWidth.MD,
      },
    }}
    tooltip='Iframe'
  >
    <Status.Template icon={<CircleNotificationsOutlinedIcon />} badge={snackbars.length} text="Notifications Generator" />
  </Status>
}
