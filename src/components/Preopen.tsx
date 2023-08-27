/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import FacebookIcon from '@mui/icons-material/Facebook'
import GitHubIcon from '@mui/icons-material/GitHub'
import GoogleIcon from '@mui/icons-material/Google'
import PasswordIcon from '@mui/icons-material/Password'
import { Avatar, Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { Highlight, KeyboardHelper, PopperWidth, Status, StatusType, useConfig } from 'mui-industrial'
import { useEffect, useState } from 'react'

const id = 'preOpen'
const kbdId = 'preLogin'

export default function () {
  const theme = useTheme()
  const { config, configUnmount } = useConfig()
  const [open, setOpen] = useState<boolean>(true)
  const [isLogged, setIsLogged] = useState<boolean>(false)

  const keyboards = [
    { id: kbdId, ctrlKey: true, char: 'L', onTrigger: () => setOpen((prev: any) => !prev), label: 'Toggle Login' },
    { id: 'googleLogin', ctrlKey: true, char: 'G', onTrigger: () => console.log('Google kbd', id), label: 'Google Login' }
  ]

  const commands = [
    { id: 'googleLogin',
      icon : <GoogleIcon />,
      shortcutId: 'googleLogin',
      onTrigger: () => {
        console.log('Google command', id)
        setIsLogged(true)
      },
      label: 'Google Login' },
    { id: 'facebookLogin', icon : <FacebookIcon />, onTrigger: () => console.log('Facebook', id), label: 'Facebook Login' },
    { id: 'githubLogin', icon : <GitHubIcon />, onTrigger: () => console.log('Github', id), label: 'Github Login' },
  ]

  const content = <Box display="flex" style={{ padding: '32px 16px', gap: '16px',  textAlign: 'center' }} flexDirection="column">
    {/* {isLogged ? 'yes' : 'no'} */}
    {!isLogged && <Avatar sx={{ width: '64px', backgroundColor: theme.palette.primary.light, height: '64px', margin: 'auto' }} >AU</Avatar>}
    {isLogged && <Avatar src='https://avatars.githubusercontent.com/u/79695292?v=4'
      sx={{ width: '64px', backgroundColor: theme.palette.primary.light, height: '64px', margin: 'auto' }} />}
    <Typography variant='h6'>{isLogged ? 'Anonymous User' : 'Login...'}</Typography>
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
        { icon: <GoogleIcon />, tooltip: 'Login with Google', onClick: () => {
          console.log('Google button')
          setIsLogged(true)
        } },
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
    <Status.Template
      childrenOrder={10}
      text={isLogged ? 'Random Guy' : 'Login now'}
    >
      <>
        {!isLogged && <Status.Template icon={<PasswordIcon />}/>}
        {isLogged && <Status.Template icon={<Avatar src='https://avatars.githubusercontent.com/u/79695292?v=4'/>}/>}
      </>
    </Status.Template>
  </Status>
}
