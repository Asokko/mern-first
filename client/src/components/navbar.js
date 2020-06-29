import React, {useContext} from 'react'
import { Menu } from 'semantic-ui-react'
import {NavLink, useHistory} from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const Navbar = ()=> {
    const history=useHistory()
    const auth=useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
      }

    return (
      <Menu>
        <Menu.Item
        name='editorials'

        >
            <NavLink to="/">
            Главная
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
                Контакты
            </NavLink>
        </Menu.Item>
        <Menu.Menu position="right">
            <Menu.Item
            name='upcomingEvents'
            >
            <NavLink to="/auth">
            Авторизация
            </NavLink>
            </Menu.Item>
            <Menu.Item
            name='upcomingEvents'
            >
            <NavLink to="/reg">
                Регистрация
            </NavLink>
            </Menu.Item>
            <Menu.Item
            name='upcomingEvents'
            >
            <a href="/" onClick={logoutHandler}>Выйти</a>
            </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
}