import React, { useState } from 'react';
import './PostContent.scss';

function PostContent({ text, isCreate }) {
  
  return (
    <div className="post-content">
      <div className="content">
        {isCreate ? (
          <div className="input-content">
            <textarea
              placeholder="Текст"
            />
          </div>
        ) : (
          text
        )}
      </div>
    </div>
  );
}

export default PostContent;