const {Router} = require('express')
const router = Router()
const mailer = require('./nodemailer')
router.post('/mailern', (req, res) => { 
    if(!req.body.namecolor ||!req.body.nametitle || !req.body.name || !req.body.phone) return res.sendStatus(400)   
    const message = {    
        to: 'asokko@mail.ru',
        subject: 'Заказ',
        html: `
        материалы: ${req.body.nametitle}
        <br/>
        цвета: ${req.body.namecolor}
        <br/>
        имя: ${req.body.name}
        <br/>
        телефон: ${req.body.phone}
        `
    }
    mailer(message) 
    
})
module.exports = router