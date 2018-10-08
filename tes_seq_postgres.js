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

// create table
Kasir.sync({force: false}).then(() => {
    console.log('Tabel sukses dibuat!')
})