const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/tin-tuc', (req, res) => res.send('Tin Tuc'))
app.get('/contact', function(req, res){
    res.send('Liên hệ')
})

app.listen(process.env.PORT || 3000)