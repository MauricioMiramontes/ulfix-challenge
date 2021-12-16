import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// Views
import Home from './views/Home.js'
import Profile from './views/Profile.js'
import SignIn from './views/SignIn.js'
import SignUp from './views/SignUp.js'
import UserList from './views/UserList.js'
import EditUser from './views/EditUser.js'

function App () {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [authToken, setAuthToken] = useState('')
  const [userData, setUserData] = useState({})
  const [Language, setLanguage] = useState('es')

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Home
              Language={Language}
              changeLanguage={(e) => setLanguage(e)}
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={(e) => setIsAuthenticated(e)}
            />
          }
        />
        <Route
          path='/profile'
          element={
            <Profile
              Language={Language}
              changeLanguage={(e) => setLanguage(e)}
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={(e) => setIsAuthenticated(e)}
              userData={userData}
              authToken={authToken}
            />
          }
        />
        <Route
          path='/sign-in'
          element={
            <SignIn
              Language={Language}
              changeLanguage={(e) => setLanguage(e)}
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={(e) => setIsAuthenticated(e)}
              setAuthToken={(e) => setAuthToken(e)}
              setUserData={(e) => setUserData(e)}
            />
          }
        />
        <Route
          path='/sign-up'
          element={
            <SignUp
              Language={Language}
              changeLanguage={(e) => setLanguage(e)}
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={(e) => setIsAuthenticated(e)}
              setAuthToken={(e) => setAuthToken(e)}
              setUserData={(e) => setUserData(e)}
            />
          }
        />
        <Route
          path='/user-list'
          element={
            <UserList
              Language={Language}
              changeLanguage={(e) => setLanguage(e)}
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={(e) => setIsAuthenticated(e)}
            />
          }
        />
        <Route
          path='/edit-user'
          element={
            <EditUser
              Language={Language}
              changeLanguage={(e) => setLanguage(e)}
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={(e) => setIsAuthenticated(e)}
              userData={userData}
              setUserData={(e) => setUserData(e)}
              authToken={authToken}
              setAuthToken={(e) => setAuthToken(e)}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
