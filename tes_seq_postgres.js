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

// insert data
Kasir.create({
    nama: 'Budi',
    usia: 25,
    kota: 'Bandung',
}).then(() => {
    console.log('Data sukses dikirim!')
})

// get all data
Kasir.findAll().then((dataku) => {
    console.log(dataku.map((konten, index) => {
        return konten.dataValues
    }))
})

// get data by id
Kasir.findById(2).then((dataku) => {
    console.log(dataku.dataValues)
})

// get data by a specific attribute (misal: nama)
Kasir.findOne({where: {nama:'Andi'}}).then((dataku) => {
    console.log(dataku.dataValues)
})

// update sebuah data
Kasir.update(
    {nama: 'Ali'},
    {where: {id: 1}}
).then(() => {
    console.log('Data sukses terupdate!')
})

// delete sebuah data
Kasir.destroy(
    {where: {id: 1}}
).then(() => {
    console.log('Data sukses terhapus!')
})
