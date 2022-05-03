const express = require('express')
const app = express()

app.get('/names', (req, res)=> {
  res.send("noodles")
})

app.listen(5000,()=>{
    console.log("the server is running on port 5000");
})