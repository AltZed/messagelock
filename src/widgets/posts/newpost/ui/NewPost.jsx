import React, { useState } from 'react'
import { PostHeading, PostContent } from '@/entities'
import { LuFilePlus2 } from "react-icons/lu";
import { TbPhotoCheck } from "react-icons/tb";
import { Button, colors } from '@/shared'
import './NewPost.scss'
import '../../posts.scss'

/**
 * Компонент для создания нового поста. 
 * Использует сущности PostHeading и PostContent.
 */

function NewPost() {

  const [heading, setHeading] = useState('') 
  const [content, setContent] = useState('') 


  function createPost() {
    // Функция создания поста  
    if(!heading || !content) {
      alert('Заполните все поля')
    } else {
      alert('Пост создан')
    }

  }

  return (
    <div className="post-block">
      <div className="post-main">
        <PostHeading text="Новый пост" color="#afee25" isCreate={true} onChange={e => setHeading(e.target.value)} />
        <PostContent isCreate={true} onChange={e => setContent(e.target.value)} />

        <div className="post-instruments">
          <div className="right-block">
            <LuFilePlus2   color='#fff' size={20}  />
            <TbPhotoCheck  color='#fff' size={20}  />
          </div>
          <div className="left-block">
            <Button className="create-button" bgColor={colors.blackGray} text="Создать" textColor={colors.white} onClick={createPost} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default NewPost