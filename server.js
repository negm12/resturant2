const express = require('express')
const serverstatic = require('serve-static')
const path = require('path')
const app = express()

app.use('/',serverstatic(path.join(__dirname,'/dist')))

app.get('/.*/' , (req , res)=>{
    res.sendFile(path.join(__dirname, '/dist/index.html'))
})

const port = process.env.port || 8080
app.listen(port)
console.log(`app is listenning on ${port}`)