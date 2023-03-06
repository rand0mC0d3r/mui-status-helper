/* eslint-disable no-unused-vars */
// import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined'
// import { Box } from '@mui/material'
// import { Keyboard, KeyboardHelper, Status, StatusHelper, useShortcuts } from 'mui-industrial'
import { Keyboard } from 'mui-industrial'
// import { PopperWidth, StatusOptionsProps, StatusPopperProps, StatusType } from 'mui-status/lib/esm/index.types'
import { useCallback, useState } from 'react'
import './App.css'

export default function () {
  // const shortcuts = useShortcuts()
  const [forceOpen, setForceOpen] = useState<boolean>(false)
  const [count, setCount] = useState<number>(0)

  // const content = <Box display={'flex'} flexDirection="column" justifyItems={'flex-start'}>
  //   {shortcuts.map(shortcut => <Box style={{ padding: '8px 16px' }} display='flex'
  //     justifyContent={'space-between'}>
  //     {shortcut?.label || 'unlabeled'} <KeyboardHelper shortcutId={shortcut.id} />
  //   </Box>)}
  // </Box>

  const toggleOpen = useCallback(() => {
    console.log('triggered', forceOpen)
    setForceOpen(() => !forceOpen)
    setCount(count + 1)
  }, [forceOpen])

  return <>
    {forceOpen ? 'open' : 'closed'}
    {count}
    <button onClick={toggleOpen}>ff</button>
    <Keyboard id='keyboardShortcut' label='Keyboard shortcuts' char="K"
      ctrlKey={true}
      onTrigger={toggleOpen} />

    {/* <Status {...{ tooltip: <div>test <KeyboardHelper shortcutId='keyboardShortcut' /> </div> }}
      id="kbdShortcuts"
      options={{
        as: StatusType.POPPER,
        popper: {
          width: PopperWidth.SM,
        } as StatusPopperProps,
        title: 'Keyboard Shortcuts',
        // open: forceOpen,
        content
      } as StatusOptionsProps}
    >
      <>
        <StatusHelper badge={forceOpen ? 'open' : 'closed'} icon={<ChatOutlinedIcon />} text="Shortcuts" />
      </>
    </Status> */}
  </>

}
