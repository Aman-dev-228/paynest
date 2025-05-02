const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
const connectToDb = require('./utils/dbConnection');
const userRoutes = require('./routes/userRoutes')
dotenv.config();
const port = process.env.PORT || 3000;

const path = require('path');



const app = express();

app.use(express.static(path.join(__dirname, '../ui/dist')));

app.use(express.json());
app.use(cors());
app.get('/', (req,res)=>{
    res.status(200).send({message:"Paynest backend welcomes you!!!"})
});

app.use('/user', userRoutes);

app.listen(port,()=>{
    console.log(`server started at http://localhost:${port}`)
    connectToDb();
});
