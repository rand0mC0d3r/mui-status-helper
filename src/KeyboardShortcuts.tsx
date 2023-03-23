import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined'
import Crop32OutlinedIcon from '@mui/icons-material/Crop32Outlined'
import EditAttributesIcon from '@mui/icons-material/EditAttributes'
import { Box } from '@mui/material'
import { KeyboardHelper, Status, useRegisterShortcut, useShortcuts } from 'mui-industrial'
import { PopperWidth, StatusOptionsProps, StatusPopperProps, StatusType } from 'mui-status/lib/esm/index.types'
import { useEffect, useState } from 'react'
import './App.css'

export default function () {
  const shortcuts = useShortcuts()
  const [open, setOpen] = useState<boolean>(false)
  const [edit, setEdit] = useState<boolean>(true)
  const [asChip, setAsChip] = useState<boolean>(true)
  const { handleKeyboardRegister, handleKeyboardDeRegister } =  useRegisterShortcut()

  const content = <Box display={'flex'} flexDirection="column" justifyItems={'flex-start'}>
    {shortcuts.map(shortcut => <Box
      key={shortcut.id}
      style={{ padding: '8px 16px', userSelect: 'none' }}
      display='flex'
      justifyContent={'space-between'}
    >
      {shortcut?.label || 'unlabeled'} <KeyboardHelper hasOverride={edit} asChip={asChip} shortcutId={shortcut.id} />
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
        actions: [
          {
            icon: <EditAttributesIcon color={edit ? 'primary' : 'action'} />,
            title: 'Edit Shortcuts',
            onClick: () => setEdit(prev => !prev)
          },
          {
            icon: <Crop32OutlinedIcon color={asChip ? 'primary' : 'action'} />,
            title: 'As chips',
            onClick: () => setAsChip(prev => !prev)
          }
        ]
      } as StatusPopperProps,
      title: 'Keyboard Shortcuts',
      open,
      content
    } as StatusOptionsProps}
  >
    <Status.Template icon={<ChatOutlinedIcon />} badge={shortcuts.length} text="Shortcuts" />
  </Status>
}
