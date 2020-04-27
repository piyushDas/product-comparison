import React from 'react'
import { AppState } from './context'
import AppShell from './Containers/AppShell'
import './App.css'

const AppView = () => {
  let pageView =(
      <>
        <AppShell />
      </>
    )
  return (
    <div className="App">
      {pageView}
    </div>
  )
}

const App = () => (
  <AppState>
    <AppView />
  </AppState>
)

export default App
