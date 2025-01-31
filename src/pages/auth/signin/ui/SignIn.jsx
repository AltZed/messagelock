import React from 'react'
import { AuthForm } from '@/widgets'

import '../../auth.scss'

function SignIn() {
  return (
    <div className='fullscreen auth'>
      <AuthForm signin />
    </div>
  )
}

export default SignIn