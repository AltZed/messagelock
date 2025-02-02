import React from 'react'
import { FaGithub } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";

import { Button, Input, LinkButton, colors } from '@/shared'

import './AuthForm.scss'

/**
 *  Описание компонента формы авторизации. 
 *  @param {boolean} signin - указывает, нужно ли отобразить форму авторизации или регистрации.
 * 
 *  signin ? 'Войти' : 'Регистрация'
 */

function AuthForm({
  signin
}) {
  return (
    <div className={`auth-form ${signin ? 'border-green' : 'border-turquoise'}`}>
        <div className='heading' 
          style={{color: signin ? colors.green : colors.turquoise}}
        >{signin ? 'Войти' : 'Регистрация'}</div>
        <div className="input-block">
            <Input placeholder="login" type="text" />
            <Input placeholder="password" type="password" />
        </div>
        <div className="button-block">
            <Button bgColor={colors.uiColor} text={signin ? 'Вход' : 'Далее'} textColor={colors.white} />
            <div className="Outh">
              <Button bgColor={colors.white} icon={<FaGithub size={28} />} />
              <Button bgColor={colors.white} icon={<AiFillGoogleCircle size={28} />} textColor="" />
            </div>
            <LinkButton bgColor={signin ? colors.turquoise : colors.green} 
              textColor={colors.white} 
              text={signin ? 'Регистрация' : 'Вход'} 
              to={signin ? '/signup' : '/signin'} 
            />
        </div>
    </div>
  )
}

export default AuthForm