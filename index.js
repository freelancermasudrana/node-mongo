const express = require('express');
const app =express();

app.get('/',(req,res)=>{
    res.send("Thank You for Calling me")
})
app.listen(3000,()=>console.log("listening post 3000"));