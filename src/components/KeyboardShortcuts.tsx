import Crop32OutlinedIcon from '@mui/icons-material/Crop32Outlined'
import EditAttributesIcon from '@mui/icons-material/EditAttributes'
import KeyboardIcon from '@mui/icons-material/Keyboard'
import { ListItemText, MenuItem, MenuList } from '@mui/material'
import { KeyboardHelper, PopperWidth, ShortcutObject, Status, StatusType, useConfig, useRegisterShortcut, useShortcuts } from 'mui-industrial'
import { useEffect, useState } from 'react'

const kbdId = 'bkdShortcut'

const i18n = {
  actionOne: 'Edit Shortcuts',
  actionTwo: 'As chips',
  shortcutLabel: 'Toggle Keyboard Shortcuts',
  template: 'Shortcuts'
}

export default function () {
  const shortcuts = useShortcuts()
  const [open, setOpen] = useState<boolean>(true)
  const [edit, setEdit] = useState<boolean>(false)
  const [asChip, setAsChip] = useState<boolean>(true)
  const { handleKeyboardGetLabel } =  useRegisterShortcut()
  const { config, configUnmount } = useConfig()

  const content = <MenuList>
    {shortcuts.map(({ id }) => <MenuItem key={id} style={{ cursor: 'auto' }}>
      <ListItemText style={{ width: '250px' }}>{handleKeyboardGetLabel(id)}</ListItemText>
      <KeyboardHelper {...{ asChip }} hasOverride={edit} shortcutId={id} />
    </MenuItem>)}
  </MenuList>

  const keyboards = [
    { id: kbdId, ctrlKey: true, char: 'K', onTrigger: () => setOpen((prev) => !prev), label: 'Toggle Shortcuts' }
  ] as ShortcutObject[]

  useEffect(() => {
    config({ keyboards })

    return () => configUnmount({ keyboards })
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
          { icon: <EditAttributesIcon color={edit ? 'primary' : 'action'} />, tooltip: i18n.actionOne, onClick: () => setEdit(prev => !prev) },
          { icon: <Crop32OutlinedIcon color={asChip ? 'primary' : 'action'} />, tooltip: i18n.actionTwo, onClick: () => setAsChip(prev => !prev) }
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
