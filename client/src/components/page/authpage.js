import React, {useContext, useEffect, useState} from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import {useHttp} from '../../hooks/http.hook'
import {AuthContext} from '../../context/AuthContext'

const AuthForm = () => {
    const {loading, error, request}=useHttp()
    const auth = useContext(AuthContext)
    const [form, setForm] = useState({
        email: '', password: ''
      })
    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
      }
      const loginHandler = async () => {
        try {
          const data = await request('/api/auth/login', 'POST', {...form})
          auth.login(data.token, data.userId, data.userEmail, data.userPhone)
        } catch (e) {}
      }
      return(
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        Log-in to your account
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

          <Button color='teal' fluid size='large' onClick={loginHandler}>
            Login
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

export default AuthForm