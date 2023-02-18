import NetworkCheckIcon from '@mui/icons-material/NetworkCheck'
import { Box, Tooltip, Typography } from '@mui/material'
import { Status, StatusHelper } from 'mui-status'
import { useEffect, useState } from 'react'
import './App.css'

export default function () {
  const [requests, setRequests] = useState<any[]>([])
  const [requestedItems, setRequestedItems] = useState<any[]>([])

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
    setRequestedItems(requests
      .filter(r => String(r.name).includes(location.origin))
      .map((r) => ({ name: r.name.replace(location.origin, ''), size: r.encodedBodySize })))
  }, [requests])

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

  const generateHeader = (title: string) => {
    return <Typography
      variant="subtitle2"
      style={{
        borderBottom: '1px solid',
        paddingBottom: '4px',
        marginBottom: '4px',
      }}
    >
      {title}
    </Typography>
  }

  return <>
    <Status id="tooltipAndText2Status"
      secondary
      tooltip={<Box display='flex' flexDirection="column" style={{ gap: '8px' }}>
        <Box display='flex' flexDirection="column">
          {generateHeader('Connection details status')}
          <Typography variant="caption">Average speed: {Math.round(details.download / 1000 * 100) / 1000} MB/s</Typography>
          <Typography variant="caption">Data transmitted: {Math.round(details.size / 1000)} KB</Typography>
          <Typography variant="caption">Files downloaded: {requests.length}</Typography>
        </Box>

        <Box display='flex' flexDirection="column">
          {generateHeader('Call stack')}
          {requestedItems.map(r => <Tooltip key={r.name} title={r.name}>
            <Typography variant="caption">...{r.name.slice(-20)} ({r.size / 1000} KB)</Typography>
          </Tooltip>)}
        </Box>
      </Box>}
    >
      <StatusHelper style={{ minWidth: '150px' }}
        icon={<NetworkCheckIcon color="primary" />}
        notifications={`${Math.round(details.download / 1000 * 100) / 1000} MB/s | ${Math.round(details.size / 1000)} KB`}
        text="Network"
      />
    </Status>
  </>
}
