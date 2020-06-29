import React, { Component} from "react";
import {Segment, Message, Container} from "semantic-ui-react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"


export default class LazyLoad extends Component {
  
  render() {
    const settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
    };
    return (
      <div>
        <div style={{textAlign: 'center',
        position: 'absolute', left: '50%', top: '40%',
        transform: 'translate(-50%, -50%)'
        }}>
          <Slider style={{width: 500}} {...settings}>
            <div>
              <img src={"https://db3pap007files.storage.live.com/y4p9IkJJdrZJvuqtNWql55pNIrQIyrSWtqAMVS6xYhZOLk5TaXyQZavpR84ltApaE1hSwxTAeRSEJATlClOfwyX2G_5CXiz6jLgMWBL9lgW1egW4HTq_KWMGJbdj09thqCG9Uzjg9DtKDV-8WzEQW6lVcaTGrzoYg0mgDn2WvzRVk2qPF8rSgLU6bTVdUdQdsT7W7bIjQ_5a0C5zPiPA8gWtzuSqJH0zbtx4TEF4lzWlF8/imgonline-com-ua-Resize-JKduOpnePxhgh%20%282%29%20%282%29.jpg?psid=1&width=496&height=300"} />
            </div>
            <div>
              <img src={"https://db3pap007files.storage.live.com/y4pEtAy6wdYaOMF-JyZ-TQWYJr5GpJ-Mcz9-RtmsW8RryhSkMPnfTV3FryXLgvKf2OCHzoyUqBpSaxORnMdRHQMft-WrpqtZElzZ42dPGv7ZJDMgATdPQOeuBZ9JCxutywa6HhAKJxvVj1v4j4pRBpH3am8-vSj-mq1RW8jbJM6cbL1GOMUjGFDgrKdxkg5rpUTw3TYAcq_ibRFnkk5VgSemCDjow0LsdTg0IuoURYCdUE/imgonline-com-ua-Resize-jmhx20QhqR64SK.jpg?psid=1&width=400&height=300"} />
            </div>
            <div>
              <img src={"https://db3pap007files.storage.live.com/y4pUO2XU7jTcy9QpzMN2Hhg1Jr1fzy-NvWTLlE7MIRdYj92rHB1dXjRDkdk3Up9ZXgP0f6feoTqptTY3qDYZcbFzReuqC1dd_8v0gIhrPvmYRkQeyEyiMfgkS2e0zhMDQLgHsn1nvOuUHrP-DEQKCABUkPlEI6l1gYlS_KRaGNFQb-M2J80OlKocrwYLBrl2g6y8WFmq4kQDiu_Akq_Y147WKslE3-_Ry2Z6fXcGkvutro/imgonline-com-ua-Resize-2xGLucwiA7ZjC.jpg?psid=1&width=535&height=300"}/>
            </div>
            <div>
              <img src={"https://db3pap007files.storage.live.com/y4pX_z2cXO-xl3ghLvPq-iLtMK6NPQs6GbcG-LrgdNKrl0nYPYzjTXyYkhoqrVDgw5RqkrF52bxxrl4lGrCH8bh5GiVxp1inKyfyLExFzrdbol-jh-kUk7nGVmUdATDghEaWyU5ImhPTZ20uWo3IyXlSuI_8BY5wOjWg4eX7Q_9pJfo9OdiWsUmhFfQEhSiuaY8vLnA345Zms_RgL9Op12yRPNfaqeGyGF-lYT13TAmUBM/imgonline-com-ua-Resize-bXeoqrB68j.jpg?psid=1&width=535&height=300"} />
            </div>
          </Slider>
          <h2> Наши работы</h2>
          </div>

          <Container style={{marginTop: 400}} >
            <Segment style={{fontSize:17}}>
            <Message>
    <Message.Header>Добрый день. Добро пожаловать на наш сайт.</Message.Header>
    <p>
    Вы попали к нам, а значит , Ваша стройка идет полным ходом и Вы подобрались к одной из самых важных ее стадий - кровле. Наша компания готова помочь в грамотном подборе и расчете материалов для "кровельного пирога" любой сложности. Наши специалисты всегда готовы проконсультировать по представленным продуктам, а также помогут в  реализации самых смелых креативных идей оформления кровли.     
                           
    </p>
    <br/>
    <hr/>
    <Message.Header>В нашем ассортименте всегда есть:</Message.Header> 
    <Message.List>
      <Message.Item>Металлочерепица разных форм и расцветок от ведущих производителей</Message.Item>
      <Message.Item>Фальцевая кровля</Message.Item>
      <Message.Item>Профилированный лист</Message.Item>
      <Message.Item>Гибкая черепица от проверенных производителей </Message.Item>
      <Message.Item>Натуральная черепица </Message.Item>
      <Message.Item>Мембраны и пленки для устройства плоской кровли </Message.Item>
    </Message.List>
    <br/>
    <hr/>
    <Message.Header> А также сопутствующие товары:</Message.Header> 
    <Message.List>
      <Message.Item>Системы отвода воды </Message.Item>
      <Message.Item>Водосточная система</Message.Item>
      <Message.Item>Вентиляция и системы безопасности кровли</Message.Item>
      <Message.Item>Отделочные материалы (софиты, сайдинг, металлические изделия, фасадные панели и пр.) </Message.Item>
      <Message.Item>Мембраны и пленки, утеплители</Message.Item>
      <Message.Item>Мансардные окна и чердачные лестницы</Message.Item>
    </Message.List>
    <br/>
    <hr/>
    <Message.Header>Мы ориентированы:</Message.Header>
    <Message.List>
      <Message.Item>На высокое качество поставляемых материалов от известных брендов с большим опытом и хорошей репутацией на строительном рынке. При этом Вы можете быть уверены в адекватности соотношения цены и качества поставляемых материалов.</Message.Item>
      <Message.Item>На розничных и оптовых клиентов. Мы прекрасно понимаем, насколько сложен и ответственнен процесс строительства, поэтому многие строят дом только один раз в жизни. Именно поэтому мы готовы предоставить Вам максимальную помощь по вопросам, в которых мы действительно разбираемся, чтобы Вы могли с теплом в доме и на душе вспоминать о нас и рекомендовать своим друзьям и близким. Но также мы рады тем, для кого строительство стало профессией и кто нуждается в надежном помощнике, советнике, партнере в нашем лице. </Message.Item>
      <Message.Item>На высокое качество производимых работ. С нами работают многие кровельные бригады, которые являются профессионалами своего дела и имеют хорошие рекомендации от большого количества клиентов.</Message.Item>
    </Message.List>
  </Message>                                  
            </Segment>
          </Container>
        
      </div>
    );
  }
}