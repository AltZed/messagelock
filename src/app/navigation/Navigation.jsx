import React from 'react'
import { Routes, Route } from 'react-router'
import { SignIn, SignUp, Feed } from '@/pages'

/**
 * Компонент Navigation - это функциональный компонент, 
 * который использует библиотеку React Router для 
 * маршрутизации между страницами приложения.
 * 
 * Он содержит Routes, в которых описаны 
 * пути до страниц, и соответствующие им компоненты. 
 * 
 * Pages:
 * - Feed - страница ленты
 * - SignIn - страница входа
 * - SignUp - страница регистрации
 */

function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<Feed />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  )
}

export default Navigation