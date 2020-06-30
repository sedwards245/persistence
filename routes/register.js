const express = require('express')
const router = express.Router()
const db = require('../db')

router.get('/', (req, res) => {
    res.send('register endpoint')
})

router.post('/', (req, res) => {
    if(req.body.username !== undefined && req.body.email !== undefined){
        db.query(`INSERT INTO students VALUES('${req.body.username}', '${req.body.email}', default)` , (err, results) => {
            if(err){
                res.status(500).send(err.stack).end()
            } else {
                res.status(200).json(results.rows)
            }
        })
    } else {
        res.status(400).end()
    }
  })

module.exports = router