import React, { useState } from 'react'
import { PostHeading, PostContent } from '@/entities'
import './NewPost.scss'
import '../../posts.scss'

function NewPost() {


  return (
    <div className="post-block">
      <div className="post-main">
        <PostHeading text="Новый пост" color="#afee25" isCreate={true} />
        <PostContent text="Текст" />
      </div>
    </div>
  )
}

export default NewPost