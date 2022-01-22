import React from 'react'
import { hot } from 'react-hot-loader/root'
import { ChatEngine } from 'react-chat-engine'
import './Styles/App.css'
import ChatFeed from './Components/ChatFeed'
import LoginForm from './Components/LoginForm'
// import { ChatSettings } from 'react-chat-engine';
// import { NewChatForm } from 'react-chat-engine'


function App() {
  if(!localStorage.getItem('username')) return <LoginForm />
  return (
    <div className='app'>
      <ChatEngine
        height='100vh'
        projectID='d0c67863-5fb0-4fbb-af63-774c02f28167'
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatProps) => <ChatFeed {...chatProps} />
      }
      />
      {/* <NewChatForm {...props} /> */}
    </div>
  )
}

export default hot(App);
