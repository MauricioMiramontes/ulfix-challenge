import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// Views
import Home from './views/Home.js'
import Profile from './views/Profile.js'
import SignIn from './views/SignIn.js'
import SignUp from './views/SignUp.js'
import UserList from './views/UserList.js'

function App () {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [lenguage, setLenguage] = useState('es')

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Home
              lenguage={lenguage}
              changeLenguage={(e) => setLenguage(e)}
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={(e) => setIsAuthenticated(e)}
            />
          }
        />
        <Route
          path='/profile'
          element={
            <Profile
              lenguage={lenguage}
              changeLenguage={(e) => setLenguage(e)}
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={(e) => setIsAuthenticated(e)}
            />
          }
        />
        <Route
          path='/sign-in'
          element={
            <SignIn
              lenguage={lenguage}
              changeLenguage={(e) => setLenguage(e)}
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={(e) => setIsAuthenticated(e)}
            />
          }
        />
        <Route
          path='/sign-up'
          element={
            <SignUp
              lenguage={lenguage}
              changeLenguage={(e) => setLenguage(e)}
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={(e) => setIsAuthenticated(e)}
            />
          }
        />
        <Route
          path='/user-list'
          element={
            <UserList
              lenguage={lenguage}
              changeLenguage={(e) => setLenguage(e)}
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={(e) => setIsAuthenticated(e)}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
