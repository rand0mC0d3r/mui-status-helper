/* eslint-disable no-unused-vars */
import CircleNotificationsOutlinedIcon from '@mui/icons-material/CircleNotificationsOutlined'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import SouthOutlinedIcon from '@mui/icons-material/SouthOutlined'
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined'
import { Box, Button, TextField, Typography } from '@mui/material'
import { Status, StatusHelper, StatusPanel } from 'mui-status'
import { useEffect, useState } from 'react'
import './App.css'

export default function ({
  baseDomain,
} : {
	baseDomain?: string
}) {
  const [requests, setRequests] = useState<any[]>([])

  const [details, setDetails] = useState<{
		download: number,
		size: number
  }>({ download: 0, size: 0 })

  const registerRequest = (resource: any) => {
    if(requests.length === 0 || !requests.some(p => p.name === resource.name)) {
      setRequests((prev) => [...prev, resource])
      setDetails((prev) => ({
        download: (prev.download + ((resource.encodedBodySize / 1000) / (resource.duration / 1000) )) / 2,
        size: prev.size + resource.encodedBodySize
      }))
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      performance
        .getEntriesByType('resource')
        .filter((r: any) => r.initiatorType === 'script')
        .forEach((resource) => {
          registerRequest(resource)
        })
    }, 1500)

    return () => clearInterval(interval)
  }, [requests])

  return <>
    <StatusPanel
      id="notificationsGeneratorPanel"
      popoverTitle="Notifications generator"
      tooltip='Iframe'
      popover={<div style={{ width: '500px', height: '650px' }}
      >
        <Box display='flex' flexDirection={'row'}>
          <TextField  placeholder='Your answer...' />
          <Button variant="contained" color="primary" endIcon={<SendOutlinedIcon />}>Send</Button>
        </Box>
      </div>}>
      <StatusHelper icon={<CircleNotificationsOutlinedIcon />} text="Notifications Generator" />
    </StatusPanel>
  </>

}
