/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { Cloud, ContentCopy, ContentCut, ContentPaste, GridView } from '@mui/icons-material'
import { Divider, ListItemIcon, ListItemText, MenuItem, MenuList } from '@mui/material'
import { KeyboardHelper, Status, StatusType, useRegisterCommand, useRegisterShortcut } from 'mui-industrial'
import { useEffect, useState } from 'react'
import './App.css'

const commands = [
  { id: 'func1', icon: <ContentCut fontSize="small" />, label: 'Function 1', shortcutId: 'random1' },
  { id: 'func2',  icon: <ContentCopy fontSize="small" />, label: 'Function 2'  },
  { id: 'func3', icon: <ContentPaste fontSize="small" />, label: 'Function 3', shortcutId: 'random2' },
  { id: 'func4', icon: <Cloud fontSize="small" />, label: 'Function 4' },
]

const items = [
  { id: 'random1', label: 'Func1', char: 'I', altKey: true },
  { id: 'random2', label: 'Func2', char: 'U', altKey: true },
]

export default function () {
  const { handleCommandsRegister } =  useRegisterCommand()
  const { handleKeyboardsRegister } =  useRegisterShortcut()

  useEffect(() => {
    handleCommandsRegister([
      ...commands
        .map(({
          id,
          icon,
          shortcutId,
          label
        }) => {
          return {
            id: `${id}`,
            shortcutId,
            icon,
            onClick: () => console.log('triggered', id),
            label }
        })
    ])
    handleKeyboardsRegister([
      ...items
        .map(({ id, char, altKey, label }) => {
          return { id: `${id}`, altKey, char, onTrigger: () => console.log(label), label }
        })
    ])

    // return () => {
    //   handleKeyboardsDeRegister(['menuShortcut', ...items.filter(({ id }) => !!id).map(({ id }) => `${id}`)])
    // }
  }, [])

  return <></>
}
