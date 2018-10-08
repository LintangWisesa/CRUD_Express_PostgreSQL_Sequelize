var router = require('express').Router()
var bodyParser = require('body-parser')
router.use(bodyParser.json())

// routes
app.get('/data', (req, res)=>{
    res.send('ini data')
})

module.exports = router