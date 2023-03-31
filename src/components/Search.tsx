import SearchIcon from '@mui/icons-material/Search'
import { KeyboardHelper, Status, useRegisterShortcut } from 'mui-industrial'

const id = 'search'

export default () => {
  const { handleKeyboardTrigger } =  useRegisterShortcut()

  return <Status
    secondary
    {...{
      id,
      order: -99,
      onClick: () => handleKeyboardTrigger('commands'),
      tooltip: <>Command palette <KeyboardHelper shortcutId={'commands'} /> </>,
    }}
  >
    <Status.Template icon={<SearchIcon />}/>
  </Status>
}
