import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {useAuth} from './hooks/auth.hook'
import useRoutes from './routes'
import {AuthContext} from './context/AuthContext'
import {Navbar} from './components/navbar'


function App() {
  const {token, login, logout, userId, userEmail, userPhone, userName} = useAuth()
  const isAuthenticated = !!token
  const routes = useRoutes (isAuthenticated)
  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated, userEmail, userPhone, userName
    }}>
      <Router>
      <Navbar />
        <div className="container">
          {routes}
        </div>
      </Router>
    </ AuthContext.Provider>
  )
}

export default App