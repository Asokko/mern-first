import React, {useContext} from 'react'
import { Menu } from 'semantic-ui-react'
import {AuthContext} from '../context/AuthContext'
import {NavLink, useHistory} from 'react-router-dom'

export const Navbar = ()=> {
 
  /* const history = useHistory()
  const auth = useContext(AuthContext)

 const logoutHandler = event => {
    event.preventDefault()
    auth.logout()
    history.push('/')
  }*/

    return (
      <Menu>
        <Menu.Item
        name='editorials'

        >
            <NavLink to="/">
            главная
            </NavLink>
        </Menu.Item>
        <Menu.Item
        name='reviews'
        >
            <NavLink to="/product">
                Товары
            </NavLink>
        </Menu.Item>
        <Menu.Item
        name='upcomingEvents'
        >
            <NavLink to="/contactpage">
                контакты
            </NavLink>
        </Menu.Item>
        <Menu.Menu position="right">
            <Menu.Item
            name='upcomingEvents'
            >
            <NavLink to="/auth">
            авторизация
            </NavLink>
            </Menu.Item>
            <Menu.Item
            name='upcomingEvents'
            >
            <NavLink to="/reg">
                регистрация
            </NavLink>
            </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
}