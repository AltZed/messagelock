import React from 'react'
import './PostHeading.scss'

/**
 * Компонент который отвечает за ввод заголовка или его вывод.
 * isCreate ? (создание) : (вывод)
 * isCreate ? text - игнор : text - вывод 
 * 
 * color - цвет заголовка. По умолчанию #FFF
 * 
 */


function PostHeading({
    text, color='#FFF',
    isCreate, onChange
}) {
  return (
    <div className="post-heading" >
        <div className="post-set-color" style={{backgroundColor: color}} />
        {
          isCreate ?
            <div className="input-heading">
              <input onChange={onChange} type="text" placeholder='Заголовок' maxLength={80} />
            </div>  :
            text
        }
    </div>
  )
}

export default PostHeading