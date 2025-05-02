const express = require('express');

const port = 3000;

const app = express();

app.get('/', (req,res)=>{
    res.status(200).send({message:"Paynest backend welcomes you!!!"})
});

app.listen(port,()=>{
    console.log(`server started at http://localhost:${port}`)
});
