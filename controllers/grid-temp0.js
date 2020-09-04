const db = require('../dbmysql')

module.exports = {
    getAll :  (req, res )=>{
        let sql =  "select * from customer order by 1"
        db.query(sql,(err, result)=>{
            if (err ) throw err
            res.json(result)
        })
    },
    addData : (req, res)=>{
        let sql = 'insert into customer(name, email, phone, address, status) values(?,?,?,?,?)'
        let customer = req.body
        // console.log(customer)
        // console.log(typeof customer)
        bind = []
        // i=0
        for(const pro in customer) {
            // if(i==0) {
            //     i++;
            //     continue
            // }
            bind.push(customer[pro])
        }
        db.query(sql, bind , (err)=>{
            if(err) throw err
            res.json('Success!!!')
        })
        // console.log(bind)
    },
    update: (req, res)=>{
        let sql = 'update customer set name=?, email=?, phone=?, address=?, status=? where id = ?'
        let customer = req.body
        bind = []
        for(const pro in customer) 
            bind.push(customer[pro])
        bind = [...bind,customer.id]
        bind.shift()
        console.log(bind)
        db.query(sql, bind , (err)=>{
            if(err) throw err
            res.json('Success!!!')
        })
        //console.log(sql)
    },
    delete: (req, res)=>{
        let sql = 'delete from customer where id=?'
        let id = req.params.id
        console.log(id)
        db.query(sql,[id], (err)=>{
            if(err) throw err
            res.json('Success!!!')
        })
    }
}