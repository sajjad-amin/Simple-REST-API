const sqlite = require('sqlite3')
const db = new sqlite.Database('./database/data.db')

let insertData = (req, res) => {
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
}
let getAllData = (req, res) => {
    let query = 'select * from info'
    db.all(query, (err, rows) => {
        let arr = []
        for (let i in rows) {
            arr[i] = rows[i]
        }
        res.json(arr)
    })
}
let getSingleData = (req, res) => {
    let query = 'select * from info where id = ?'
    db.get(query, [req.params.id], (err, row) => {
        res.json(row)
    })
}
let updateData = (req, res) => {
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
}
let deleteData = (req, res) => {
    let query = 'delete from info where id = ?'
    let id = req.body.id
    db.run(query, [id], err => {
        if (err) {
            res.json({ status: false })
        } else {
            res.json({ status: true })
        }
    })
}
module.exports = {
    insertData,
    getAllData,
    getSingleData,
    updateData,
    deleteData
}