import NetworkCheckIcon from '@mui/icons-material/NetworkCheck'
import { Box, Tooltip, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Status } from 'mui-industrial'
import { useEffect, useState } from 'react'

const id = 'speedMonitorX'

const STypography: any = styled(Typography)(() => ({
  borderBottom: '1px solid',
  paddingBottom: '4px',
  marginBottom: '4px',
}))

export default () => {
  const [requests, setRequests] = useState<any[]>([])
  const [requestedItems, setRequestedItems] = useState<any[]>([])
  const [details, setDetails] = useState<{ download: number, size: number }>({ download: 0, size: 0 })

  const generateHeader = (title: string) => <STypography variant="subtitle2">{title}</STypography>

  const registerRequest = (resource: any) => {
    if(requests.length === 0 || !requests.some((p: { name: any }) => p.name === resource.name)) {
      setRequests((prev: any) => [...prev, resource])
      setDetails((prev: { download: number; size: any }) => ({
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
      {requestedItems.map((r: { name: {} | null | undefined; size: number }) => <Tooltip key={`${r?.name}-key`} title={r.name}>
        <Typography variant="caption">...{`${r?.name}`.slice(-20)} ({r.size / 1000} KB)</Typography>
      </Tooltip>)}
    </Box>
  </Box>

  const badge = (details.download !== 0 && details.size !== 0)
    ? `${Math.round(details.download / 1000 * 100) / 1000} MB/s | ${Math.round(details.size / 1000)} KB`
    : 'Waiting...'

  useEffect(() => {
    setRequestedItems(requests
      .filter((r: { name: any }) => String(r.name).includes(location.origin))
      .map((r: { name: string; encodedBodySize: any }) => ({ name: r.name.replace(location.origin, ''), size: r.encodedBodySize })))
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

  return <Status {...{ id, tooltip }} secondary order={-6}>
    <Status.Template {...{ badge }}
      style={{ minWidth: '150px' }}
      icon={<NetworkCheckIcon color="primary" />}
      text="Traffic"
    />
  </Status>
}
