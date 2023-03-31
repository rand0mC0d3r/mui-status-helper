/* eslint-disable no-console */
import { Cloud, ContentCopy, ContentCut, ContentPaste } from '@mui/icons-material'
import { useRegisterCommand, useRegisterShortcut } from 'mui-industrial'
import { useEffect } from 'react'

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

export default function ({ wikiFrame, setWikiFrame } : { wikiFrame: boolean, setWikiFrame: any}) {
  const { handleCommandsRegister } =  useRegisterCommand()
  const { handleKeyboardsRegister } =  useRegisterShortcut()

  useEffect(() => {
    handleCommandsRegister([
      {
        id: 'toggleWiki',
        icon: <Cloud fontSize="small" />,
        onTrigger: () => setWikiFrame(!wikiFrame),
        label: 'Toggle Wiki',
        shortcutId: 'toggleWiki'
      },
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
            onTrigger: () => console.log('triggered', id),
            label }
        })
    ])
    handleKeyboardsRegister([
      {
        id: 'toggleWiki',
        char: 'O',
        ctrlKey: true,
        onTrigger: () => {
          console.log('triggered', 'toggleWiki')
          setWikiFrame((w: any) => !w)
        },
        label: 'Toggle Wiki'
      },
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
