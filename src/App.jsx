import React, {useState} from 'react'

import UserProfile from './components/UserProfile'
import LoginForm from './components/LoginForm'

import './App.css'

export default function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(true)

  return (
    <div>{isLoggedIn ? <UserProfile /> : <LoginForm />}</div>
  )
}
