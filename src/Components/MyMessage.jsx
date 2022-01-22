import React from 'react';

const MyMessage = ({ message }) => {
  if(message?.attatchments?.length > 0) {
    return(
      <img
      src={message.attatchments[0].file}
      alt='attatchment'
      className='message-image'
      style={{ float: 'right' }}
      />
    )
  }
  return( 
    <div 
      className='message'
      style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#FF33C1' }}
    >
      {message.text}

    </div>
  )
}

export default MyMessage
