/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { Cloud, ContentCopy, ContentCut, ContentPaste, GridView } from '@mui/icons-material'
import DocumentScannerOutlinedIcon from '@mui/icons-material/DocumentScannerOutlined'
import { Divider, ListItemIcon, ListItemText, MenuItem, MenuList } from '@mui/material'
import { KeyboardHelper, Status, StatusOptionsProps, StatusType, useRegisterShortcut } from 'mui-industrial'
import { PopperWidth } from 'mui-industrial/lib/esm/index.types'
import { useEffect, useState } from 'react'

import './App.css'

export default function () {
  return <>
    <Status
      options={{
        as: StatusType.POPPER,
        popper: {
          width: PopperWidth.MD,
        },
        separators: {
          end: true,
        },
        content: <>console</>,
      } as StatusOptionsProps}
      id="mui5Console"
      tooltip={<>View MUI5 documentation</>}>
      <Status.Template {...{ icon: <DocumentScannerOutlinedIcon />, text: 'MUI Documentation' }}/>
    </Status>
  </>
}
