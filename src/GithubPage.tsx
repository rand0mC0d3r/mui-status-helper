import GitHubIcon from '@mui/icons-material/GitHub'
import { Status, StatusType } from 'mui-industrial'

export default function () {
  return  <Status
    options={{
      as: StatusType.CONSOLE,
      content: <iframe style={{ border: '0px', width: '100%', height: '100%' }} src="https://github.com/rand0mC0d3r/mui-industrial#readme"/>,
    }}
    id="githubPage"
    tooltip="Project's Github documentation">
    <Status.Template {...{ icon: <GitHubIcon />, text: 'Github Ref' }}/>
  </Status>
}
