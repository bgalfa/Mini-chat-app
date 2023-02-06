import React from 'react'
import DirectMessaging from './directmsg';
import './App.css';
import Log_in from './login';
const App = () => {
  if(!localStorage.getItem('username')) 
      return <Log_in></Log_in>
  return (
    <DirectMessaging/>
  )
}

export default App