const express = require('express')
const config = require('config')
const mogoose = require('mongoose')

const app = express()

app.use('/api/auth', require('./routes/aurh.routes'))

const PORT = config.get('port')||5000

async function start(){
    try {
        await mogoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(PORT, () => console.log('app has been started on port '+PORT))
    } catch (e) {
        console.log('server error', e.message)
        process.exit(1)
    }
}

start()

