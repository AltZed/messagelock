import React from 'react'
import Navigation from './navigation/Navigation'
import { BrowserRouter } from "react-router"
import ChangeTitle from './navigation/ChangeTitle'

import './styles/global.scss'

/**
 * Основной компонент приложения.
 * Возвращает компонент {@link Navigation | `<Navigation />`},обёрнутый в {@link BrowserRouter | `<BrowserRouter>`}.
 *  
 * ```JSX
 *  <BrowserRouter>
      <Navigation />
    </BrowserRouter>
 * ``` 
 */


function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <ChangeTitle />
    </BrowserRouter>
  )
}
     
export default App