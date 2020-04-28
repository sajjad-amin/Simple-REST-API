const homeRouter = require('express').Router()
const path = require('path')

homeRouter.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../html', 'index.html'));
})

homeRouter.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../html', '404.html'));
})

module.exports = homeRouter