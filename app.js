var express = require('express')
var cors = require('cors')
var routeKu = require('./route/route_seq_pgsql')

var app = express()
app.use(cors())
app.use(routeKu)

// initial route
app.get('/', (req, res)=>{
    res.send('<h2>Express & PostgreSQL dengan Sequelize</h2>')
})

app.listen(3210, () => {
    console.log('Server aktif @port 3210!')
})