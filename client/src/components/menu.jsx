import React,{useState,useContext} from 'react'
import { Menu, Popup, List, Button, Image , Form} from "semantic-ui-react";
import {useHttp} from '../hooks/http.hook'
import {AuthContext} from '../context/AuthContext'

const Zakaz = ({nametitle, namecolor}) => {
   const {userPhone,isAuthenticated,userName}=useContext(AuthContext)
   const {loading, request, error} = useHttp()
   const username=JSON.stringify({userName})
   const userphone=JSON.stringify({userPhone})
   console.log({userName})
   const [forms, setMes] = useState({
    name: username,namecolor:namecolor, phone: userphone,nametitle:nametitle
  })
  const [form, setForm] = useState({
    name: '', phone: '',nametitle:nametitle, namecolor:namecolor
  })
    if(isAuthenticated){
      
      
    const userHandler = async () => {
        
      try {
        const data = await request('/api/mailer/mailern', 'POST', {...forms})
      } catch (e) {}
    }
    return(
    <Form style={{ height: '10vh' , width:120}}>
      <Button type='submit' onClick={userHandler}>Отправить заявку</Button>
      </Form>
      )
    }else{
      
    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
      }
      const userHandler = async () => {
        
        try {
          const data = await request('/api/mailer/mailern', 'POST', {...form})
        } catch (e) {}
      }
      
      return(
<Form style={{ height: '40vh' , width:300}}>
    <Form.Field>
      <label>Имя</label>
      <input placeholder='Имя' name="name" id="name" onChange={changeHandler}/>
    </Form.Field>
    <Form.Field>
      <label>Телефон</label>
      <input placeholder='Телефон' name="phone" id="name" onChange={changeHandler}/>
    </Form.Field>
    <Button type='submit' onClick={userHandler}>Отправить заявку</Button>
  </Form>
      )
    }
  
}
  

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

const menuMain=({count, items, total, nametitle, namecolor})=> {
  console.log(nametitle)
  return(
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
        content={items.map(product => (
          <CardComponent {...product} />
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
          
            <Zakaz nametitle={nametitle} namecolor={namecolor}/>
          
      }
        on="click"
        hideOnScroll
      />

        </Menu.Menu>
      </Menu>
)
    }

export default menuMain
