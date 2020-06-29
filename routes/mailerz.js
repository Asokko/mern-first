const {Router} = require('express')
const router = Router()
const mailer = require('./nodemailer')
router.post('/mailerz', (req, res) => { 
    if(!req.body.nametitle) return res.sendStatus(400)   
    const message = {    
        to: 'asokko@mail.ru',
        subject: 'Congratulations! You are successfully registred on our site',
        html: `
        hello ${req.body.nametitle}
        `
    }
    mailer(message) 
    
})
module.exports = router