/* eslint-disable no-unused-vars */
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined'
import CircleNotificationsOutlinedIcon from '@mui/icons-material/CircleNotificationsOutlined'
import MarkUnreadChatAltOutlinedIcon from '@mui/icons-material/MarkUnreadChatAltOutlined'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import SouthOutlinedIcon from '@mui/icons-material/SouthOutlined'
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined'
import { Avatar, Box, Button, IconButton, TextField, Typography } from '@mui/material'
import { Status, StatusHelper, StatusPanel } from 'mui-status'
import { useCallback, useEffect, useState } from 'react'
import './App.css'

export default function () {
  const [fake, setFake] = useState<boolean>(false)
  const [users, setUsers] = useState<string[]>(['DA', 'AC', 'BB', 'CF', 'BD', 'AA'])
  const [tooltip, setTooltip] = useState<string>('Chat client')
  const [notifications, setNotifications] = useState<string>('')
  const [user, setUser] = useState<string | undefined>()

  const generateChat = (flag: boolean) => {
    if(flag === true) {
      const randomId = Math.floor(Math.random() * users.length)
      const randomNotifications = Math.floor(Math.random() * 8) + 1
      setTooltip(`${users[randomId]} sent you ${randomNotifications} messages`)
      setNotifications(`${randomNotifications}`)
      setUser(users[randomId])
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      generateChat(fake)
    }, 1500)

    return () => clearInterval(interval)
  }, [fake])

  return <>
    <StatusPanel
      highlight={notifications !== '' ? 'primary' : 'default'}
      onClick={() => {
        setNotifications('')
        setTooltip('Chat client')
        setFake(false)
      }}
      id="chatClient"
      popoverTitle="Chats"
      tooltip={tooltip}
      popover={<Box display='flex' alignItems={'stretch'} justifyContent={'space-between'}
        flexDirection='column'
        style={{  width: '500px', height: '650px' }}
      >
        <Box
          display='flex'
          flexDirection='row'
          justifyContent={'space-between'}
          style={{ padding: '8px' }}
        >
          <Box display='flex'  flexDirection='row' style={{ gap: '8px', padding: '0px' }}>
            {users.map(avatar => <Avatar key={avatar} style={avatar === user ? { backgroundColor: '#888' } : {}} variant="rounded">
              {avatar}
            </Avatar>)}
          </Box>
          <Button onClick={() => setFake(!fake)} size="small"
            variant="outlined" color="primary">
            <MarkUnreadChatAltOutlinedIcon />
          </Button>
        </Box>
        <Box display='flex' flexDirection='column' style={{
          flex: '1 1 auto',
          margin: '0px 8px',
          overflowY: 'auto',
          color: '#AAA',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '8px',
          border: '1px dotted #888'
        }}>
					CHAT {user && `with ${user}`}
        </Box>
        <Box display='flex' flexDirection={'row'} style={{ padding: '8px', gap: '8px' }}>
          <TextField variant='outlined' placeholder='Your answer...' fullWidth />
          <Button variant="outlined" color="primary" endIcon={<SendOutlinedIcon />}>Send</Button>
        </Box>
      </Box>}>
      <StatusHelper notifications={notifications} icon={<ChatOutlinedIcon />} text="Chat" />
    </StatusPanel>
  </>

}
