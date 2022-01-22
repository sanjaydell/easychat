import React from 'react';

const TheirMessage = ({ lastMessage, message }) => {
  const isFirstMessage = !lastMessage || lastMessage.sender.username !== message.sender.username
  console.log(message?.sender?.avatar)
  return (
    <div className='message-row'>
      {isFirstMessage && (
      <div 
        className='message-avatar'
        stylel={{ backgroundImage: `url(${message?.sender?.avatar})` }}
      />
      )}
      {message?.attatchments?.length > 0
        ?  (
              <img
              src={message.attatchments[0].file}
              alt='attatchment'
              className='message-image'
              style={{ marginLeft: isFirstMessage ? '4px' : '48px' }}
              />
            )
        : (
            <div 
              className='message'
              style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3B2A50' }}
            >
              {message.text}
      
            </div>
          )
      }
    </div>
  )
}

export default TheirMessage
