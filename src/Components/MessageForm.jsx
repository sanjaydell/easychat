import React from 'react';
import { useState } from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';
import { PictureOutlined, SendOutlined } from '@ant-design/icons';

const MessageForm = (props) => {
  const [value, setValue] = useState('')
  const { chatId, creds} = props

  const handleSubmit = (event) => {
    event.preventDefault()

    const text = value.trim()

    if(text.length > 0) sendMessage(creds, chatId, {text} )

    setValue('')

  }

  const handleChange = (event) => {
    setValue(event)
    isTyping(props, chatId)
  }

  const handleUpload = (event) => {
    sendMessage(chatId, creds, { files: event.target.files, text: '' })
  }

  return (
    <form className='message-form' onSubmit={handleSubmit}>
      <input
        className='message-input'
        placeholder='send a message...'
        value={value}
        onChange={event => handleChange(event.target.value)}
        onSubmit={handleSubmit}
      />
      <label htmlFor='upload-button'>
        <span className='image-button'>
          <PictureOutlined className='picture-icon' />
        </span>
      </label>
      <input 
        type='file'
        multiple={false}
        id='upload-button'
        style={{ display: 'none' }}
        onChange={handleUpload}
      />
      <button
        type='submit'
        className='send-button'
        style={{ align: 'right' }}
      >
        <SendOutlined 
          className='send-icon'
          style={{ color: 'blue' }}
        />
      </button>
    </form>
  )
}

export default MessageForm
