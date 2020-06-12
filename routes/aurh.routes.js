const {Router} = require('express')
const bcryp = require('bcryptjs')
const config = require('config')
const jwt = require ('jsonwebtoken')
const {check, validatorResult}= require('express-validator')
const User = require('../models/User')
const router= Router()

// api/auth/register
router.post(
    '/register',
    [
        check('email', 'Некоректный email').isEmail(),
        check('password', 'Минимальное длина пароля 6 символов').isLength({min: 6})
    ], 
    async (req, res)=>{
    try {
        const errors=validatorResult(req);
        
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors:errors.array(),
                message: 'Некорректные данные при регистрации'
            })
        }

        const {email, password}=req.body

        const condidate = await User.findOne({email: email})
        if (condidate){
            return res.status(400).json({message:'Такой пользователь уже существует'})
        }
        const hashedPassword = await bcryp.hash(password, 12)
        const user = new User ({email, password:hashedPassword})
        await user.save()
        res.status(201).jsin({message:'Пользователь создан'})
    } catch (e) {
        res.status(500).json({message:'Что-то пошло не так'})
    }
}) 
// api/auth/login
router.post('/login',
    [
        check('email', 'Введите корректный email').normalizeEmail().isEmail(),
        check('password', 'Введите пароль').exists()
    ], 
    async (req, res)=>{
        try {
            const errors=validatorResult(req);
            
            if(!errors.isEmpty()){
                return res.status(400).json({
                    errors:errors.array(),
                    message: 'Некорректные данные при входе в систему'
                })
            }

            const {email, password} = req.body

            const user = await User.findOne({email})

            if(!user){
                res.status(400).json({message:'пользователь не найден'})
            }

            const isMatch = await bcrypt.compare(password, user.password)

            if(!isMatch){
                return res.status(400).json({message:'неверный пароль, попробуйте снова'})
            }

            const token = jwt.sign(
                {userId:user.id},
                config.get('jwtSecret'),
                {expiresIn:'1h'}
            )
            res.json({token, userId: user.id})
        } catch (e) {
            res.status(500).json({message:'Что-то пошло не так'})
        }
    }) 
module.exports = router 