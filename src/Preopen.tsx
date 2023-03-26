import FacebookIcon from '@mui/icons-material/Facebook'
import GitHubIcon from '@mui/icons-material/GitHub'
import GoogleIcon from '@mui/icons-material/Google'
import PasswordIcon from '@mui/icons-material/Password'
import { Box, Typography } from '@mui/material'
import { KeyboardHelper, Status, useRegisterShortcut } from 'mui-industrial'
import { Highlight, PopperWidth, StatusType } from 'mui-status/lib/esm/index.types'
import { useEffect, useState } from 'react'
import './App.css'

const id = 'preOpen'
const kbdId = 'preLogin'

export default function () {
  const { handleKeyboardRegister, handleKeyboardDeRegister } =  useRegisterShortcut()
  const [open, setOpen] = useState<boolean>(false)

  const content = <Box style={{ padding: '32px', textAlign: 'center' }}>
    <Typography variant='subtitle2' color="textSecondary">Login buttons...</Typography>
  </Box>

  useEffect(() => {
    handleKeyboardRegister({
      id: kbdId,
      ctrlKey: true,
      char: 'L',
      onTrigger: () => setOpen((prev) => !prev),
      label: 'Toggle Login'
    })

    return () => {
      handleKeyboardDeRegister(kbdId)
    }
  }, [])

  return <Status {...{ id, tooltip: <>Login into Google/Facebook <KeyboardHelper shortcutId={kbdId} /></> }}
    highlight={Highlight.SECONDARY}
    order={-3}
    onClick={() => setOpen(p => !p)}
    options={{
      as: StatusType.POPPER,
      popper: {
        width: PopperWidth.SM,
        onClose: () => setOpen(false)
      },
      actions: [
        { icon: <GoogleIcon />, title: 'Login with Google', onClick: () => console.log('Google') },
        { icon: <FacebookIcon />, title: 'Login with Facebook', onClick: () => console.log('Facebook') },
        { icon: <GitHubIcon />, title: 'Login with GitHub', onClick: () => console.log('GitHub') }
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
