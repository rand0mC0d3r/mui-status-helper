/* eslint-disable no-unused-vars */
import BrandingWatermarkOutlinedIcon from '@mui/icons-material/BrandingWatermarkOutlined'
import FileCopyIcon from '@mui/icons-material/FileCopy'
import InventoryIcon from '@mui/icons-material/Inventory'
import LogoDevOutlinedIcon from '@mui/icons-material/LogoDevOutlined'
import PersonIcon from '@mui/icons-material/Person'
import ReplayIcon from '@mui/icons-material/Replay'
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Typography } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { KeyboardHelper, useRegisterShortcut, useShortcuts } from 'mui-industrial'
import { ShortcutObject } from 'mui-industrial/lib/esm/index.types'
import { ChangeEvent, createRef, MouseEvent, SyntheticEvent, useState } from 'react'

const text = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Praesent hendrerit quam magna, nec commodo nisi consectetur commodo.',
  'Pellentesque maximus, quam at efficitur feugiat, leo sapien rhoncus ex, quis dictum nunc massa vitae risus.',
  'Mauris sed velit pulvinar, convallis lacus non, egestas orci.',
  'Mauris pellentesque at metus et pharetra.',
  'Nam imperdiet ipsum vitae massa vestibulum varius. Nulla facilisi. Duis imperdiet felis tortor.',
].join(' ')

export default function ({
  wikiFrame,
  setWikiFrame,
  variant,
  setVariant,
  loggedIn,
  setLoggedIn,
  fullWidth,
  setFullWidth,
  margin,
  setMargin,
  width,
  setWidth,
  hasBorder,
  setHasBorder,
  position,
  setPosition,
} : {
  wikiFrame: boolean,
  setWikiFrame: any,
	variant: string,
	setVariant: any,
  loggedIn: boolean,
  setLoggedIn: any,
	fullWidth: boolean,
	setFullWidth: any,
	margin: string,
	setMargin: any,
	width: string,
	setWidth: any,
	hasBorder: boolean,
	setHasBorder: any,
	position: string,
	setPosition: any,
}) {
  const { handleKeyboardRegister, handleKeyboardDeRegister, handleKeyboardGetLabel } =  useRegisterShortcut()
  const shortcuts =  useShortcuts()
  const selectionRef = createRef<any>()
  const [selectedText, setSelectedText] = useState('')
  const [selectionIndexes, setSelectionIndexes] = useState({ start: 0, end: 0 })
  const [progress, setProgress] = useState(0)

  const [open, setOpen] = useState(false)

  const [expanded, setExpanded] = useState<boolean>(false)

  const handleChange = () => {
    setExpanded(p => !p)
  }

  const individualTooltip = (title = 'Anonymous User', icon = <PersonIcon/>) => <>
    <Box display='flex' alignItems="center" style={{ gap: '8px' }}>
      {icon}
      <Typography style={{ lineHeight: '1' }} variant='subtitle2'>{title}</Typography>
    </Box>
    <Box display='flex' alignItems="center" style={{ gap: '8px', padding: '8px 0px' }}>
      <Typography variant='caption'>Sample commit message (2 seconds ago) |</Typography>
      <FileCopyIcon style={{ fontSize: 16 }} />
    </Box>
    <Typography
      style={{
        borderTop: '1px solid #888',
        paddingTop: '8px',
        marginTop: '8px',
      }}
      color="action"
      variant='caption'
    >
			Click to show commit
    </Typography>
  </>

  const generateTooltip = () => {
    return <Box display='flex' flexDirection="column" style={{ width: '300px', padding: '8px' }}>
      {individualTooltip()}
      {individualTooltip()}
      {individualTooltip()}
      {individualTooltip()}
      {individualTooltip()}
      {individualTooltip()}
      {individualTooltip()}
    </Box>
  }

  const toggleBlock = (title: string, checked: any, onChange: any) => {
    return <div style={{ alignItems: 'center', justifyContent: 'space-between', display: 'flex', gap: '20px' }}>
      <Typography>{title}</Typography>
      <Checkbox {...{ checked, onChange: (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.checked) }} inputProps={{ 'aria-label': 'controlled' }}/>
    </div>
  }

  const toggleOptions = (title: string, options: any, onChange: any, current: any) => {
    return <div style={{ alignItems: 'center', justifyContent: 'space-between', display: 'flex', gap: '20px' }}>
      <Typography>{title}</Typography>
      <ToggleButtonGroup value={current} exclusive onChange={(event, value) => onChange(value)}>
        {options.map((option: any) => <ToggleButton key={option} value={option}>
          {option}
        </ToggleButton>)}
      </ToggleButtonGroup>
    </div>
  }

  const previewShortcuts = (shortcutId: string) => {
    return <div key={shortcutId} style={{ display: 'flex', width: '350px', alignItems: 'center', gap: '12px' }}>
      <Typography
        style={{ flex: '1 0 auto', textAlign: 'right', alignSelf: 'flex-end' }}
        variant="subtitle2"
        color="textSecondary">
        {handleKeyboardGetLabel(shortcutId)}
      </Typography>
      <div style={{ flex: '0 0 130px' }}>
        <KeyboardHelper
          hasOverride
          asChip
          hasTooltip={true}
          shortcutId={shortcutId} />
      </div>
    </div>
  }

  return <>
    <div
      style={{
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        gap: '16px',
        alignItems: 'center'
      }}>
      {wikiFrame
        ? <iframe style={{ border: '0px', width: '100%', height: '100%' }} src="https://en.wikipedia.org/wiki/Special:Random"/>
        : <>
          {!expanded && <Box display={'flex'} flexDirection={'column'} alignItems="center"
            style={{ gap: '32px' }}>
            <BrandingWatermarkOutlinedIcon color="action" style={{ fontSize: '200px' }} />
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'}
              style={{ gap: '16px' }}>
              {shortcuts
                .filter(({ id }) => ['bkdShortcut','googleLogin','toggleWiki','menuShortcut','preLogin','console','commands'].some((s) => s === id))
                .map(({ id }) => previewShortcuts(id))}
            </Box>
            <Typography variant="caption" color="textSecondary">*Hint: Right-Click on a shortcut to customize it</Typography>
          </Box>}

          <Accordion expanded={expanded} onChange={handleChange}>
            <AccordionSummary>Control Panel</AccordionSummary>
            <AccordionDetails>
              {expanded && <>
                <div style={{
                  alignItems: 'stretch',
                  flexDirection: 'column',
                  display: 'flex',
                  border: '1px solid #888',
                  borderRadius: '8px',
                  padding: '16px',
                  gap: '16px'
                }}>
                  {toggleBlock('Simulate logged in', loggedIn, setLoggedIn)}
                  {toggleBlock('Border', hasBorder, setHasBorder)}
                  {toggleBlock('FullWidth', fullWidth, setFullWidth)}
                  {toggleOptions('Variant', ['default', 'outlined'], setVariant, variant)}
                  {toggleOptions('Position', ['top', 'bottom'], setPosition, position)}
                  {toggleOptions('Width', ['75vw', '100%', '60%', '1400px'], setWidth, width)}
                  {toggleOptions('Margin', ['0px', '4px', '16px'], setMargin, margin)}
                </div>
                <div style={{ alignItems: 'center', flexDirection: 'column', display: 'flex', gap: '16px' }}>
                  <Button onClick={() => window.location.reload()} variant='contained' color="primary"
                    fullWidth>
                    <ReplayIcon /> Reload
                  </Button>
                  <textarea onMouseUp={() => {
                    let textVal = selectionRef.current
                    let cursorStart = textVal.selectionStart
                    let cursorEnd = textVal.selectionEnd
                    let selectedText = text.substring(cursorStart,cursorEnd)
                    setSelectionIndexes({ start: cursorStart, end: cursorEnd })
                    setSelectedText(selectedText)
                  }} ref={selectionRef} style={{ width: '100%', height: '400px' }}
                  defaultValue={text.trim()} />
                </div>
              </>}
            </AccordionDetails>
          </Accordion>
        </>}
    </div>
  </>
}
