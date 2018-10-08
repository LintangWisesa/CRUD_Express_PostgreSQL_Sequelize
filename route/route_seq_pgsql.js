var router = require('express').Router()
var bodyParser = require('body-parser')
router.use(bodyParser.json())

var sequelize = require('sequelize')
var url = 'postgres://postgres:12345@localhost:5432/minimarket'
var seq = new sequelize(url)

// koneksikan ke db minimarket di postgresql
seq.authenticate().then(() => {
    console.log('Sukses terhubung ke PostgreSQL!')
}).catch((error) => {
    console.log(error)
})

// create model = refleksikan isi tabel
var Kasir = seq.define('kasir', {
    nama: {type: sequelize.STRING},
    usia: {type: sequelize.INTEGER},
    kota: {type: sequelize.STRING}    
})

// create/connect to table
Kasir.sync({force: false}).then(() => {
    console.log('Tabel sukses dibuat!')
})

// route GET all data
router.get('/kasir', (req, res) => {
    Kasir.findAll().then((dataku) => {
        var allData = dataku.map((konten, index) => {
            return konten.dataValues
        })
        console.log(allData)
        res.send(allData)
    })
})

// route GET data by id
router.get('/kasir/:id', (req, res) => {
    Kasir.findById(req.params.id).then((dataku) => {
        console.log(dataku.dataValues)
        res.send(dataku.dataValues)
    })
})

// route POST data
router.post('/kasir', (req, res)=>{
    Kasir.create({
        nama: req.body.nama,
        usia: req.body.usia,
        kota: req.body.kota,
    }).then(() => {
        console.log('Data sukses dikirim!')
        res.send('Data sukses dikirim!')
    })
})

// route PUT update specific data
router.put('/kasir/:id', (req,res)=>{
    Kasir.update({
        nama: req.body.nama,
        usia: req.body.usia,
        kota: req.body.kota
        },
        {where: {id: req.params.id}}
    ).then(() => {
        console.log('Data sukses terupdate!')
        res.send('Data sukses terupdate!')
    })
})

router.delete('/kasir/:id', (req,res)=>{
    Kasir.destroy(
        {where: {id: req.params.id}}
    ).then(() => {
        console.log('Data sukses terhapus!')
        res.send('Data sukses terhapus!')
    })
})

module.exports = router