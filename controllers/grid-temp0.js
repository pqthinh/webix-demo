const db = require('../dbmysql')

module.exports = {
    getAll :  (req, res )=>{
        let sql =  "select * from customer order by 1"
        db.query(sql,(err, result)=>{
            if (err ) throw err
            res.json(result)
        })
    }
}