const express = require('express')
const apiRouter = require('./routers/apiRouter')
const homeRouter = require('./routers/homeRouter')
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/api', apiRouter)
app.use('/', homeRouter)

const PORT = process.env.PORT || 8888
app.listen(PORT, () => {
    console.log('server running on port '+PORT)
})