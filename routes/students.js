const express = require('express')
const router = express.Router()
const db = require('../db')

router.get('/', (req, res)=> {
    let queryString = ""
    if (req.query.search !== undefined) {
        queryString = `SELECT * FROM students WHERE username LIKE %${id}%`
    } else {
        queryString = `SELECT * FROM students`
    }
    db.query(queryString, (err, results) => {
        if(err){
            res.status(500).end()
        } else {
            res.status(200).json(results.rows)
        }
    })
})


router.get('/students/:studentId', (req, res)=> {
//    res.send(students.find(element => element.studentId ==  req.params.studentId))
})

//GET /grades/:studentId - returns all grades for a given student by student id
// app.get('/grades/:studentId', (req, res) => {
//     res.send(students.find(element => element.studentId ==  req.params.studentId).grades)
// })

module.exports = router