import React from 'react'
import {ChatEngine} from 'react-chat-engine';

//Using arrow function component
const App = () => {
  return (
    <ChatEngine
      userName={localStorage.getItem('username')}
      projectID = 'aacc52aa-597f-4b09-b6a4-9c12b541b241'
      userSecret={localStorage.getItem('password')}
    />
  )
}
export default App