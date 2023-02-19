/* eslint-disable no-unused-vars */
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined'
import MarkUnreadChatAltOutlinedIcon from '@mui/icons-material/MarkUnreadChatAltOutlined'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import { Avatar, Box, Button, TextField } from '@mui/material'
import { Status, StatusHelper } from 'mui-industrial'
import { Highlight, PanelWidth, StatusType } from 'mui-status/lib/esm/index.types'
import { Fragment, useEffect, useState } from 'react'
import './App.css'

export default function () {
  const [fake, setFake] = useState<boolean>(false)
  const [users, setUsers] = useState<string[]>(['DA', 'AC', 'BB', 'CF', 'BD', 'AA'])
  const [tooltip, setTooltip] = useState<string>('Chat client')
  const [badge, setBadge] = useState<string>('')
  const [user, setUser] = useState<string | undefined>()

  const generateChat = (flag: boolean) => {
    if(flag === true) {
      const randomId = Math.floor(Math.random() * users.length)
      const randomNotifications = Math.floor(Math.random() * 8) + 1
      setTooltip(`${users[randomId]} sent you ${randomNotifications} messages`)
      setBadge(`${randomNotifications}`)
      setUser(users[randomId])
    }
  }

  const onClick = () => {
    setBadge('')
    setTooltip('Chat client')
    setFake(false)
  }

  const content = <>
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
  </>


  useEffect(() => {
    const interval = setInterval(() => {
      generateChat(fake)
    }, 1500)

    return () => clearInterval(interval)
  }, [fake])

  return <>
    <Status {...{ onClick, tooltip }}
      id="chatClient"
      highlight={badge !== '' ? Highlight.PRIMARY : Highlight.DEFAULT}
      options={{
        as: StatusType.PANEL,
        panel: {
          width: PanelWidth.SM,
          actions: [{
            icon: <MarkUnreadChatAltOutlinedIcon color={fake ? 'primary' : 'action'} />,
            title: 'Generate fake chats',
            onClick: () => setFake(!fake)
          }]
        },
        title: 'Chats',
        content
      }}
    >
      <StatusHelper {...{ badge }}
        icon={<ChatOutlinedIcon />}
        childrenIndex = {5}
        text="Chats" >
        <Fragment>
          <StatusHelper mask image={'https://avatars.githubusercontent.com/u/79695292?v=4'}/>
          <StatusHelper mask image={'https://avatars.githubusercontent.com/u/11871180?v=4'}/>
          <StatusHelper mask image={'https://avatars.githubusercontent.com/u/11874180?v=4'}/>
        </Fragment>
      </StatusHelper>
    </Status>
  </>

}
