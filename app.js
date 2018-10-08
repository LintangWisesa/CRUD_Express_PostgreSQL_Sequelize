var express = require('express')
var cors = require('cors')

var app = express()
app.use(cors())

// initial route
app.get('/', (req, res)=>{
    res.send('<h2>Express & PostgreSQL dengan Sequelize</h2>')
})

app.listen(3210, () => {
    console.log('Server aktif @port 3210!')
})