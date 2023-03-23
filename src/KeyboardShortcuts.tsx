import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined'
import { Box } from '@mui/material'
import { KeyboardHelper, Status, useRegisterShortcut, useShortcuts } from 'mui-industrial'
import { PopperWidth, StatusOptionsProps, StatusPopperProps, StatusType } from 'mui-status/lib/esm/index.types'
import { useEffect, useState } from 'react'
import './App.css'

export default function () {
  const shortcuts = useShortcuts()
  const [open, setOpen] = useState<boolean>(false)
  const { handleKeyboardRegister, handleKeyboardDeRegister } =  useRegisterShortcut()

  const content = <Box display={'flex'} flexDirection="column" justifyItems={'flex-start'}>
    {shortcuts.map(shortcut => <Box key={shortcut.id} style={{ padding: '8px 16px' }} display='flex'
      justifyContent={'space-between'}>
      {shortcut?.label || 'unlabeled'} <KeyboardHelper shortcutId={shortcut.id} />
    </Box>)}
  </Box>

  useEffect(() => {
    handleKeyboardRegister({
      id: 'bkdShortcut',
      ctrlKey: true,
      char: 'K',
      onTrigger: () => setOpen((prev) => !prev),
      label: 'Toggle Shortcuts'
    })

    return () => {
      handleKeyboardDeRegister('bkdShortcut')
    }
  }, [])

  return <Status {...{ tooltip: <div>test <KeyboardHelper shortcutId='keyboardShortcut' /> </div> }}
    id="kbdShortcuts"
    secondary
    order={99}
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
}
