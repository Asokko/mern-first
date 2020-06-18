import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import MainPage from './components/page/mainPage'
import App from './containers/App'
import ContactPage from './components/page/contactpage'
import AuthForm from './components/page/authpage'
import RegForm from './components/page/regPage'

const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/" exact>
          <MainPage/>
        </Route>
        <Route path="/product" exact>
          <App />
        </Route>
        <Route path="/contactpage" exact>
          <ContactPage />
        </Route>
        <Route path="/auth" exact>
          <AuthForm />
        </Route>
        <Route path="/reg" exact>
          <RegForm />
        </Route>
        <Redirect to="/" />
      </Switch>
    )
  }
  return (
    <Switch>
       <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/product" exact>
          <App />
        </Route>
        <Route path="/contactpage" exact>
          <ContactPage />
        </Route>
        <Route path="/auth" exact>
          <AuthForm />
        </Route>
        <Route path="/reg" exact>
          <RegForm />
        </Route>
        <Redirect to="/" />
    </Switch>
  )
}

export default useRoutes