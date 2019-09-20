const express = require('express')

const pessoasRouter = ({connection}) => {
    const router = express.Router()
    router.get('/', (req, res) => {
        connection.query('select * from pessoas', (err, result) => {
            res.send(result)
        })
    })
    
    return router
}

module.exports = pessoasRouter