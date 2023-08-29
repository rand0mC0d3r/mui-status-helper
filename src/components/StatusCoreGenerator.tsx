import { Avatar, Box, Checkbox, FormControl, InputLabel, LinearProgress, MenuItem, Select, TextField, Typography } from '@mui/material'
import { Highlight, PopperHeight, PopperWidth, Status, StatusType } from 'mui-industrial'
import { useState } from 'react'

const id = 'statusCoreGeneratorX'

export default function () {
  const [open, setOpen] = useState<boolean>(false)

  const [primaryText, setPrimaryText] = useState<string>('Status.Popper')
  const [badgeText, setBadgeText] = useState<string>('GENERATOR')
  const [tooltip, setTooltip] = useState<string>('Tooltip')
  const [popperText, setPopperText] = useState<string>('Status Generator Popper')
  const [highlight, setHighlight] = useState<string>(Highlight.DEFAULT)
  const [width, setWidth] = useState<PopperWidth>(PopperWidth.SM)
  const [height, setHeight] = useState<PopperHeight>(PopperHeight.AUTO)

  const [order, setOrder] = useState<number>(0)
  const [childrenOrder, setChildrenOrder] = useState<any>(0)

  const [reverse, setReverse] = useState<boolean>(false)
  const [secondary, setSecondary] = useState<boolean>(false)
  const [showIcon, setShowIcon] = useState<boolean>(false)
  const [showChildren, setShowChildren] = useState<boolean>(true)
  const [hasToolbar, setHasToolbar] = useState<boolean>(false)
  const [as, setAs] = useState<StatusType>(StatusType.POPPER)

  const content = <Box display="grid"
    style={{
      gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
      padding: '16px',
      gap: '12px',
      flex: 1,
      textAlign: 'center'
    }}
  // flexDirection="column"
  >
    <TextField value={primaryText} onChange={(e) => setPrimaryText(e.target.value)} label="Primary Text" />
    <TextField value={popperText} onChange={(e) => setPopperText(e.target.value)} label="Popper Text" />
    <TextField value={badgeText} onChange={(e) => setBadgeText(e.target.value)} label="Badge Text" />
    <TextField value={tooltip} onChange={(e) => setTooltip(e.target.value)} label="Tooltip Text" />

    <TextField value={order} onChange={(e) => setOrder(Number(e.target.value))} label="Order"
      type={'number'} />
    <TextField value={childrenOrder} onChange={(e) => setChildrenOrder(Number(e.target.value))} label="Children Order"
      type={'number'} />


    <FormControl fullWidth>
      <InputLabel id="highlight-label">Highlight</InputLabel>
      <Select labelId="highlight-label" value={highlight} onChange={(e) => {
        setHighlight(e.target.value)
      } }
      label="Highlight">
        <MenuItem value={Highlight.PRIMARY}>Primary</MenuItem>
        <MenuItem value={Highlight.SECONDARY}>Secondary</MenuItem>
        <MenuItem value={Highlight.DEFAULT}>None</MenuItem>
      </Select>
    </FormControl>

    <FormControl fullWidth>
      <InputLabel id="as-label">As</InputLabel>
      <Select labelId="as-label" value={as} onChange={(e) => {
        setAs(e.target.value as StatusType)
      } }
      label="As">
        <MenuItem value={StatusType.CONSOLE}>Console</MenuItem>
        <MenuItem value={StatusType.POPPER}>Popper</MenuItem>
        {/* <MenuItem value={StatusType.POPOVER}>Popover</MenuItem> */}
      </Select>
    </FormControl>

    <FormControl fullWidth>
      <InputLabel id="width-label">Width</InputLabel>
      <Select labelId="width-label" value={width} onChange={(e) => {
        setWidth(e.target.value as PopperWidth)
      } }
      label="Width">
        <MenuItem value={PopperWidth.SM}>SM</MenuItem>
        <MenuItem value={PopperWidth.MD}>MD</MenuItem>
        <MenuItem value={PopperWidth.LG}>LG</MenuItem>
        <MenuItem value={PopperWidth.XL}>XL</MenuItem>
        <MenuItem value={PopperWidth.AUTO}>Auto</MenuItem>
      </Select>
    </FormControl>

    <FormControl fullWidth>
      <InputLabel id="height-label">Height</InputLabel>
      <Select labelId="height-label" value={height} placeholder="Height"
        onChange={(e) => {
          setHeight(e.target.value as PopperHeight)
        } }
        label="Height">
        <MenuItem value={PopperHeight.SM}>SM</MenuItem>
        <MenuItem value={PopperHeight.MD}>MD</MenuItem>
        <MenuItem value={PopperHeight.LG}>LG</MenuItem>
        <MenuItem value={PopperHeight.XL}>XL</MenuItem>
        <MenuItem value={PopperHeight.AUTO}>Auto</MenuItem>
      </Select>
    </FormControl>


    <Box display="flex" sx={{ gap: '4px' }} alignItems="center">
      <Checkbox size='small' checked={reverse} onChange={(e) => setReverse(e.target.checked)} />
      <Typography>Reverse</Typography>
    </Box>

    <Box display="flex" sx={{ gap: '4px' }} alignItems="center">
      <Checkbox size='small' checked={secondary} onChange={(e) => setSecondary(e.target.checked)} />
      <Typography>Secondary</Typography>
    </Box>

    <Box display="flex" sx={{ gap: '4px' }} alignItems="center">
      <Checkbox size='small' checked={showIcon} onChange={(e) => setShowIcon(e.target.checked)} />
      <Typography>Show Icon</Typography>
    </Box>

    <Box display="flex" sx={{ gap: '4px' }} alignItems="center">
      <Checkbox size='small' checked={showChildren} onChange={(e) => setShowChildren(e.target.checked)} />
      <Typography>Show Children</Typography>
    </Box>

    <Box display="flex" sx={{ gap: '4px' }} alignItems="center">
      <Checkbox size='small' checked={hasToolbar} onChange={(e) => setHasToolbar(e.target.checked)} />
      <Typography>Has Toolbar</Typography>
    </Box>

  </Box>

  return <Status {...{ id, order, secondary, tooltip }}
    highlight={highlight as Highlight}
    onClick={() => setOpen((p: any) => !p)}
    options = {{
      as,
      popper: {
        hasToolbar,
        width,
        height,
        onClose: () => setOpen(false),
      },
      title: popperText,
      content,
      open
    }}
  >
    <Status.Template
      icon={showIcon ? <Avatar src="https://mui.com/static/images/avatar/1.jpg" /> : undefined}
      badge={badgeText}
      reverse={reverse}
      childrenOrder={childrenOrder}
      text={primaryText}
    >
      {showChildren && <LinearProgress style={{ width: '60px', height: '12px' }} />}
    </Status.Template>
  </Status>
}
