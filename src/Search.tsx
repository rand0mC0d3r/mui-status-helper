/* eslint-disable no-unused-vars */
import Crop32OutlinedIcon from '@mui/icons-material/Crop32Outlined'
import EditAttributesIcon from '@mui/icons-material/EditAttributes'
import KeyboardIcon from '@mui/icons-material/Keyboard'
import SearchIcon from '@mui/icons-material/Search'
import { ListItemText, MenuItem, MenuList, TextField } from '@mui/material'
import { KeyboardHelper, Status, useRegisterShortcut, useShortcuts } from 'mui-industrial'
import { PopperWidth, StatusType } from 'mui-status/lib/esm/index.types'
import { useEffect, useState } from 'react'
import './App.css'

const kbdId = 'tools'

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
      order: -5,
      onClick: () => setOpen(prev => !prev),
      tooltip: <>Functions/Tools <KeyboardHelper shortcutId={kbdId} /> </>,
      options: {
        as: StatusType.POPPER,
        popper: {
          width: PopperWidth.SM,
          hasToolbar: false,
          onClose: () => setOpen(false),
        },
        title: 'Functions/Tools',
        open,
        content
      },
    }}
  >
    <Status.Template icon={<SearchIcon />}/>
  </Status>
}
