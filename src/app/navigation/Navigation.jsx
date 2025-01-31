import React from 'react'
import { Routes, Route } from 'react-router'
import { SignIn, SignUp, Feed } from '@/pages'

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