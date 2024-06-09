const express = require('express')
const app = express();
const port = 3000;

const router = require('./router/auth-router')
app.use('/api/auth',router)

app.get('/', (req,res)=>{
    res.send('hellow')
})

app.listen(port,()=>{
    console.log(`this is listne at ${port}`)
})