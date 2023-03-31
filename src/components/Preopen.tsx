/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import FacebookIcon from '@mui/icons-material/Facebook'
import GitHubIcon from '@mui/icons-material/GitHub'
import GoogleIcon from '@mui/icons-material/Google'
import PasswordIcon from '@mui/icons-material/Password'
import { Box, Typography } from '@mui/material'
import { Highlight, KeyboardHelper, PopperWidth, Status, StatusType, useConfig } from 'mui-industrial'
import { useEffect, useState } from 'react'

const id = 'preOpen'
const kbdId = 'preLogin'

export default function () {
  const { config, configUnmount } = useConfig()
  const [open, setOpen] = useState<boolean>(true)

  const keyboards = [
    { id: kbdId, ctrlKey: true, char: 'L', onTrigger: () => setOpen((prev: any) => !prev), label: 'Toggle Login' },
    { id: 'googleLogin', ctrlKey: true, char: 'G', onTrigger: () => console.log('Google kbd', id), label: 'Google Login' }
  ]

  const commands = [
    { id: 'googleLogin',
      icon : <GoogleIcon />,
      shortcutId: 'googleLogin',
      onTrigger: () => console.log('Google command', id),
      label: 'Google Login' },
    { id: 'facebookLogin', icon : <FacebookIcon />, onTrigger: () => console.log('Facebook', id), label: 'Facebook Login' },
    { id: 'githubLogin', icon : <GitHubIcon />, onTrigger: () => console.log('Github', id), label: 'Github Login' },
  ]

  const content = <Box style={{ padding: '32px', textAlign: 'center' }}>
    <Typography variant='subtitle2' color="textSecondary">Login buttons...</Typography>
  </Box>

  useEffect(() => {
    config({ keyboards, commands })

    return () => configUnmount({ keyboards, commands })
  }, [])

  return <Status {...{ id, tooltip: <>Login into Google/Facebook <KeyboardHelper shortcutId={kbdId} /></> }}
    highlight={Highlight.SECONDARY}
    order={-3}
    onClick={() => setOpen((p: any) => !p)}
    options={{
      as: StatusType.POPPER,
      popper: {
        width: PopperWidth.SM,
        onClose: () => setOpen(false)
      },
      actions: [
        { icon: <GoogleIcon />, tooltip: 'Login with Google', onClick: () => console.log('Google button') },
        { icon: <FacebookIcon />, tooltip: 'Login with Facebook', onClick: () => console.log('Facebook') },
        { icon: <GitHubIcon />, tooltip: 'Login with GitHub', onClick: () => console.log('GitHub') }
      ],
      separators: {
        end: true,
        start: true
      },
      title: 'You need to login to proceed...',
      open,
      content
    }}
  >
    <Status.Template icon={<PasswordIcon />} text="Login" />
  </Status>
}
