import Crop32OutlinedIcon from '@mui/icons-material/Crop32Outlined'
import EditAttributesIcon from '@mui/icons-material/EditAttributes'
import KeyboardIcon from '@mui/icons-material/Keyboard'
import { Box } from '@mui/material'
import { KeyboardHelper, Status, useRegisterShortcut, useShortcuts } from 'mui-industrial'
import { PopperWidth, StatusOptionsProps, StatusPopperProps, StatusType } from 'mui-status/lib/esm/index.types'
import { useEffect, useState } from 'react'
import './App.css'

const kbdId = 'bkdShortcut'

export default function () {
  const shortcuts = useShortcuts()
  const [open, setOpen] = useState<boolean>(false)
  const [edit, setEdit] = useState<boolean>(false)
  const [asChip, setAsChip] = useState<boolean>(false)
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
      id: kbdId,
      ctrlKey: true,
      char: 'K',
      onTrigger: () => setOpen((prev) => !prev),
      label: 'Toggle Shortcuts'
    })

    return () => {
      handleKeyboardDeRegister(kbdId)
    }
  }, [])

  return <Status {...{ tooltip: <>View/Change Keyboard Shortcuts <KeyboardHelper shortcutId={kbdId} /> </> }}
    id={kbdId}
    secondary
    order={99}
    onClick={() => setOpen(prev => !prev)}
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
    <Status.Template icon={<KeyboardIcon />} badge={shortcuts.length} text="Shortcuts" />
  </Status>
}
