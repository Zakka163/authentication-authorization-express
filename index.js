const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./router')

const app = express();

const port = 8000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(router)


app.listen(port,()=>{
  console.log('running in localhost....')
})