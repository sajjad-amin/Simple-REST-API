const sqlite = require('sqlite3')

let connection = () => {
    return new sqlite.Database('./database/data.db')
}

let insertData = (req, res) => {
    let db = connection()
    let obj = req.body
    let query = 'insert into info (name, email, phone) values (?, ?, ?)'
    let data = [obj.name, obj.email, obj.phone]
    db.run(query, data, err => {
        if (err) {
            res.json({ status: false })
        } else {
            res.json({ status: true })
        }
    })
    db.close()
}
let getAllData = (req, res) => {
    let db = connection()
    let query = 'select * from info'
    db.all(query, (err, rows) => {
        let arr = []
        for (let i in rows) {
            arr[i] = rows[i]
        }
        res.json(arr)
    })
    db.close()
}
let getSingleData = (req, res) => {
    let db = connection()
    let query = 'select * from info where id = ?'
    db.get(query, [req.params.id], (err, row) => {
        res.json(row)
    })
    db.close()
}
let updateData = (req, res) => {
    let db = connection()
    let obj = req.body
    let query = 'update info set name = ?, email = ?, phone = ? where id = ?'
    let data = [obj.name, obj.email, obj.phone, obj.id]
    db.run(query, data, err => {
        if (err) {
            res.json({status:false})
        } else {
            res.json({status:true})
        }
    })
    db.close()
}
let deleteData = (req, res) => {
    let db = connection()
    let query = 'delete from info where id = ?'
    let id = req.body.id
    db.run(query, [id], err => {
        if (err) {
            res.json({ status: false })
        } else {
            res.json({ status: true })
        }
    })
    db.close()
}
module.exports = {
    insertData,
    getAllData,
    getSingleData,
    updateData,
    deleteData
}