import React, {useState} from 'react'

import UserProfile from './components/UserProfile'
import LoginForm from './components/LoginForm'

import ExternalComponent from './components/ExternalComponent'

import './App.css'

export default function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(true)

  return (
    <div>{isLoggedIn ? <UserProfile /> : <LoginForm />}
    <ExternalComponent />
    </div>
  )
}
