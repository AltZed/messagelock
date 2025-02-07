import React, { useEffect } from 'react'
import  {Panel, NewPost, Post } from '@/widgets'

import './Feed.scss'

/**
 * Страница ленты постов.
 */

function Feed() {

  useEffect(() => {
    document.title = 'MessageLock | Feed'
  }, [])

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