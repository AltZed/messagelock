import React from 'react'
import { AuthForm } from '@/widgets'

import '../../auth.scss'

function SignUp() {
  return (
    <div className='fullscreen auth'>
      <AuthForm signup />
    </div>
  )
}

export default SignUp