/* eslint-disable no-unused-vars */
// import { createTheme, ThemeProvider } from '@material-ui/core/styles'
// import * as MuiStatus from from 'mui-status'
// import MuiStatus from 'mui-status'
import SayHello, { MuiStatusChild } from 'mui-status'
import './App.css'
// import ImplementationFrame from './parts/_ImplementationFrame'

function App() {
  return (
    <div>
      <SayHello name="ddd" />
      <MuiStatusChild text="ddd" />
    </div>
  )
}

export default App
