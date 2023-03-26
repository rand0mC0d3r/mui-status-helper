import DocumentScannerOutlinedIcon from '@mui/icons-material/DocumentScannerOutlined'
import { Status, StatusOptionsProps, StatusType } from 'mui-industrial'

export default function () {
  return <>
    <Status
      options={{
        as: StatusType.CONSOLE,
        content: <iframe
          style={{ border: '0px', width: '100%', height: '100%' }}
          src="https://mui.com/material-ui/material-icons/"
        />
      } as StatusOptionsProps}
      id="mui5Console"
      tooltip='View MUI5 Material Icons collection'>
      <Status.Template {...{ icon: <DocumentScannerOutlinedIcon />, text: 'MUI MT-Icons' }}/>
    </Status>
  </>
}
