import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

const productCard = product =>{
  const { title, text, price, image, addToCard, addedCount}=product
  return(
      <Card>
        <Image src={image} />
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Description>
            {text}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name='rub' />
          {price}
        </Card.Content>
  <Button onClick={addToCard.bind(this, product)} >
    В корзину {addedCount>0 && `${addedCount}`}</Button>
      </Card>
  )
}
export default productCard