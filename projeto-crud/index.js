const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3001
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'cadastro'
})

const pessoas = require('./routes/pessoas')

const depedencies = {
    connection
}

app.use(express.static('public'))

//view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('home')
})

app.use('/pessoas', pessoas({connection}))

connection.connect(() => {
    app.listen(port, () => {
        console.log('crud crud')
    })
})