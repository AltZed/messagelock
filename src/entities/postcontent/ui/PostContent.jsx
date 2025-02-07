import React, { useState } from 'react';
import './PostContent.scss';

/**
 * Компонент который отвечает за ввод текста для создание поста или за его вывод.
 * isCreate ? (создание) : (вывод)
 * isCreate ? text - игнор : text - вывод 
 */



function PostContent({ text, isCreate, onChange }) {
  
  return (
    <div className="post-content">
      <div className="content">
        {isCreate ? (
          <div className="input-content">
            <textarea
              onChange={onChange}
              type="text"
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