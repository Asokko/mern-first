import React, { Component } from 'react'
import axios from 'axios'
import Menu from '../containers/Menu'
import { Container, Card } from 'semantic-ui-react'
import ProductCard from '../containers/prodCard'
import Filter from '../containers/Filter'

class App extends Component {
  componentWillMount(){
    const {setProduct}=this.props
    axios.get('/products.json').then(({data})=>{
      setProduct(data)
    })
  }
  render(){
    const {products, isLoading}=this.props
   return(
     <Container>
      <Menu  />
      <Filter/>
        <Card.Group itemsPerRow={5}>
          {!isLoading? 'загрузка': products.map((product,i)=>
          <ProductCard key={i}{...product}/>)}
        </Card.Group>
     </Container>
   )
  }
}

export default App
