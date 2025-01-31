import React from 'react'
import { Panel, NewPost, Post } from '@/widgets'

import './Feed.scss'

function Feed() {
  return (
    <div className='fullscreen feed'>
      
      <div className="sidebar">
        <Panel />
      </div>

      <div className="content">
        <div className="scroll-block">
          <NewPost />
          <Post />
        </div>
      </div>
    </div>
  )
}

export default Feed