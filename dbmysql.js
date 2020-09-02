const mysql = require('mysql')

const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'test'
})

conn.connect((err)=>{
    if(err) throw err
    console.log('Connected to database')
})

module.exports = conn