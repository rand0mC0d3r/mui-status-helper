/* eslint-disable no-unused-vars */
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import './App.css'
// import ImplementationFrame from './parts/_ImplementationFrame'

function App() {
  return <ThemeProvider {...{ theme: createTheme() }} >
    d
    {/* <ImplementationFrame {...{
      debug, toggleDebug: () => setDebug(!debug),
      darkMode, toggleDarkMode: () => setDarkMode(!darkMode),
      position, setPosition
    }} /> */}
  </ThemeProvider>
}

export default App
