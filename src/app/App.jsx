import React from 'react'
import Navigation from './navigation/Navigation'
import { BrowserRouter } from "react-router"

import './styles/global.scss'

function App() {
  return (
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  )
}

export default App