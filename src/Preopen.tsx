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

export default function () {
  const [open, setOpen] = useState<boolean>(true)

  const content = <Box
    display={'flex'}
    flexDirection="column"
    justifyItems={'flex-start'}
    style={{ padding: '8px 16px', userSelect: 'none' }}
  >
    Login buttons...
  </Box>

  return <>
    <Status {...{ tooltip: 'Login into Google/Facebook' }}
      id={statusId}
      highlight={Highlight.SECONDARY}
      order={-5}
      onClick={() => setOpen(p => !p)}
      options={{
        as: StatusType.POPPER,
        popper: {
          width: PopperWidth.SM,
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
