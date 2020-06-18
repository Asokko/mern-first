import React from 'react'
import { Menu, Popup, List, Button, Image , Form, Grid, Header, Message, Segmen} from "semantic-ui-react";

const LoginForm = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src='/logo.png' /> Log-in to your account
      </Header>
      <Form size='large'>
        
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />

          <Button color='teal' fluid size='large'>
            Login
          </Button>
       
      </Form>
      <Message>
     
      </Message>
    </Grid.Column>
  </Grid>
)

const CardComponent = ({ title, id, image, removeFromCart }) => (
  <List selection divided verticalAlign="middle">
    <List.Item>
      <List.Content floated="right">
        <Button onClick={removeFromCart.bind(this, id)} color="red">
          Удалить
        </Button>
      </List.Content>
      <Image avatar src={image} />
      <List.Content>{title}</List.Content>
    </List.Item>
  </List>
);

const menuMain=({count, items, total})=> (
      <Menu>
        <Menu.Menu position='right'>
          <Menu.Item
            name='signup'>
            Итого: &nbsp; <b>{total}</b> &nbsp; руб.
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
      <Popup
        trigger={
          <Button>
            Заказать
          </Button>
        }
        content={
          <LoginForm />
      }
        on="click"
        hideOnScroll
      />
        </Menu.Menu>
      </Menu>
)

export default menuMain