import React from 'react'
import { Menu, Popup, List, Button, Image } from "semantic-ui-react";

const CardComponent = ({ title, id, image, removeFromCard }) => (
  <List selection divided verticalAlign="middle">
    <List.Item>
      <List.Content floated="right">
        <Button onClick={removeFromCard.bind(this, id)} color="red">
          Удалить
        </Button>
      </List.Content>
      <Image avatar src={image} />
      <List.Content>{title}</List.Content>
    </List.Item>
  </List>
);

const menuMain=({count, items})=> (
      <Menu>
        <Menu.Item name='browse' >
            Главная
        </Menu.Item>
        <Menu.Item
          name='submit'>
          Товары
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item
            name='signup'>
            Итого: &nbsp; <b>0</b> &nbsp; руб.
          </Menu.Item>
      <Popup
        trigger={
          <Menu.Item name="help">
            Корзина (<b>{count}</b>)
          </Menu.Item>
        }
        content={items.map(book => (
          <CardComponent {...book} />
        ))}
        on="click"
        hideOnScroll
      />
        <Menu.Item
            name='help'>
            Sign Up
          </Menu.Item>
        </Menu.Menu>
      </Menu>
)

export default menuMain