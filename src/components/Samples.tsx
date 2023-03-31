import ListAltIcon from '@mui/icons-material/ListAlt'
import { LinearProgress } from '@mui/material'
import { Status } from 'mui-industrial'

export default () => <>
  <Status id="tooltipAndText4Status" >
    <Status.Template childrenOrder={3} icon={<ListAltIcon />} badge="text"
      text="progress">
      <LinearProgress style={{ width: '60px', height: '12px' }} />
    </Status.Template>
  </Status>

  <Status id="onlyText" order={99} onClick={() => {}}>
    <Status.Template text="text" />
  </Status>

  <Status id="onlyBadge" onClick={() => {}}>
    <Status.Template badge="badge" />
  </Status>

  <Status id="onlyIcon" onClick={() => {}}>
    <Status.Template icon={<ListAltIcon />} />
  </Status>
</>
