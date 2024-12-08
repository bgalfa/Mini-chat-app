import React from 'react'
import {ChatEngine} from 'react-chat-engine';

//Using arrow function component
const App = () => {
  return (
    <ChatEngine
      userName={localStorage.getItem('username')}
      projectID = 'api-key-from-chat-engine-api'
      userSecret={localStorage.getItem('password')}
    />
  )
}
export default App
