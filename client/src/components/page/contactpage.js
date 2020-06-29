import React from 'react'
import {Segment, Container,Message, Grid, Image} from 'semantic-ui-react'


const contactpage =()=> {
    return(     
    <div>
        <Container >
        <Grid columns={2} stackable>
      <Grid.Column>
        <Segment style={{height:420}}>
        <Message style={{maringBottom:100, maringTop:100}}>
                <Message.Header>Торгово-строительная компания МКС</Message.Header>
                <Message.List>
                <Message.Item>Казань, Оренбургский тракт, 160, офис 206</Message.Item>
                <Message.Item>Tел.:  +7 (843) 2039444 </Message.Item>
                <Message.Item>office@mks-kazan.ru </Message.Item>
                <Segment>  
 Мы рады посетителям в будние дни с 9:00 до 18:00.<br/>                
При этом мы понимаем, как дорого Ваше время, и готовы по согласованию провести индивидуальную встречу в удобное для Вас время в нашем офисе или даже выехать к Вам.      
            </Segment>
                </Message.List>
            </Message>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>
        <Image src='https://avatars.mds.yandex.net/get-altay/1045589/2a0000016647b60cddbb4264aed2d2398367/XXL' fluid />
        </Segment>
      </Grid.Column>
    </Grid>
        </Container>
        
   
    </div>
    );
}
export default contactpage