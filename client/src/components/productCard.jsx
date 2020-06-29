import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

const productCard = product =>{
  const { title,color, text, price, image, addToCart, addedCount,typeismer}=product
  return(
      <Card>
        <Image src={image} />
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Description>
            <h4>{color}</h4>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name='rub' />
          {price} {typeismer}
        </Card.Content>
  <Button onClick={addToCart.bind(this, product)} >
    В корзину {addedCount>0 && `${addedCount}`}</Button>
      </Card>
  )
}
export default productCard