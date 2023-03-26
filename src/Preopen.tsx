/* eslint-disable no-unused-vars */
import Crop32OutlinedIcon from '@mui/icons-material/Crop32Outlined'
import EditAttributesIcon from '@mui/icons-material/EditAttributes'
import KeyboardIcon from '@mui/icons-material/Keyboard'
import PasswordIcon from '@mui/icons-material/Password'
import { Box } from '@mui/material'
import { KeyboardHelper, Status, useRegisterShortcut, useShortcuts } from 'mui-industrial'
import { Highlight, PopperHeight, PopperWidth, StatusOptionsProps, StatusPopperProps, StatusType } from 'mui-status/lib/esm/index.types'
import { useEffect, useState } from 'react'
import './App.css'

const statusId = 'preOpen'
const kbdId = 'preLogin'

export default function () {
  const { handleKeyboardRegister, handleKeyboardDeRegister } =  useRegisterShortcut()
  const [open, setOpen] = useState<boolean>(false)

  const content = <Box
    display={'flex'}
    flexDirection="column"
    justifyItems={'flex-start'}
    style={{ padding: '8px 16px', userSelect: 'none' }}
  >
    Login buttons...
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

  return <>
    <Status {...{ tooltip: <>Login into Google/Facebook <KeyboardHelper shortcutId={kbdId} /></> }}
      id={statusId}
      highlight={Highlight.SECONDARY}
      order={-5}
      onClick={() => setOpen(p => !p)}
      options={{
        as: StatusType.POPPER,
        popper: {
          width: PopperWidth.SM,
          onClose: () => setOpen(false)
        } as StatusPopperProps,
        title: 'You need to login to proceed...',
        open,
        content
      } as StatusOptionsProps}
    >

      <Status.Template icon={<PasswordIcon />} text="Login" />
    </Status>
  </>
}
