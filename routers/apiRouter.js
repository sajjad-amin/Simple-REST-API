const apiRouter = require('express').Router()
const controller = require('../controllers/apiController')

let { insertData, getAllData, getSingleData, updateData, deleteData } = controller

apiRouter.post('/insert', insertData)
apiRouter.get('/contacts', getAllData)
apiRouter.get('/contacts/:id', getSingleData)
apiRouter.put('/update', updateData)
apiRouter.delete('/delete', deleteData)

module.exports = apiRouter