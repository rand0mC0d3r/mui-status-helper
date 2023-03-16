import NetworkCheckIcon from '@mui/icons-material/NetworkCheck'
import { Box, Tooltip, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Status } from 'mui-status'
import { useEffect, useState } from 'react'
import './App.css'

const STypography = styled(Typography)(() => ({
  borderBottom: '1px solid',
  paddingBottom: '4px',
  marginBottom: '4px',
}))

export default function () {
  const [requests, setRequests] = useState<any[]>([])
  const [requestedItems, setRequestedItems] = useState<any[]>([])

  const [details, setDetails] = useState<{
		download: number,
		size: number
  }>({ download: 0, size: 0 })

  const generateHeader = (title: string) => <STypography variant="subtitle2">{title}</STypography>

  const registerRequest = (resource: any) => {
    if(requests.length === 0 || !requests.some(p => p.name === resource.name)) {
      setRequests((prev) => [...prev, resource])
      setDetails((prev) => ({
        download: (prev.download + ((resource.encodedBodySize / 1000) / (resource.duration / 1000) )) / 2,
        size: prev.size + resource.encodedBodySize
      }))
    }
  }

  const tooltip = <Box display='flex' flexDirection="column" style={{ gap: '8px' }}>
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
  </Box>

  const badge = (details.download !== 0 && details.size !== 0)
    ? `${Math.round(details.download / 1000 * 100) / 1000} MB/s | ${Math.round(details.size / 1000)} KB`
    : 'Waiting...'

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

  return <Status id="tooltipAndText2Status"  secondary {...{ tooltip }}>
    <Status.Template style={{ minWidth: '150px' }} {...{ badge }}
      icon={<NetworkCheckIcon color="primary" />}
      text="Network"
    />
  </Status>
}
