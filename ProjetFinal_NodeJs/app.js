const express=require('express')
const app=express();

const bodyParser=require('body-parser')
const mongoose=require('mongoose')
require('dotenv/config')
const TeamRoute=require('./routes/teams')
const GroupRoute=require('./routes/groups')
const GamesRoute=require('./routes/games')


app.use(bodyParser.json())
app.use('/teams',TeamRoute);
app.use('/groups',GroupRoute);
app.use('/games',GamesRoute);



app.get('/',(req,res)=>{
    res.send('Teams page')
})
mongoose.connect(process.env.DATABASE_CONNECTOR,()=>{
    console.log('DB is connected')
})
app.listen(3000,()=>{
    console.log('Your server is runnig')
})