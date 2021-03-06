import React, {useState} from 'react'
import { Button, Form, Grid, Header, Segment, Message } from 'semantic-ui-react'
import {useHttp} from '../../hooks/http.hook'

const RegForm = () => {
    const {loading, request, error} = useHttp()
    const [form, setForm] = useState({
      email: '', password: '', phone: '', name: ''
    })
    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
      }
      const registerHandler = async () => {
        try {
          const data = await request('/api/auth/register', 'POST', {...form})
        } catch (e) {}
      }
      return(
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        Account registration
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' 
          id='email' name='email' onChange={changeHandler}/>
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            id='password'
            name='password'
            onChange={changeHandler}
          />
         <Form.Input
            fluid
            icon='phone'
            iconPosition='left'
            placeholder='Phone number'
            type='phone'
            id='phone'
            name='phone'
            onChange={changeHandler}
          />
          <Form.Input
            fluid
            icon='user'
            iconPosition='left'
            placeholder='Name'
            type='name'
            id='name'
            name='name'
            onChange={changeHandler}
          />

          <Button color='teal' fluid size='large' onClick={registerHandler} disabled={loading}>          
            Registration
          </Button>
        </Segment>
      </Form>
      <Message>
        {error}
      </Message>
    </Grid.Column>
  </Grid>
      )
}

export default RegForm