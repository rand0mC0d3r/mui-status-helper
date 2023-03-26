import Crop32OutlinedIcon from '@mui/icons-material/Crop32Outlined'
import EditAttributesIcon from '@mui/icons-material/EditAttributes'
import KeyboardIcon from '@mui/icons-material/Keyboard'
import { ListItemText, MenuItem, MenuList } from '@mui/material'
import { KeyboardHelper, Status, useRegisterShortcut, useShortcuts } from 'mui-industrial'
import { PopperWidth, StatusType } from 'mui-status/lib/esm/index.types'
import { useEffect, useState } from 'react'
import './App.css'

const kbdId = 'bkdShortcut'

const i18n = {
  actionOne: 'Edit Shortcuts',
  actionTwo: 'As chips',
  shortcutLabel: 'Toggle Keyboard Shortcuts',
  template: 'Shortcuts'
}

export default function () {
  const shortcuts = useShortcuts()
  const [open, setOpen] = useState<boolean>(false)
  const [edit, setEdit] = useState<boolean>(false)
  const [asChip, setAsChip] = useState<boolean>(true)
  const { handleKeyboardRegister, handleKeyboardDeRegister, handleKeyboardGetLabel } =  useRegisterShortcut()

  const content = <MenuList>
    {shortcuts.map(({ id }) => <MenuItem key={id} style={{ cursor: 'auto' }}>
      <ListItemText style={{ width: '250px' }}>{handleKeyboardGetLabel(id)}</ListItemText>
      <KeyboardHelper {...{ asChip }} hasOverride={edit} shortcutId={id} />
    </MenuItem>)}
  </MenuList>

  useEffect(() => {
    handleKeyboardRegister({ id: kbdId, ctrlKey: true, char: 'K', onTrigger: () => setOpen((prev) => !prev), label: 'Toggle Shortcuts' })

    return () => handleKeyboardDeRegister(kbdId)
  }, [])

  return <Status
    {...{
      id: kbdId,
      order: 99,
      onClick: () => setOpen(prev => !prev),
      tooltip: <>View/Change Keyboard Shortcuts <KeyboardHelper shortcutId={kbdId} /> </>,
      options: {
        as: StatusType.POPPER,
        popper: {
          width: PopperWidth.SM,
          onClose: () => setOpen(false),
        },
        actions: [
          { icon: <EditAttributesIcon color={edit ? 'primary' : 'action'} />, title: i18n.actionOne, onClick: () => setEdit(prev => !prev) },
          { icon: <Crop32OutlinedIcon color={asChip ? 'primary' : 'action'} />, title: i18n.actionTwo, onClick: () => setAsChip(prev => !prev) }
        ],
        title: 'Keyboard Shortcuts',
        open,
        content
      },
    }}
    secondary
  >
    <Status.Template icon={<KeyboardIcon />} badge={shortcuts.length} text="Shortcuts" />
  </Status>
}
