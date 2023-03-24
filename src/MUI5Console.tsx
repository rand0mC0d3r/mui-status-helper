/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { Cloud, ContentCopy, ContentCut, ContentPaste, GridView } from '@mui/icons-material'
import DocumentScannerOutlinedIcon from '@mui/icons-material/DocumentScannerOutlined'
import { Divider, ListItemIcon, ListItemText, MenuItem, MenuList } from '@mui/material'
import { KeyboardHelper, Status, StatusOptionsProps, StatusType, useRegisterShortcut } from 'mui-industrial'
import { PopperHeight, PopperWidth } from 'mui-industrial/lib/esm/index.types'
import { useEffect, useState } from 'react'

import './App.css'

export default function () {

  const content = <iframe
    style={{ border: '0px', width: '100%', height: '100%' }}
    src="https://mui.com/material-ui/material-icons/"
  />

  return <>
    <Status
      options={{
        as: StatusType.CONSOLE,
        popper: {
          width: PopperWidth.LG,
          height: PopperHeight.LG,
        },
        content,
      } as StatusOptionsProps}
      id="mui5Console"
      tooltip={<>View MUI5 documentation</>}>
      <Status.Template {...{ icon: <DocumentScannerOutlinedIcon />, text: 'MUI Documentation' }}/>
    </Status>
  </>
}
