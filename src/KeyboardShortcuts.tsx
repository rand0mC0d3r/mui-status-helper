import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined'
import { Box } from '@mui/material'
import { Keyboard, KeyboardHelper, Status, useShortcuts } from 'mui-industrial'
import { PopperWidth, StatusOptionsProps, StatusPopperProps, StatusType } from 'mui-status/lib/esm/index.types'
import { useState } from 'react'
import './App.css'

export default function () {
  const shortcuts = useShortcuts()
  const [open, setOpen] = useState<boolean>(false)

  const content = <Box display={'flex'} flexDirection="column" justifyItems={'flex-start'}>
    {shortcuts.map(shortcut => <Box key={shortcut.id} style={{ padding: '8px 16px' }} display='flex'
      justifyContent={'space-between'}>
      {shortcut?.label || 'unlabeled'} <KeyboardHelper shortcutId={shortcut.id} />
    </Box>)}
  </Box>

  return <>
    <Keyboard
      id='keyboardShortcut'
      label='Keyboard shortcuts'
      char="K"
      ctrlKey={true}
      onTrigger={() => setOpen(!open)}
    />
    <Status {...{ tooltip: <div>test <KeyboardHelper shortcutId='keyboardShortcut' /> </div> }}
      id="kbdShortcuts"
      options={{
        as: StatusType.POPPER,
        popper: {
          width: PopperWidth.SM,
        } as StatusPopperProps,
        title: 'Keyboard Shortcuts',
        open,
        content
      } as StatusOptionsProps}
    >
      <Status.Template icon={<ChatOutlinedIcon />} text="Shortcuts" />
    </Status>
  </>

}
