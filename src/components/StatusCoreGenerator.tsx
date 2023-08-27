/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import FacebookIcon from '@mui/icons-material/Facebook'
import GitHubIcon from '@mui/icons-material/GitHub'
import GoogleIcon from '@mui/icons-material/Google'
import PasswordIcon from '@mui/icons-material/Password'
import { Avatar, Box, Checkbox, MenuItem, Select, TextField, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { Highlight, KeyboardHelper, PopperWidth, Status, StatusType, useConfig } from 'mui-industrial'
import { useEffect, useState } from 'react'

const id = 'statusCoreGenerator'

export default function () {
  const theme = useTheme()
  const [open, setOpen] = useState<boolean>(false)

  const [primaryText, setPrimaryText] = useState<string>('Sample')
  const [badgeText, setBadgeText] = useState<string>('')
  const [tooltip, setTooltip] = useState<string>('Tooltip')
  const [popperText, setPopperText] = useState<string>('Status Generator Popper')
  const [highlight, setHighlight] = useState<string>(Highlight.DEFAULT)

  const [order, setOrder] = useState<number>(0)

  const [reverse, setReverse] = useState<boolean>(false)
  const [secondary, setSecondary] = useState<boolean>(false)
  const [showIcon, setShowIcon] = useState<boolean>(false)

  const content = <Box display="flex" style={{ padding: '32px 16px', gap: '16px',  textAlign: 'center' }} flexDirection="column">
    <TextField value={primaryText} onChange={(e) => setPrimaryText(e.target.value)} label="Primary Text" />
    <TextField value={popperText} onChange={(e) => setPopperText(e.target.value)} label="Popper Text" />
    <TextField value={badgeText} onChange={(e) => setBadgeText(e.target.value)} label="Badge Text" />
    <TextField value={tooltip} onChange={(e) => setTooltip(e.target.value)} label="Tooltip Text" />
    <TextField value={order} onChange={(e) => setOrder(Number(e.target.value))} label="Order"
      type={'number'} />
    <Select value={highlight} onChange={(e) => {
      setHighlight(e.target.value)
    } } label="Highlight">
      <MenuItem value={Highlight.PRIMARY}>Primary</MenuItem>
      <MenuItem value={Highlight.SECONDARY}>Secondary</MenuItem>
      <MenuItem value={Highlight.DEFAULT}>None</MenuItem>
    </Select>
    <Box display="flex" sx={{ gap: '4px' }} alignItems="center">
      <Checkbox  checked={reverse} onChange={(e) => setReverse(e.target.checked)} />
      <Typography>Reverse</Typography>
    </Box>

    <Box display="flex" sx={{ gap: '4px' }} alignItems="center">
      <Checkbox  checked={secondary} onChange={(e) => setSecondary(e.target.checked)} />
      <Typography>Secondary</Typography>
    </Box>

    <Box display="flex" sx={{ gap: '4px' }} alignItems="center">
      <Checkbox  checked={showIcon} onChange={(e) => setShowIcon(e.target.checked)} />
      <Typography>Show Icon</Typography>
    </Box>

  </Box>

  return <Status {...{ id, order, secondary, tooltip }}
    highlight={highlight as Highlight}
    onClick={() => setOpen((p: any) => !p)}
    options = {{
      as: StatusType.POPPER,
      popper: {
        width: PopperWidth.SM,
        onClose: () => setOpen(false),
      },
      title: `${open ? 'open' : 'closed'} - ${popperText}`,
      content,
      open
    }}
  >
    <Status.Template
      icon={showIcon ? <Avatar src="https://mui.com/static/images/avatar/1.jpg" /> : undefined}
      badge={badgeText}
      reverse={reverse}
      text={primaryText}
    />
  </Status>
}
